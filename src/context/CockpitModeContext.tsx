"use client";

import { createContext, useContext, useState, useEffect, useCallback, useSyncExternalStore, type ReactNode } from 'react';
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

const DEFAULT_STATE: StoredState = {
  mode: 'weg',
  selectedObjectId: 'obj-1',
  selectedUnitId: null,
};

// Store for syncing with localStorage
let listeners: Array<() => void> = [];
let cachedState: StoredState | null = null;

function getStoredState(): StoredState {
  if (cachedState) return cachedState;
  if (typeof window === 'undefined') return DEFAULT_STATE;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      cachedState = {
        mode: parsed.mode || DEFAULT_STATE.mode,
        selectedObjectId: parsed.selectedObjectId || DEFAULT_STATE.selectedObjectId,
        selectedUnitId: parsed.selectedUnitId ?? DEFAULT_STATE.selectedUnitId,
      };
      return cachedState;
    }
  } catch {
    // Ignore parse errors
  }
  cachedState = DEFAULT_STATE;
  return cachedState;
}

function saveToStorage(state: StoredState) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    cachedState = state;
    listeners.forEach(listener => listener());
  } catch {
    // Ignore storage errors
  }
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
}

function getSnapshot() {
  return getStoredState();
}

function getServerSnapshot() {
  return DEFAULT_STATE;
}

export function CockpitModeProvider({ children }: { children: ReactNode }) {
  // Use useSyncExternalStore to properly handle hydration
  const storedState = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const [mode, setModeState] = useState<CockpitMode>(storedState.mode);
  const [selectedObjectId, setSelectedObjectIdState] = useState<string>(storedState.selectedObjectId);
  const [selectedUnitId, setSelectedUnitIdState] = useState<string | null>(storedState.selectedUnitId);

  // Sync state with localStorage on changes
  useEffect(() => {
    saveToStorage({ mode, selectedObjectId, selectedUnitId });
  }, [mode, selectedObjectId, selectedUnitId]);

  const setMode = useCallback((newMode: CockpitMode) => {
    setModeState(newMode);
  }, []);

  const setSelectedObjectId = useCallback((id: string) => {
    setSelectedObjectIdState(id);
  }, []);

  const setSelectedUnitId = useCallback((id: string | null) => {
    setSelectedUnitIdState(id);
  }, []);

  // Helper to switch mode with automatic unit/object selection
  const switchMode = useCallback((newMode: CockpitMode) => {
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
  }, [selectedObjectId]);

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
