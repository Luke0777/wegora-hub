import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Lightbulb,
  TrendUp,
  House,
  ChartLineUp,
  ArrowRight,
  CheckCircle,
  Warning,
  Receipt,
  Wrench,
  Percent,
} from '@phosphor-icons/react';
import { useCockpitMode } from '@/context/CockpitModeContext';
import {
  getMyOwnedUnits,
  getFinanceForOwnedUnit,
  getTenantForOwnedUnit,
} from '@/data/mockCockpitData';

export function OptimierungPage() {
  const { mode, selectedUnitId } = useCockpitMode();
  const myOwnedUnits = getMyOwnedUnits();
  const currentOwnedUnit = myOwnedUnits.find((u) => u.unitId === selectedUnitId);

  // Get finance and tenant for selected unit
  const currentFinance = selectedUnitId ? getFinanceForOwnedUnit(selectedUnitId) : null;
  const currentTenant = selectedUnitId ? getTenantForOwnedUnit(selectedUnitId) : null;

  // If in WEG mode, show a message to switch
  if (mode === 'weg') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="h-24" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="text-center py-16">
            <Lightbulb className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-semibold mb-2">Optimierung</h1>
            <p className="text-muted-foreground mb-6">
              Diese Seite ist nur im Eigentümer-Modus verfügbar.
            </p>
            <p className="text-sm text-muted-foreground">
              Wechseln Sie oben im Header zu "Meine Wohnungen".
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Calculate rendite for current unit
  const rendite = currentFinance && currentFinance.yearlyRentIncome > 0
    ? ((currentFinance.cashflow / currentFinance.yearlyRentIncome) * 100).toFixed(1)
    : '0';
  const isGoodRendite = parseFloat(rendite) > 50;

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/30 to-background">
      <div className="h-24" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Context Info Bar */}
        {currentOwnedUnit && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="rounded-xl p-3 border-2 bg-teal-50/80 border-teal-200">
              <div className="flex items-center gap-2">
                <House className="h-4 w-4 text-teal-700" />
                <span className="font-medium text-teal-800">
                  {currentOwnedUnit.unitName} – {currentOwnedUnit.objectName}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Page Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Optimierung
          </h1>
          <p className="text-teal-700 mt-1">
            Rendite-Optimierung für {currentOwnedUnit?.unitName || 'Ihre Wohnung'}
          </p>
        </motion.div>

        {/* Unit Performance Overview */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="border-2 border-teal-200 bg-gradient-to-br from-teal-50/50 to-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <ChartLineUp className="h-5 w-5 text-teal-600" />
                Rendite-Übersicht (2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <p className="text-sm text-green-700/80">Mieteinnahmen (Jahr)</p>
                  <p className="text-2xl font-bold text-green-700">
                    {currentFinance?.yearlyRentIncome?.toLocaleString('de-DE') || '0'} €
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                  <p className="text-sm text-rose-600/80">Kosten (YTD)</p>
                  <p className="text-2xl font-bold text-rose-600">
                    {currentFinance?.yearlyCoststoDate?.toLocaleString('de-DE') || '0'} €
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-teal-100 border border-teal-300">
                  <p className="text-sm text-teal-800">Cashflow (Jahr)</p>
                  <p className="text-2xl font-bold text-teal-900">
                    {currentFinance?.cashflow?.toLocaleString('de-DE') || '0'} €
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${isGoodRendite ? 'bg-green-100 border-green-300' : 'bg-orange-100 border-orange-300'} border`}>
                  <p className={`text-sm ${isGoodRendite ? 'text-green-800' : 'text-orange-800'}`}>Netto-Rendite</p>
                  <div className="flex items-center gap-2">
                    <p className={`text-2xl font-bold ${isGoodRendite ? 'text-green-700' : 'text-orange-700'}`}>
                      {rendite}%
                    </p>
                    {isGoodRendite ? (
                      <CheckCircle className="h-5 w-5 text-green-600" weight="fill" />
                    ) : (
                      <Warning className="h-5 w-5 text-orange-600" weight="fill" />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Optimization Suggestions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="border-2 border-muted h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  Optimierungsvorschläge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Recommendation 1: Rent adjustment */}
                  {currentTenant && (
                    <div className="p-4 rounded-lg bg-teal-50 border border-teal-200">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-teal-100">
                          <TrendUp className="h-5 w-5 text-teal-700" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold">Mietanpassung prüfen</p>
                            <Badge className="bg-teal-100 text-teal-700 border-0 text-xs">
                              +{Math.round(currentTenant.monthlyRent * 0.05 * 12)} €/Jahr
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Die aktuelle Miete von {currentTenant.monthlyRent.toLocaleString('de-DE')} €/Monat
                            liegt möglicherweise unter dem Mietspiegel. Eine Anpassung könnte sinnvoll sein.
                          </p>
                          <Button variant="link" size="sm" className="text-teal-700 p-0 h-auto mt-2">
                            Mietspiegel vergleichen
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Recommendation 2: Nebenkosten */}
                  <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-amber-100">
                        <Receipt className="h-5 w-5 text-amber-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold">Nebenkostenoptimierung</p>
                          <Badge className="bg-amber-100 text-amber-700 border-0 text-xs">
                            Potenzial
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Prüfen Sie regelmäßig Ihre Nebenkosten auf Einsparungspotenzial
                          durch Anbieterwechsel bei Energie und Versicherungen.
                        </p>
                        <Button variant="link" size="sm" className="text-amber-700 p-0 h-auto mt-2">
                          Nebenkosten analysieren
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation 3: Modernization */}
                  <div className="p-4 rounded-lg bg-[#2463eb]/5 border border-[#2463eb]/20">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#2463eb]/10">
                        <Wrench className="h-5 w-5 text-[#2463eb]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold">Modernisierungspotenzial</p>
                          <Badge className="bg-[#2463eb]/10 text-[#2463eb] border-0 text-xs">
                            Langfristig
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Energetische Sanierung oder Badmodernisierung können den Wert
                          steigern und höhere Mieten rechtfertigen.
                        </p>
                        <Button variant="link" size="sm" className="text-[#2463eb] p-0 h-auto mt-2">
                          Maßnahmen erkunden
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Metrics & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="border-2 border-muted h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Percent className="h-5 w-5 text-teal-600" />
                  Kennzahlen & Benchmark
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Current metrics */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm">Monatliche Miete</span>
                      <span className="font-semibold">
                        {currentTenant?.monthlyRent?.toLocaleString('de-DE') || '—'} €
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm">Hausgeld/Monat</span>
                      <span className="font-semibold">
                        {currentFinance?.hausgeld?.toLocaleString('de-DE') || '—'} €
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <span className="text-sm">Nebenkosten/Monat</span>
                      <span className="font-semibold">
                        {currentFinance?.nebenkosten?.toLocaleString('de-DE') || '—'} €
                      </span>
                    </div>
                  </div>

                  {/* Benchmark comparison */}
                  <div className="pt-4 border-t border-muted">
                    <p className="text-sm font-medium mb-3">Vergleich zum Markt</p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Ihre Rendite</span>
                          <span className={`font-semibold ${isGoodRendite ? 'text-green-600' : 'text-orange-600'}`}>
                            {rendite}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${isGoodRendite ? 'bg-green-500' : 'bg-orange-500'}`}
                            style={{ width: `${Math.min(parseFloat(rendite), 100)}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Markt-Durchschnitt</span>
                          <span className="font-semibold text-muted-foreground">45%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-muted-foreground/50" style={{ width: '45%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className={`p-4 rounded-lg ${isGoodRendite ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
                    <div className="flex items-center gap-2">
                      {isGoodRendite ? (
                        <CheckCircle className="h-5 w-5 text-green-600" weight="fill" />
                      ) : (
                        <Warning className="h-5 w-5 text-orange-600" weight="fill" />
                      )}
                      <p className={`text-sm font-medium ${isGoodRendite ? 'text-green-800' : 'text-orange-800'}`}>
                        {isGoodRendite
                          ? 'Gute Performance - überdurchschnittliche Rendite'
                          : 'Optimierungspotenzial vorhanden'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
