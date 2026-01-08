"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Buildings, House, Warning, ArrowRight } from '@phosphor-icons/react';
import { mockObjects, getUnitsForObject } from '@/data/mockCockpitData';

export function ObjektePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Spacer for fixed header */}
      <div className="h-24" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        {/* Page Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Objekte
          </h1>
          <p className="text-muted-foreground mt-1">
            Verwalten Sie Ihre Immobilien und Wohneinheiten
          </p>
        </motion.div>

        {/* Filter Bar (placeholder) */}
        <motion.div
          className="mb-6 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Alle Objekte
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Mit offenen Vorgängen
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Abrechnung offen
          </Badge>
        </motion.div>

        {/* Objects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockObjects.map((obj, index) => {
            const units = getUnitsForObject(obj.id);
            const vacantUnits = units.filter(u => u.status === 'vacant').length;

            return (
              <motion.div
                key={obj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <Card className="border-2 border-muted hover:border-weg-500/30 transition-colors cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 rounded-lg bg-weg-500/10">
                        <Buildings className="h-6 w-6 text-weg-500" />
                      </div>
                      {obj.status === 'attention' && (
                        <Badge className="bg-orange-100 text-orange-700 border-0">
                          <Warning className="h-3 w-3 mr-1" />
                          Aktion erforderlich
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold mb-1">{obj.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{obj.address}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-muted/50">
                        <House className="h-3 w-3 mr-1" />
                        {obj.unitCount} Einheiten
                      </Badge>
                      {obj.openCases > 0 && (
                        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                          {obj.openCases} offene Vorgänge
                        </Badge>
                      )}
                      {vacantUnits > 0 && (
                        <Badge variant="outline" className="bg-weg-500/5 text-weg-500 border-weg-500/20">
                          {vacantUnits} leer
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center text-sm text-weg-500 font-medium group-hover:underline">
                      Objekt öffnen
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
