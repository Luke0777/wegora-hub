import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  User,
  EnvelopeSimple,
  Phone,
  CalendarBlank,
  House,
  Plus,
  ArrowRight,
  FileText,
  CurrencyEur,
  Receipt,
  Calendar,
} from '@phosphor-icons/react';
import { useCockpitMode } from '@/context/CockpitModeContext';
import {
  getMyOwnedUnits,
  getTenantForOwnedUnit,
  getFinanceForOwnedUnit,
} from '@/data/mockCockpitData';

export function MieterPage() {
  const { mode, selectedUnitId } = useCockpitMode();
  const myOwnedUnits = getMyOwnedUnits();
  const currentOwnedUnit = myOwnedUnits.find((u) => u.unitId === selectedUnitId);

  // Get tenant and finance for the selected unit
  const currentTenant = selectedUnitId ? getTenantForOwnedUnit(selectedUnitId) : null;
  const currentFinance = selectedUnitId ? getFinanceForOwnedUnit(selectedUnitId) : null;

  // If in WEG mode, show a message to switch
  if (mode === 'weg') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="h-24" />
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="text-center py-16">
            <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-semibold mb-2">Mieterverwaltung</h1>
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
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Mieter
              </h1>
              <p className="text-teal-700 mt-1">
                Mieterverwaltung für {currentOwnedUnit?.unitName || 'Ihre Wohnung'}
              </p>
            </div>
            {!currentTenant && (
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Mieter hinzufügen
              </Button>
            )}
          </div>
        </motion.div>

        {currentTenant ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Tenant Card */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="border-2 border-teal-200 bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <User className="h-5 w-5 text-teal-600" />
                      Aktueller Mieter
                    </CardTitle>
                    <Badge className={
                      currentTenant.status === 'aktiv'
                        ? 'bg-green-100 text-green-700 border-0'
                        : currentTenant.status === 'gekuendigt'
                        ? 'bg-orange-100 text-orange-700 border-0'
                        : 'bg-gray-100 text-gray-700 border-0'
                    }>
                      {currentTenant.status === 'aktiv' ? 'Aktives Mietverhältnis' :
                       currentTenant.status === 'gekuendigt' ? 'Gekündigt' : 'Ausstehend'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Tenant Info */}
                    <div className="flex items-start gap-4">
                      <div className="p-4 rounded-full bg-teal-100">
                        <User className="h-8 w-8 text-teal-700" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-xl">{currentTenant.name}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <CalendarBlank className="h-4 w-4" />
                          <span>
                            Einzug: {new Date(currentTenant.moveInDate).toLocaleDateString('de-DE')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-muted">
                      {currentTenant.email && (
                        <a
                          href={`mailto:${currentTenant.email}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-teal-50 transition-colors"
                        >
                          <EnvelopeSimple className="h-5 w-5 text-teal-600" />
                          <div>
                            <p className="text-xs text-muted-foreground">E-Mail</p>
                            <p className="text-sm font-medium">{currentTenant.email}</p>
                          </div>
                        </a>
                      )}
                      {currentTenant.phone && (
                        <a
                          href={`tel:${currentTenant.phone}`}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-teal-50 transition-colors"
                        >
                          <Phone className="h-5 w-5 text-teal-600" />
                          <div>
                            <p className="text-xs text-muted-foreground">Telefon</p>
                            <p className="text-sm font-medium">{currentTenant.phone}</p>
                          </div>
                        </a>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" className="flex-1 gap-2">
                        <FileText className="h-4 w-4" />
                        Mietvertrag anzeigen
                      </Button>
                      <Button variant="outline" className="flex-1 gap-2">
                        <EnvelopeSimple className="h-4 w-4" />
                        Nachricht senden
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Finance Summary for this tenant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="border-2 border-muted">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <CurrencyEur className="h-5 w-5 text-teal-600" />
                    Mietübersicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
                      <div className="flex items-center gap-2">
                        <CurrencyEur className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Monatsmiete</span>
                      </div>
                      <span className="font-bold text-green-700">
                        {currentTenant.monthlyRent.toLocaleString('de-DE')} €
                      </span>
                    </div>

                    {currentFinance && (
                      <>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                          <div className="flex items-center gap-2">
                            <Receipt className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Nebenkosten</span>
                          </div>
                          <span className="font-semibold">
                            {currentFinance.nebenkosten?.toLocaleString('de-DE') || '0'} €
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Hausgeld</span>
                          </div>
                          <span className="font-semibold">
                            {currentFinance.hausgeld?.toLocaleString('de-DE') || '0'} €
                          </span>
                        </div>
                      </>
                    )}

                    <div className="pt-3 border-t border-muted">
                      <Button variant="outline" size="sm" className="w-full gap-2">
                        <ArrowRight className="h-4 w-4" />
                        Alle Zahlungen anzeigen
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="border-2 border-dashed border-muted">
              <CardContent className="py-16">
                <div className="text-center">
                  <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Kein Mieter hinterlegt</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Für {currentOwnedUnit?.unitName || 'diese Wohnung'} ist noch kein Mieter erfasst.
                    Fügen Sie einen Mieter hinzu, um das Mietverhältnis zu verwalten.
                  </p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Mieter hinzufügen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
