import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Circle,
  FileText,
  ArrowRight,
  Lightbulb,
  Warning,
  Clock,
  CurrencyEur,
  Users,
  Check,
  WarningCircle,
  Plus,
  User,
  EnvelopeSimple,
  Phone,
  TrendUp,
  CalendarBlank,
  House,
} from '@phosphor-icons/react';
import { useCockpitMode } from '@/context/CockpitModeContext';
import {
  mockTasks,
  mockCases,
  mockDocuments,
  mockEigentuemerTasks,
  mockEigentuemerDocuments,
  getObjectById,
  getEigentuemerCasesForUnit,
  getMyOwnedUnits,
  getFinanceForOwnedUnit,
  getTenantForOwnedUnit,
  getFinanceForObject,
  type CockpitTask,
  type CockpitCase,
  type CockpitDocument,
} from '@/data/mockCockpitData';

export function CockpitPage() {
  // Use global context for mode and selection
  const { mode, selectedObjectId, selectedUnitId } = useCockpitMode();

  const [tasks, setTasks] = useState(mockTasks);
  const [eigentuemerTasks, setEigentuemerTasks] = useState(mockEigentuemerTasks);

  // Eigentümer: Get user's owned units
  const myOwnedUnits = getMyOwnedUnits();

  const currentObject = getObjectById(selectedObjectId);

  // For Eigentümer view: use selected owned unit
  const activeUnitId = mode === 'eigentuemer' ? (selectedUnitId || myOwnedUnits[0]?.unitId || 'unit-5') : (selectedUnitId || 'unit-5');
  const tenant = getTenantForOwnedUnit(activeUnitId);
  const eigentuemerFinance = getFinanceForOwnedUnit(activeUnitId);
  const unitCases = getEigentuemerCasesForUnit(activeUnitId);

  // Get the object for current owned unit
  const currentOwnedUnit = myOwnedUnits.find(u => u.unitId === selectedUnitId);

  const toggleTask = (taskId: string) => {
    if (mode === 'eigentuemer') {
      setEigentuemerTasks(prev =>
        prev.map(t => (t.id === taskId ? { ...t, completed: !t.completed } : t))
      );
    } else {
      setTasks(prev =>
        prev.map(t => (t.id === taskId ? { ...t, completed: !t.completed } : t))
      );
    }
  };

  const getStatusColor = (status: CockpitCase['status']) => {
    switch (status) {
      case 'offen':
        return 'bg-orange-100 text-orange-700';
      case 'in_bearbeitung':
        return 'bg-blue-100 text-blue-700';
      case 'abgeschlossen':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: CockpitCase['status']) => {
    switch (status) {
      case 'offen':
        return 'Offen';
      case 'in_bearbeitung':
        return 'In Bearbeitung';
      case 'abgeschlossen':
        return 'Abgeschlossen';
      default:
        return status;
    }
  };

  // WEG Finance calculations - per Object
  const objectFinanceData = getFinanceForObject(selectedObjectId);
  const financeOnTrack = objectFinanceData.filter(item => {
    const percentage = Math.round((item.current / item.planned) * 100);
    return percentage < 90;
  }).length;

  // WEG Cases
  const activeCases = mockCases
    .filter(c => c.status !== 'abgeschlossen')
    .filter(c => c.objectId === selectedObjectId);
  const offeneCases = activeCases.filter(c => c.status === 'offen');
  const inBearbeitungCases = activeCases.filter(c => c.status === 'in_bearbeitung');

  // ============================================
  // EIGENTÜMER VIEW - Completely different layout
  // ============================================
  if (mode === 'eigentuemer') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-50/30 to-background">
        {/* Spacer for fixed header */}
        <div className="h-24" />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
          {/* Eigentümer Header - fixed height to prevent jump */}
          <div className="mb-6 min-h-[72px]">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Meine Wohnungen
              </h1>
              <p className="text-teal-700 mt-1 font-medium">
                {myOwnedUnits.length} Einheiten im Eigentum
              </p>
            </div>
          </div>

          {/* Current Unit Info Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <div className="rounded-xl p-4 border-2 bg-teal-50/80 border-teal-200">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-100">
                  <House className="h-5 w-5 text-teal-700" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {currentOwnedUnit?.unitName} – {tenant?.name || 'Kein Mieter'}
                  </p>
                  <p className="text-sm text-teal-700">
                    {currentOwnedUnit?.objectName}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EIGENTÜMER LAYOUT: Finance-first, 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* LEFT COLUMN: Finances (PRIMARY) + Tenant */}
            <div className="space-y-6">

              {/* FINANCIAL OVERVIEW - DOMINANT CARD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card className="border-2 border-teal-100 bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold flex items-center gap-2 text-teal-800">
                      <CurrencyEur className="h-6 w-6" />
                      Ihre Finanzen für {currentOwnedUnit?.unitName || 'Ihre Wohnung'} (2025)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {eigentuemerFinance ? (
                      <div className="space-y-4">
                        {/* Big Numbers */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-green-50/70 border border-green-200/60">
                            <p className="text-sm text-green-700/80 font-medium">Mieteinnahmen</p>
                            <p className="text-2xl font-bold text-green-700">
                              + {eigentuemerFinance.yearlyRentIncome.toLocaleString('de-DE')} €
                            </p>
                          </div>
                          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/60">
                            <p className="text-sm text-rose-600/80 font-medium">Kosten (YTD)</p>
                            <p className="text-2xl font-bold text-rose-600">
                              – {eigentuemerFinance.yearlyCoststoDate.toLocaleString('de-DE')} €
                            </p>
                          </div>
                        </div>

                        {/* Cashflow Highlight */}
                        <div className="p-4 rounded-xl bg-teal-100 border border-teal-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-teal-800 font-medium">Cashflow</p>
                              <p className="text-3xl font-bold text-teal-900">
                                + {eigentuemerFinance.cashflow.toLocaleString('de-DE')} €
                              </p>
                            </div>
                            <TrendUp className="h-10 w-10 text-teal-600" weight="bold" />
                          </div>
                        </div>

                        {/* Next Payout */}
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div className="flex items-center gap-2">
                            <CalendarBlank className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Nächste Auszahlung</span>
                          </div>
                          <div className="text-right">
                            <span className="font-semibold">
                              {eigentuemerFinance.nextPayout.toLocaleString('de-DE')} €
                            </span>
                            <span className="text-sm text-muted-foreground ml-2">
                              am {new Date(eigentuemerFinance.nextPayoutDate).toLocaleDateString('de-DE')}
                            </span>
                          </div>
                        </div>

                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                          Finanzen im Detail
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-center py-8">
                        Keine Finanzdaten verfügbar
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* TENANT CARD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card className="border-2 border-muted">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <User className="h-5 w-5 text-teal-600" />
                      Mieter
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {tenant ? (
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-full bg-teal-100">
                            <User className="h-6 w-6 text-teal-700" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-lg">{tenant.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Mietbeginn: {new Date(tenant.moveInDate).toLocaleDateString('de-DE')}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge className={
                                tenant.status === 'aktiv'
                                  ? 'bg-green-100 text-green-700 border-0'
                                  : 'bg-orange-100 text-orange-700 border-0'
                              }>
                                {tenant.status === 'aktiv' ? 'Aktiv' : 'Gekündigt'}
                              </Badge>
                              <span className="text-sm font-medium">
                                {tenant.monthlyRent.toLocaleString('de-DE')} € / Monat
                              </span>
                            </div>
                          </div>
                        </div>

                        {(tenant.email || tenant.phone) && (
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-muted">
                            {tenant.email && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <EnvelopeSimple className="h-4 w-4" />
                                {tenant.email}
                              </div>
                            )}
                            {tenant.phone && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                {tenant.phone}
                              </div>
                            )}
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Mietvertrag
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Mieter verwalten
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <User className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Kein Mieter hinterlegt</p>
                        <Button variant="outline" size="sm" className="mt-3">
                          <Plus className="h-4 w-4 mr-1" />
                          Mieter hinzufügen
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Tasks, Cases, Documents */}
            <div className="space-y-6">

              {/* TASKS - Eigentümer vocabulary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <Card className="border-2 border-muted">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      Anstehend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {eigentuemerTasks.map((task: CockpitTask) => (
                        <div
                          key={task.id}
                          className={`flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                            task.completed
                              ? 'bg-muted/50 opacity-60'
                              : 'bg-teal-50/50 hover:bg-teal-50'
                          }`}
                          onClick={() => toggleTask(task.id)}
                        >
                          {task.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" weight="fill" />
                          ) : (
                            <Circle className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {task.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Fällig: {new Date(task.dueDate).toLocaleDateString('de-DE')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* UNIT-SPECIFIC CASES */}
              {unitCases.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <Card className="border-2 border-muted">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        <Warning className="h-5 w-5 text-orange-500" />
                        Offene Themen
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {unitCases.filter(c => c.status !== 'abgeschlossen').map((caseItem: CockpitCase) => (
                          <div
                            key={caseItem.id}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                              caseItem.status === 'offen'
                                ? 'bg-orange-50 border-l-4 border-orange-500'
                                : 'bg-[#F8FAFF]'
                            }`}
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{caseItem.title}</p>
                            </div>
                            <Badge className={`${getStatusColor(caseItem.status)} border-0`}>
                              {getStatusLabel(caseItem.status)}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* DOCUMENTS - Unit-specific only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Card className="border-2 border-muted">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold flex items-center gap-2">
                      <FileText className="h-4 w-4 text-teal-600" />
                      Dokumente
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1">
                      {mockEigentuemerDocuments.slice(0, 4).map((doc: CockpitDocument) => (
                        <div
                          key={doc.id}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm truncate">{doc.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-2 text-teal-700 hover:text-teal-800 hover:bg-teal-50 text-sm"
                    >
                      Alle Dokumente
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* EIGENTÜMER-SPECIFIC INSIGHTS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <Card className="border-2 border-teal-200 bg-teal-50/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-teal-600" />
                      Optimierung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 rounded-lg bg-white border border-teal-200">
                      <p className="text-sm font-medium">Rendite verbessern</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Die Nettomietrendite könnte um ca. 1,2% verbessert werden durch Optimierung der Nebenkosten.
                      </p>
                      <p className="text-xs text-teal-700 mt-2 flex items-center gap-1">
                        <TrendUp className="h-3 w-3" />
                        Basierend auf: Ihre Finanzdaten
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // WEG VIEW - Original layout (slightly refined)
  // ============================================
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Spacer for fixed header */}
      <div className="h-24" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Page Header - fixed height to prevent jump when toggling modes */}
        <div className="mb-6 min-h-[72px]">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Meine WEG
            </h1>
            <p className="text-blue-700 mt-1 font-medium">
              Gemeinschafts-Übersicht
            </p>
          </div>
        </div>

        {/* WEG Object Info Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="rounded-xl p-4 border-2 bg-blue-50/80 border-blue-200">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Users className="h-5 w-5 text-blue-700" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">
                  {currentObject?.name}
                </p>
                <p className="text-sm text-blue-700">
                  Gemeinschafts-Ansicht (WEG)
                </p>
              </div>
              {/* Status Badges */}
              <div className="flex flex-wrap gap-2">
                {currentObject && currentObject.openCases > 0 && (
                  <Badge variant="outline" className="bg-white/80 text-orange-700 border-orange-200">
                    <Warning className="h-3 w-3 mr-1" />
                    {currentObject.openCases} offene Vorgänge
                  </Badge>
                )}
                <Badge variant="outline" className="bg-white/80 text-blue-700 border-blue-200">
                  <Clock className="h-3 w-3 mr-1" />
                  Abrechnung in Arbeit
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid - WEG Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Tasks & Cases */}
          <div className="lg:col-span-2 space-y-6">
            {/* Anstehendes (Tasks) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="border-2 border-muted">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#2463eb]" />
                    Anstehendes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tasks
                      .filter(t => t.objectId === selectedObjectId && !t.unitId)
                      .map((task: CockpitTask) => (
                        <div
                          key={task.id}
                          className={`flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                            task.completed
                              ? 'bg-muted/50 opacity-60'
                              : 'bg-[#F8FAFF] hover:bg-[#EEF4FF]'
                          }`}
                          onClick={() => toggleTask(task.id)}
                        >
                          {task.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" weight="fill" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {task.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Fällig: {new Date(task.dueDate).toLocaleDateString('de-DE')}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-[#2463eb] hover:text-[#1d4ed8] hover:bg-[#2463eb]/10"
                  >
                    Neuen Vorgang anlegen
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Aktive Vorgänge with Urgency Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="border-2 border-muted">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Warning className="h-5 w-5 text-orange-500" />
                    Aktive Vorgänge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {offeneCases.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                          </span>
                          <span className="text-xs font-semibold text-orange-700 uppercase tracking-wide">
                            Handlungsbedarf
                          </span>
                        </div>
                        <div className="space-y-2">
                          {offeneCases.slice(0, 2).map((caseItem: CockpitCase) => (
                            <div
                              key={caseItem.id}
                              className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 border-l-4 border-orange-500 hover:bg-orange-100/80 transition-colors cursor-pointer shadow-sm"
                            >
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{caseItem.title}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  Erstellt: {new Date(caseItem.createdAt).toLocaleDateString('de-DE')}
                                </p>
                              </div>
                              <Badge className={`${getStatusColor(caseItem.status)} border-0`}>
                                {getStatusLabel(caseItem.status)}
                              </Badge>
                              {caseItem.cost && (
                                <span className="text-sm font-medium text-muted-foreground">
                                  {caseItem.cost.toLocaleString('de-DE')} €
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {inBearbeitungCases.length > 0 && (
                      <div>
                        {offeneCases.length > 0 && (
                          <div className="flex items-center gap-2 mb-2 mt-4">
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                              In Bearbeitung
                            </span>
                          </div>
                        )}
                        <div className="space-y-2">
                          {inBearbeitungCases.slice(0, 2).map((caseItem: CockpitCase) => (
                            <div
                              key={caseItem.id}
                              className="flex items-center gap-3 p-3 rounded-lg bg-[#F8FAFF] hover:bg-[#EEF4FF] transition-colors cursor-pointer"
                            >
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{caseItem.title}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  Erstellt: {new Date(caseItem.createdAt).toLocaleDateString('de-DE')}
                                </p>
                              </div>
                              <Badge className={`${getStatusColor(caseItem.status)} border-0`}>
                                {getStatusLabel(caseItem.status)}
                              </Badge>
                              {caseItem.cost && (
                                <span className="text-sm font-medium text-muted-foreground">
                                  {caseItem.cost.toLocaleString('de-DE')} €
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeCases.length === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-4">
                        Keine aktiven Vorgänge
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-[#2463eb] hover:text-[#1d4ed8] hover:bg-[#2463eb]/10"
                  >
                    Alle Vorgänge anzeigen
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Finances, Docs, Recommendations */}
          <div className="space-y-6">
            {/* Enhanced Finanz-Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card className="border-2 border-muted">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <CurrencyEur className="h-5 w-5 text-[#2463eb]" />
                      Finanzen
                    </CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {financeOnTrack} von {objectFinanceData.length} Kategorien im Plan
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {objectFinanceData.map((item, index) => {
                      const percentage = Math.round((item.current / item.planned) * 100);
                      const isOverBudget = percentage > 100;
                      const isApproaching = percentage >= 90 && percentage <= 100;
                      const isOnTrack = percentage < 90;

                      return (
                        <div key={index}>
                          <div className="flex justify-between items-center text-sm mb-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{item.label}</span>
                              {isOnTrack && <Check className="h-4 w-4 text-green-600" weight="bold" />}
                              {isApproaching && <WarningCircle className="h-4 w-4 text-orange-500" weight="fill" />}
                              {isOverBudget && <Warning className="h-4 w-4 text-red-500" weight="fill" />}
                            </div>
                            <span className={isOverBudget ? 'text-red-600 font-medium' : isApproaching ? 'text-orange-600' : 'text-muted-foreground'}>
                              {item.current.toLocaleString('de-DE')} / {item.planned.toLocaleString('de-DE')} {item.unit}
                            </span>
                          </div>
                          <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${isOverBudget ? 'bg-red-500' : isApproaching ? 'bg-orange-500' : 'bg-green-500'}`}
                              style={{ width: `${Math.min(percentage, 100)}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-[#2463eb] hover:text-[#1d4ed8] hover:bg-[#2463eb]/10"
                  >
                    Zu Finanzen
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Card className="border-2 border-muted">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#2463eb]" />
                    Dokumente
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1">
                    {mockDocuments
                      .filter(d => d.objectId === selectedObjectId && !d.unitId)
                      .slice(0, 3)
                      .map((doc: CockpitDocument) => (
                        <div
                          key={doc.id}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm truncate">{doc.name}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mt-2 text-[#2463eb] hover:text-[#1d4ed8] hover:bg-[#2463eb]/10 text-sm"
                  >
                    Alle Dokumente
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Empfehlungen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Card className="border-2 border-[#2463eb]/20 bg-[#F8FAFF]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-[#F97316]" />
                    Empfehlungen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white border border-muted">
                      <p className="text-sm font-medium">Reinigungskosten +18% YoY</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Die Kosten für die Treppenhausreinigung sind deutlich gestiegen.
                      </p>
                      <p className="text-xs text-[#2463eb] mt-2 flex items-center gap-1">
                        <CurrencyEur className="h-3 w-3" />
                        Basierend auf: Betriebskosten
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 text-xs h-7 gap-1 border-[#2463eb]/30 text-[#2463eb] hover:bg-[#2463eb]/10"
                      >
                        <Plus className="h-3 w-3" />
                        Vorgang anlegen
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
