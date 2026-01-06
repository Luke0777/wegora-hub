import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CaretDown, Buildings, House, Check } from '@phosphor-icons/react';
import { getMyOwnedUnits } from '@/data/mockCockpitData';

interface ContextSwitchProps {
  currentObjectId: string;
  currentUnitId: string | null;
  mode: 'weg' | 'eigentuemer';
  onObjectChange: (objectId: string) => void;
  onUnitChange: (unitId: string | null) => void;
  onModeChange: (mode: 'weg' | 'eigentuemer') => void;
}

export function ContextSwitch({
  currentObjectId,
  currentUnitId,
  mode,
  onObjectChange,
  onUnitChange,
  onModeChange,
}: ContextSwitchProps) {
  const [open, setOpen] = useState(false);

  const myOwnedUnits = getMyOwnedUnits();

  // Get unique objects where user owns flats
  const myObjects = Object.values(
    myOwnedUnits.reduce((acc, unit) => {
      if (!acc[unit.objectId]) {
        acc[unit.objectId] = {
          objectId: unit.objectId,
          objectName: unit.objectName,
          units: [],
        };
      }
      acc[unit.objectId].units.push(unit);
      return acc;
    }, {} as Record<string, { objectId: string; objectName: string; units: typeof myOwnedUnits }>)
  );

  // Get current object info
  const currentObjectInfo = myObjects.find(o => o.objectId === currentObjectId);
  const currentUnit = currentUnitId
    ? myOwnedUnits.find(u => u.unitId === currentUnitId)
    : null;

  // Display label based on mode
  const displayLabel = mode === 'eigentuemer' && currentUnit
    ? `${currentUnit.objectName} – ${currentUnit.unitName}`
    : currentObjectInfo?.objectName || 'Objekt wählen';

  return (
    <div className="flex items-center gap-2">
      {/* Mode Toggle - Always visible */}
      <div className="flex items-center rounded-lg border border-muted overflow-hidden">
        <button
          onClick={() => onModeChange('weg')}
          className={`px-3 py-1.5 text-sm font-medium transition-all ${
            mode === 'weg'
              ? 'bg-[#2463eb] text-white'
              : 'bg-white text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Meine WEG
        </button>
        <button
          onClick={() => {
            onModeChange('eigentuemer');
            // When switching to Eigentümer, select first owned unit in current object
            const unitsInObject = myOwnedUnits.filter(u => u.objectId === currentObjectId);
            if (unitsInObject.length > 0 && !currentUnitId) {
              onUnitChange(unitsInObject[0].unitId);
            }
          }}
          className={`px-3 py-1.5 text-sm font-medium transition-all ${
            mode === 'eigentuemer'
              ? 'bg-teal-600 text-white'
              : 'bg-white text-muted-foreground hover:bg-muted/50'
          }`}
        >
          Meine Wohnungen
        </button>
      </div>

      {/* Object/Unit Dropdown */}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-9 px-3 gap-2 text-sm font-medium border-muted hover:bg-muted/50"
          >
            {mode === 'weg' ? (
              <Buildings className="h-4 w-4 text-[#2463eb]" />
            ) : (
              <House className="h-4 w-4 text-teal-600" />
            )}
            <span className="max-w-[180px] truncate">{displayLabel}</span>
            <CaretDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          {/* WEG Mode: Show only objects where I own flats */}
          {mode === 'weg' && (
            <>
              <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                Meine Objekte
              </DropdownMenuLabel>
              {myObjects.map((obj) => (
                <DropdownMenuItem
                  key={obj.objectId}
                  className="gap-2 cursor-pointer"
                  onClick={() => {
                    onObjectChange(obj.objectId);
                    setOpen(false);
                  }}
                >
                  <Buildings className="h-4 w-4 text-[#2463eb]" />
                  <span className="flex-1">{obj.objectName}</span>
                  <span className="text-xs text-muted-foreground">
                    {obj.units.length} Whg.
                  </span>
                  {obj.objectId === currentObjectId && (
                    <Check className="h-4 w-4 text-[#2463eb]" />
                  )}
                </DropdownMenuItem>
              ))}
            </>
          )}

          {/* Eigentümer Mode: Show current object and my flats within it */}
          {mode === 'eigentuemer' && currentObjectInfo && (
            <>
              <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                {currentObjectInfo.objectName}
              </DropdownMenuLabel>
              {currentObjectInfo.units.map((unit) => (
                <DropdownMenuItem
                  key={unit.unitId}
                  className="gap-2 cursor-pointer"
                  onClick={() => {
                    onUnitChange(unit.unitId);
                    setOpen(false);
                  }}
                >
                  <House className="h-4 w-4 text-teal-600" />
                  <span className="flex-1">{unit.unitName}</span>
                  {unit.unitId === currentUnitId && (
                    <Check className="h-4 w-4 text-teal-600" />
                  )}
                </DropdownMenuItem>
              ))}

              {/* If user has flats in multiple objects, show other objects */}
              {myObjects.length > 1 && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                    Andere Objekte
                  </DropdownMenuLabel>
                  {myObjects
                    .filter(obj => obj.objectId !== currentObjectId)
                    .map((obj) => (
                      <DropdownMenuItem
                        key={obj.objectId}
                        className="gap-2 cursor-pointer"
                        onClick={() => {
                          onObjectChange(obj.objectId);
                          // Select first unit in that object
                          if (obj.units.length > 0) {
                            onUnitChange(obj.units[0].unitId);
                          }
                          setOpen(false);
                        }}
                      >
                        <Buildings className="h-4 w-4 text-muted-foreground" />
                        <span className="flex-1">{obj.objectName}</span>
                        <span className="text-xs text-muted-foreground">
                          {obj.units.length} Whg.
                        </span>
                      </DropdownMenuItem>
                    ))}
                </>
              )}
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
