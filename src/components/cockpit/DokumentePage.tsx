"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  FileText,
  FilePdf,
  Upload,
  FunnelSimple,
  MagnifyingGlass,
  House,
} from '@phosphor-icons/react';
import { useCockpitMode } from '@/context/CockpitModeContext';
import { mockDocuments, mockObjects, getMyOwnedUnits, mockEigentuemerDocuments, type CockpitDocument } from '@/data/mockCockpitData';

export function DokumentePage() {
  const { mode, selectedObjectId, selectedUnitId } = useCockpitMode();
  const myOwnedUnits = getMyOwnedUnits();
  const currentOwnedUnit = myOwnedUnits.find((u) => u.unitId === selectedUnitId);
  const currentObject = mockObjects.find((obj) => obj.id === selectedObjectId);

  // Filter documents based on mode
  const filteredDocuments = mode === 'eigentuemer'
    ? [...mockEigentuemerDocuments, ...mockDocuments.filter((d) => d.unitId === selectedUnitId)]
    : mockDocuments.filter((d) => d.objectId === selectedObjectId);
  const getTypeLabel = (type: CockpitDocument['type']) => {
    switch (type) {
      case 'abrechnung':
        return 'Abrechnung';
      case 'vertrag':
        return 'Vertrag';
      case 'protokoll':
        return 'Protokoll';
      case 'beschluss':
        return 'Beschluss';
      case 'sonstiges':
        return 'Sonstiges';
      default:
        return type;
    }
  };

  const getTypeColor = (type: CockpitDocument['type']) => {
    switch (type) {
      case 'abrechnung':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'vertrag':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'protokoll':
        return 'bg-weg-500/10 text-weg-500 border-weg-500/20';
      case 'beschluss':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getObjectName = (objectId?: string) => {
    if (!objectId) return null;
    const obj = mockObjects.find(o => o.id === objectId);
    return obj?.name || objectId;
  };

  const bgGradient = mode === 'eigentuemer'
    ? 'from-owner-50/30 to-background'
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
            <div className="rounded-xl p-3 border-2 bg-owner-50/80 border-owner-200">
              <div className="flex items-center gap-2">
                <House className="h-4 w-4 text-owner-700" />
                <span className="font-medium text-owner-800">
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
              Dokumente
            </h1>
            <p className={mode === 'eigentuemer' ? 'text-owner-700 mt-1' : 'text-muted-foreground mt-1'}>
              {mode === 'eigentuemer'
                ? `Dokumente für ${currentOwnedUnit?.unitName || 'Ihre Wohnung'}`
                : `Dokumente für ${currentObject?.name || 'Objekt'}`}
            </p>
          </div>
          <Button className={mode === 'eigentuemer'
            ? 'bg-owner-600 hover:bg-owner-700 text-white'
            : 'bg-weg-500 hover:bg-weg-600 text-white'}>
            <Upload className="h-4 w-4 mr-2" />
            Hochladen
          </Button>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          className="mb-6 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="relative flex-1">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Dokumente durchsuchen..."
              className="w-full pl-10 pr-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-weg-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <FunnelSimple className="h-4 w-4" />
              Filter
            </Button>
            <Badge variant="outline" className="cursor-pointer hover:bg-weg-500/10 hover:border-weg-500">
              Alle Typen
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-weg-500/10 hover:border-weg-500">
              Abrechnungen
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-weg-500/10 hover:border-weg-500">
              Verträge
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-weg-500/10 hover:border-weg-500">
              Protokolle
            </Badge>
          </div>
        </motion.div>

        {/* Documents List */}
        <div className="space-y-3">
          {filteredDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
            >
              <Card className="border-2 border-muted hover:border-weg-500/30 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-red-50">
                      <FilePdf className="h-5 w-5 text-red-600" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground truncate">
                        {doc.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-muted-foreground">
                        {doc.objectId && (
                          <span>{getObjectName(doc.objectId)}</span>
                        )}
                        {doc.unitId && (
                          <>
                            <span>•</span>
                            <span>Whg {doc.unitId.replace('unit-', '')}</span>
                          </>
                        )}
                        <span>•</span>
                        <span>{new Date(doc.date).toLocaleDateString('de-DE')}</span>
                      </div>
                    </div>

                    <Badge className={`${getTypeColor(doc.type)} border`}>
                      {getTypeLabel(doc.type)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Keine Dokumente</h3>
            <p className="text-muted-foreground mb-4">
              Laden Sie Ihr erstes Dokument hoch.
            </p>
            <Button className={mode === 'eigentuemer'
              ? 'bg-owner-600 hover:bg-owner-700 text-white'
              : 'bg-weg-500 hover:bg-weg-600 text-white'}>
              <Upload className="h-4 w-4 mr-2" />
              Dokument hochladen
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
