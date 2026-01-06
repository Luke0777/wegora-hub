import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Folder, Plus, FunnelSimple, House } from '@phosphor-icons/react';
import { useCockpitMode } from '@/context/CockpitModeContext';
import { mockCases, mockObjects, getMyOwnedUnits, type CockpitCase } from '@/data/mockCockpitData';

export function VorgaengePage() {
  const { mode, selectedObjectId, selectedUnitId } = useCockpitMode();
  const myOwnedUnits = getMyOwnedUnits();
  const currentOwnedUnit = myOwnedUnits.find((u) => u.unitId === selectedUnitId);
  const currentObject = mockObjects.find((obj) => obj.id === selectedObjectId);

  // Filter cases based on mode
  const filteredCases = mode === 'eigentuemer'
    ? mockCases.filter((c) => c.unitId === selectedUnitId)
    : mockCases.filter((c) => c.objectId === selectedObjectId);

  const getStatusColor = (status: CockpitCase['status']) => {
    switch (status) {
      case 'offen':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'in_bearbeitung':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'abgeschlossen':
        return 'bg-green-100 text-green-700 border-green-200';
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

  const getObjectName = (objectId: string) => {
    const obj = mockObjects.find(o => o.id === objectId);
    return obj?.name || objectId;
  };

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
          className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: mode === 'eigentuemer' ? 0.05 : 0 }}
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Vorgänge
            </h1>
            <p className={mode === 'eigentuemer' ? 'text-teal-700 mt-1' : 'text-muted-foreground mt-1'}>
              {mode === 'eigentuemer'
                ? `Vorgänge für ${currentOwnedUnit?.unitName || 'Ihre Wohnung'}`
                : `Vorgänge für ${currentObject?.name || 'Objekt'}`}
            </p>
          </div>
          <Button className={mode === 'eigentuemer'
            ? 'bg-teal-600 hover:bg-teal-700 text-white'
            : 'bg-[#2463eb] hover:bg-[#1d4ed8] text-white'}>
            <Plus className="h-4 w-4 mr-2" />
            Neuer Vorgang
          </Button>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className="mb-6 flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Button variant="outline" size="sm" className="gap-2">
            <FunnelSimple className="h-4 w-4" />
            Filter
          </Button>
          <Badge variant="outline" className="cursor-pointer hover:bg-[#2463eb]/10 hover:border-[#2463eb]">
            Alle Status
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-[#2463eb]/10 hover:border-[#2463eb]">
            Offen
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-[#2463eb]/10 hover:border-[#2463eb]">
            In Bearbeitung
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-[#2463eb]/10 hover:border-[#2463eb]">
            Abgeschlossen
          </Badge>
        </motion.div>

        {/* Cases List */}
        <div className="space-y-4">
          {filteredCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
            >
              <Card className="border-2 border-muted hover:border-[#2463eb]/30 transition-colors cursor-pointer">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="p-2 rounded-lg bg-muted/50 self-start">
                      <Folder className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {caseItem.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <span>{getObjectName(caseItem.objectId)}</span>
                        {caseItem.unitId && (
                          <>
                            <span>•</span>
                            <span>Whg {caseItem.unitId.replace('unit-', '')}</span>
                          </>
                        )}
                        <span>•</span>
                        <span>
                          Erstellt: {new Date(caseItem.createdAt).toLocaleDateString('de-DE')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-center">
                      <Badge className={`${getStatusColor(caseItem.status)} border`}>
                        {getStatusLabel(caseItem.status)}
                      </Badge>
                      {caseItem.cost && (
                        <span className="text-sm font-semibold whitespace-nowrap">
                          {caseItem.cost.toLocaleString('de-DE')} €
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State (shown when no cases) */}
        {filteredCases.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Folder className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Keine Vorgänge</h3>
            <p className="text-muted-foreground mb-4">
              Es wurden noch keine Vorgänge erstellt.
            </p>
            <Button className="bg-[#2463eb] hover:bg-[#1d4ed8] text-white">
              <Plus className="h-4 w-4 mr-2" />
              Ersten Vorgang erstellen
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
