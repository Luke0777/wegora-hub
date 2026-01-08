"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { getMyOwnedUnits } from '@/data/mockCockpitData';

export type CockpitMode = 'weg' | 'eigentuemer';

interface CockpitModeContextType {
  mode: CockpitMode;
  setMode: (mode: CockpitMode) => void;
  selectedObjectId: string;
  setSelectedObjectId: (id: string) => void;
  selectedUnitId: string | null;
  setSelectedUnitId: (id: string | null) => void;
  // Helper to switch mode with automatic selection
  switchMode: (newMode: CockpitMode) => void;
}

const CockpitModeContext = createContext<CockpitModeContextType | undefined>(undefined);

const STORAGE_KEY = 'wegora-cockpit-mode';

interface StoredState {
  mode: CockpitMode;
  selectedObjectId: string;
  selectedUnitId: string | null;
}

function loadFromStorage(): StoredState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        mode: parsed.mode || 'weg',
        selectedObjectId: parsed.selectedObjectId || 'obj-1',
        selectedUnitId: parsed.selectedUnitId || null,
      };
    }
  } catch {
    // Ignore parse errors
  }
  return {
    mode: 'weg',
    selectedObjectId: 'obj-1',
    selectedUnitId: null,
  };
}

function saveToStorage(state: StoredState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage errors
  }
}

export function CockpitModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<CockpitMode>(() => loadFromStorage().mode);
  const [selectedObjectId, setSelectedObjectIdState] = useState<string>(() => loadFromStorage().selectedObjectId);
  const [selectedUnitId, setSelectedUnitIdState] = useState<string | null>(() => loadFromStorage().selectedUnitId);

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveToStorage({ mode, selectedObjectId, selectedUnitId });
  }, [mode, selectedObjectId, selectedUnitId]);

  const setMode = (newMode: CockpitMode) => {
    setModeState(newMode);
  };

  const setSelectedObjectId = (id: string) => {
    setSelectedObjectIdState(id);
  };

  const setSelectedUnitId = (id: string | null) => {
    setSelectedUnitIdState(id);
  };

  // Helper to switch mode with automatic unit/object selection
  const switchMode = (newMode: CockpitMode) => {
    setModeState(newMode);

    if (newMode === 'eigentuemer') {
      // When switching to Eigentümer, select the first owned unit
      const ownedUnits = getMyOwnedUnits();
      if (ownedUnits.length > 0) {
        // Try to find an owned unit in the current object first
        const unitInCurrentObject = ownedUnits.find(u => u.objectId === selectedObjectId);
        if (unitInCurrentObject) {
          setSelectedUnitIdState(unitInCurrentObject.unitId);
        } else {
          // Otherwise, select the first owned unit
          setSelectedObjectIdState(ownedUnits[0].objectId);
          setSelectedUnitIdState(ownedUnits[0].unitId);
        }
      }
    } else {
      // When switching to WEG, clear unit selection
      setSelectedUnitIdState(null);
    }
  };

  return (
    <CockpitModeContext.Provider
      value={{
        mode,
        setMode,
        selectedObjectId,
        setSelectedObjectId,
        selectedUnitId,
        setSelectedUnitId,
        switchMode,
      }}
    >
      {children}
    </CockpitModeContext.Provider>
  );
}

export function useCockpitMode() {
  const context = useContext(CockpitModeContext);
  if (context === undefined) {
    throw new Error('useCockpitMode must be used within a CockpitModeProvider');
  }
  return context;
}
