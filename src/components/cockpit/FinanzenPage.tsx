import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CurrencyEur,
  TrendUp,
  TrendDown,
  ArrowRight,
  ChartBar,
  Wallet,
  Receipt,
  House,
} from '@phosphor-icons/react';
import { mockFinanceSnapshot, mockObjects, getMyOwnedUnits } from '@/data/mockCockpitData';
import { useCockpitMode } from '@/context/CockpitModeContext';

export function FinanzenPage() {
  const { mode, selectedObjectId, selectedUnitId } = useCockpitMode();
  const myOwnedUnits = getMyOwnedUnits();
  const currentOwnedUnit = myOwnedUnits.find((u) => u.unitId === selectedUnitId);
  const currentObject = mockObjects.find((obj) => obj.id === selectedObjectId);

  // Mock financial summary data - different for WEG vs Eigentümer
  const wegFinancialSummary = {
    totalHausgeld: 12500,
    hausgeldPlan: 18000,
    totalBetriebskosten: 8200,
    betriebskostenPlan: 9000,
    ruecklagen: 45000,
    ruecklagenPlan: 50000,
    jahresvergleich: '+8%',
    trendPositive: false,
  };

  const eigentuemerFinancialSummary = {
    totalHausgeld: 2400,
    hausgeldPlan: 3600,
    mieteinnahmen: 1250,
    mieteinnahmenPlan: 1250,
    nebenkosten: 180,
    nebenkostenPlan: 200,
    jahresvergleich: '+5%',
    trendPositive: true,
  };

  // financialSummary is determined by mode but not currently used directly
  // keeping separate summaries for clarity in the template

  const wegTransactions = [
    { id: 1, title: 'Heizungswartung', amount: -1250, date: '2025-01-05', type: 'ausgabe' },
    { id: 2, title: 'Hausgeld Januar', amount: 2400, date: '2025-01-01', type: 'einnahme' },
    { id: 3, title: 'Treppenhausreinigung', amount: -180, date: '2024-12-28', type: 'ausgabe' },
    { id: 4, title: 'Hausgeld Dezember', amount: 2400, date: '2024-12-01', type: 'einnahme' },
    { id: 5, title: 'Winterdienst', amount: -450, date: '2024-12-15', type: 'ausgabe' },
  ];

  const eigentuemerTransactions = [
    { id: 1, title: 'Miete Januar', amount: 1250, date: '2025-01-01', type: 'einnahme' },
    { id: 2, title: 'Hausgeld Januar', amount: -320, date: '2025-01-05', type: 'ausgabe' },
    { id: 3, title: 'Miete Dezember', amount: 1250, date: '2024-12-01', type: 'einnahme' },
    { id: 4, title: 'Hausgeld Dezember', amount: -320, date: '2024-12-05', type: 'ausgabe' },
    { id: 5, title: 'Nebenkostenabrechnung', amount: -85, date: '2024-11-15', type: 'ausgabe' },
  ];

  const transactions = mode === 'eigentuemer' ? eigentuemerTransactions : wegTransactions;

  const bgGradient = mode === 'eigentuemer'
    ? 'from-teal-50/30 to-background'
    : 'from-background to-muted/30';

  return (
    <div className={`min-h-screen bg-gradient-to-b ${bgGradient}`}>
      {/* Spacer for fixed header */}
      <div className="h-24" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Context Info Bar (Eigentümer mode) */}
        {mode === 'eigentuemer' && currentOwnedUnit && (
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
          transition={{ duration: 0.4, delay: mode === 'eigentuemer' ? 0.05 : 0 }}
        >
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Finanzen
          </h1>
          <p className={mode === 'eigentuemer' ? 'text-teal-700 mt-1' : 'text-muted-foreground mt-1'}>
            {mode === 'eigentuemer'
              ? `Finanzübersicht für ${currentOwnedUnit?.unitName || 'Ihre Wohnung'}`
              : `Finanzübersicht für ${currentObject?.name || 'Objekt'}`}
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {mode === 'eigentuemer' ? (
            <>
              {/* Eigentümer Cards */}
              <Card className="border-2 border-muted">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Mieteinnahmen</span>
                    <CurrencyEur className="h-4 w-4 text-teal-600" />
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    +{eigentuemerFinancialSummary.mieteinnahmen.toLocaleString('de-DE')} €
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    pro Monat
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Hausgeld</span>
                    <Wallet className="h-4 w-4 text-teal-600" />
                  </div>
                  <p className="text-2xl font-bold">
                    {eigentuemerFinancialSummary.totalHausgeld.toLocaleString('de-DE')} €
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    YTD von {eigentuemerFinancialSummary.hausgeldPlan.toLocaleString('de-DE')} €
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Nebenkosten</span>
                    <Receipt className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-2xl font-bold">
                    {eigentuemerFinancialSummary.nebenkosten.toLocaleString('de-DE')} €
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    von {eigentuemerFinancialSummary.nebenkostenPlan.toLocaleString('de-DE')} € geplant
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Rendite</span>
                    {eigentuemerFinancialSummary.trendPositive ? (
                      <TrendUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <p className={`text-2xl font-bold ${eigentuemerFinancialSummary.trendPositive ? 'text-green-600' : 'text-red-500'}`}>
                    {eigentuemerFinancialSummary.jahresvergleich}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    vs. Vorjahr
                  </p>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {/* WEG Cards */}
              <Card className="border-2 border-muted">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Hausgeld YTD</span>
                    <Wallet className="h-4 w-4 text-[#2463eb]" />
                  </div>
                  <p className="text-2xl font-bold">
                    {wegFinancialSummary.totalHausgeld.toLocaleString('de-DE')} €
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    von {wegFinancialSummary.hausgeldPlan.toLocaleString('de-DE')} € geplant
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Betriebskosten</span>
                    <Receipt className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-2xl font-bold">
                    {wegFinancialSummary.totalBetriebskosten.toLocaleString('de-DE')} €
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    von {wegFinancialSummary.betriebskostenPlan.toLocaleString('de-DE')} € geplant
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Rücklagen</span>
                    <ChartBar className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold">
                    {wegFinancialSummary.ruecklagen.toLocaleString('de-DE')} €
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ziel: {wegFinancialSummary.ruecklagenPlan.toLocaleString('de-DE')} €
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Jahresvergleich</span>
                    {wegFinancialSummary.trendPositive ? (
                      <TrendUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                  <p className={`text-2xl font-bold ${wegFinancialSummary.trendPositive ? 'text-green-600' : 'text-red-500'}`}>
                    {wegFinancialSummary.jahresvergleich}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    vs. Vorjahr
                  </p>
                </CardContent>
              </Card>
            </>
          )}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Budget Progress */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="border-2 border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <ChartBar className={mode === 'eigentuemer' ? 'h-5 w-5 text-teal-600' : 'h-5 w-5 text-[#2463eb]'} />
                  Budgetübersicht
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockFinanceSnapshot.map((item, index) => {
                    const percentage = Math.round((item.current / item.planned) * 100);
                    const isOverBudget = percentage > 100;
                    return (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">{item.label}</span>
                          <div className="flex items-center gap-2">
                            <span className={isOverBudget ? 'text-red-600 font-medium' : ''}>
                              {item.current.toLocaleString('de-DE')} €
                            </span>
                            <span className="text-muted-foreground">
                              / {item.planned.toLocaleString('de-DE')} €
                            </span>
                            <Badge
                              variant="outline"
                              className={
                                isOverBudget
                                  ? 'bg-red-50 text-red-700 border-red-200'
                                  : percentage > 80
                                  ? 'bg-orange-50 text-orange-700 border-orange-200'
                                  : 'bg-green-50 text-green-700 border-green-200'
                              }
                            >
                              {percentage}%
                            </Badge>
                          </div>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              isOverBudget
                                ? 'bg-red-500'
                                : percentage > 80
                                ? 'bg-orange-500'
                                : mode === 'eigentuemer' ? 'bg-teal-600' : 'bg-[#2463eb]'
                            }`}
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="border-2 border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <CurrencyEur className={mode === 'eigentuemer' ? 'h-5 w-5 text-teal-600' : 'h-5 w-5 text-[#2463eb]'} />
                  Letzte Buchungen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{tx.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(tx.date).toLocaleDateString('de-DE')}
                        </p>
                      </div>
                      <span
                        className={`text-sm font-semibold ${
                          tx.amount > 0 ? 'text-green-600' : 'text-foreground'
                        }`}
                      >
                        {tx.amount > 0 ? '+' : ''}
                        {tx.amount.toLocaleString('de-DE')} €
                      </span>
                    </div>
                  ))}
                </div>
                <button className={`w-full mt-4 text-sm font-medium flex items-center justify-center gap-1 ${
                  mode === 'eigentuemer'
                    ? 'text-teal-600 hover:text-teal-700'
                    : 'text-[#2463eb] hover:text-[#1d4ed8]'
                }`}>
                  Alle Buchungen anzeigen
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
