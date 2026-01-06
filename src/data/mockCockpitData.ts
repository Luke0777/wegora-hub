// Mock data for Cockpit views

export interface CockpitObject {
  id: string;
  name: string;
  address: string;
  unitCount: number;
  openCases: number;
  status: 'active' | 'pending' | 'attention';
}

export interface CockpitUnit {
  id: string;
  objectId: string;
  name: string;
  tenant: string | null;
  status: 'occupied' | 'vacant' | 'notice';
}

export interface CockpitTask {
  id: string;
  title: string;
  type: 'versammlung' | 'abrechnung' | 'vorgang' | 'dokument';
  dueDate: string;
  completed: boolean;
  objectId?: string;
  unitId?: string;
}

export interface CockpitCase {
  id: string;
  title: string;
  status: 'offen' | 'in_bearbeitung' | 'abgeschlossen';
  cost: number | null;
  objectId: string;
  unitId?: string;
  createdAt: string;
}

export interface CockpitDocument {
  id: string;
  name: string;
  type: 'abrechnung' | 'vertrag' | 'protokoll' | 'beschluss' | 'sonstiges';
  date: string;
  objectId?: string;
  unitId?: string;
}

export interface FinanceSnapshot {
  label: string;
  current: number;
  planned: number;
  unit: string;
  objectId?: string;
}

// Eigentümer-specific interfaces
export interface TenantInfo {
  id: string;
  unitId: string;
  name: string;
  moveInDate: string;
  monthlyRent: number;
  status: 'aktiv' | 'gekuendigt' | 'ausstehend';
  email?: string;
  phone?: string;
}

export interface EigentuemerFinance {
  unitId: string;
  yearlyRentIncome: number;
  yearlyRentExpected: number;
  yearlyCoststoDate: number;
  cashflow: number;
  nextPayout: number;
  nextPayoutDate: string;
  hausgeld?: number;
  nebenkosten?: number;
}

// Mock Objects
export const mockObjects: CockpitObject[] = [
  {
    id: 'obj-1',
    name: 'Musterstraße 12',
    address: 'Musterstraße 12, 10115 Berlin',
    unitCount: 8,
    openCases: 4, // 2 offen + 2 in_bearbeitung (Heizung, Dachrinne, Wasserschaden, Treppenhausreinigung, Fassade)
    status: 'active',
  },
  {
    id: 'obj-2',
    name: 'Lindenweg 4',
    address: 'Lindenweg 4, 10117 Berlin',
    unitCount: 12,
    openCases: 3, // Tiefgarage offen, Schimmel + Garten in_bearbeitung
    status: 'attention',
  },
  {
    id: 'obj-3',
    name: 'Parkallee 7',
    address: 'Parkallee 7, 10119 Berlin',
    unitCount: 6,
    openCases: 0, // Alle abgeschlossen
    status: 'active',
  },
];

// Mock Units
export const mockUnits: CockpitUnit[] = [
  // Musterstraße 12 (obj-1) - 8 Einheiten
  { id: 'unit-1', objectId: 'obj-1', name: 'Whg 1A', tenant: 'Familie Müller', status: 'occupied' },
  { id: 'unit-2', objectId: 'obj-1', name: 'Whg 1B', tenant: 'Hr. Schmidt', status: 'occupied' },
  { id: 'unit-3', objectId: 'obj-1', name: 'Whg 2A', tenant: null, status: 'vacant' },
  { id: 'unit-4', objectId: 'obj-1', name: 'Whg 2B', tenant: 'Fr. Weber', status: 'notice' },
  { id: 'unit-5', objectId: 'obj-1', name: 'Whg 3A', tenant: 'Familie Fischer', status: 'occupied' },
  { id: 'unit-6', objectId: 'obj-1', name: 'Whg 3B', tenant: 'Hr. Becker', status: 'occupied' },
  { id: 'unit-7', objectId: 'obj-1', name: 'Whg 4A', tenant: 'Fr. Hoffmann', status: 'occupied' },
  { id: 'unit-8', objectId: 'obj-1', name: 'Whg 4B', tenant: 'Familie Klein', status: 'occupied' },
  // Lindenweg 4 (obj-2) - 12 Einheiten
  { id: 'unit-9', objectId: 'obj-2', name: 'Whg 1A', tenant: 'Hr. Richter', status: 'occupied' },
  { id: 'unit-10', objectId: 'obj-2', name: 'Whg 1B', tenant: 'Fr. Krause', status: 'occupied' },
  { id: 'unit-11', objectId: 'obj-2', name: 'Whg 2A', tenant: 'Familie Wagner', status: 'occupied' },
  { id: 'unit-12', objectId: 'obj-2', name: 'Whg 2B', tenant: 'Hr. Schneider', status: 'occupied' },
  { id: 'unit-13', objectId: 'obj-2', name: 'Whg 3A', tenant: null, status: 'vacant' },
  { id: 'unit-14', objectId: 'obj-2', name: 'Whg 3B', tenant: 'Fr. Neumann', status: 'occupied' },
  { id: 'unit-15', objectId: 'obj-2', name: 'Whg 4A', tenant: 'Familie Schwarz', status: 'notice' },
  { id: 'unit-16', objectId: 'obj-2', name: 'Whg 4B', tenant: 'Hr. Zimmermann', status: 'occupied' },
  { id: 'unit-17', objectId: 'obj-2', name: 'Whg 5A', tenant: 'Fr. Hartmann', status: 'occupied' },
  { id: 'unit-18-lw', objectId: 'obj-2', name: 'Whg 5B', tenant: 'Familie Lehmann', status: 'occupied' },
  { id: 'unit-19', objectId: 'obj-2', name: 'Whg 6A', tenant: 'Hr. König', status: 'occupied' },
  { id: 'unit-20', objectId: 'obj-2', name: 'Whg 6B', tenant: null, status: 'vacant' },
  // Parkallee 7 (obj-3) - 6 Einheiten
  { id: 'unit-18', objectId: 'obj-3', name: 'Whg 1A', tenant: 'Familie Braun', status: 'occupied' },
  { id: 'unit-21', objectId: 'obj-3', name: 'Whg 1B', tenant: 'Hr. Wolf', status: 'occupied' },
  { id: 'unit-22', objectId: 'obj-3', name: 'Whg 2A', tenant: 'Fr. Schäfer', status: 'occupied' },
  { id: 'unit-23', objectId: 'obj-3', name: 'Whg 2B', tenant: 'Familie Koch', status: 'notice' },
  { id: 'unit-24', objectId: 'obj-3', name: 'Whg 3A', tenant: 'Hr. Bauer', status: 'occupied' },
  { id: 'unit-25', objectId: 'obj-3', name: 'Whg 3B', tenant: null, status: 'vacant' },
];

// Mock Tasks (Anstehendes)
export const mockTasks: CockpitTask[] = [
  // Musterstraße 12 (obj-1)
  {
    id: 'task-1',
    title: 'Einladung zur Eigentümerversammlung versenden',
    type: 'versammlung',
    dueDate: '2025-02-15',
    completed: false,
    objectId: 'obj-1',
  },
  {
    id: 'task-2',
    title: 'Beschlussvorlage: Fassadensanierung freigeben',
    type: 'versammlung',
    dueDate: '2025-02-10',
    completed: false,
    objectId: 'obj-1',
  },
  {
    id: 'task-3',
    title: 'Hausgeldabrechnung 2024 prüfen',
    type: 'abrechnung',
    dueDate: '2025-02-28',
    completed: false,
    objectId: 'obj-1',
  },
  {
    id: 'task-4',
    title: 'Kostenvoranschlag Heizungswartung bestätigen',
    type: 'vorgang',
    dueDate: '2025-01-20',
    completed: true,
    objectId: 'obj-1',
  },
  {
    id: 'task-5',
    title: 'Nebenkostenabrechnung 2024 erstellen',
    type: 'abrechnung',
    dueDate: '2025-03-31',
    completed: false,
    unitId: 'unit-5',
  },
  // Lindenweg 4 (obj-2)
  {
    id: 'task-6',
    title: 'Aufzugswartung TÜV-Abnahme koordinieren',
    type: 'vorgang',
    dueDate: '2025-02-20',
    completed: false,
    objectId: 'obj-2',
  },
  {
    id: 'task-7',
    title: 'Wirtschaftsplan 2025 zur Abstimmung vorlegen',
    type: 'abrechnung',
    dueDate: '2025-03-01',
    completed: false,
    objectId: 'obj-2',
  },
  {
    id: 'task-8',
    title: 'Protokoll ETV 2024 versenden',
    type: 'dokument',
    dueDate: '2025-01-25',
    completed: true,
    objectId: 'obj-2',
  },
  {
    id: 'task-9',
    title: 'Angebote Gartenpflege einholen',
    type: 'vorgang',
    dueDate: '2025-03-15',
    completed: false,
    objectId: 'obj-2',
  },
  // Parkallee 7 (obj-3)
  {
    id: 'task-10',
    title: 'Rücklagenentwicklung 2024 prüfen',
    type: 'abrechnung',
    dueDate: '2025-02-15',
    completed: false,
    objectId: 'obj-3',
  },
  {
    id: 'task-11',
    title: 'Versicherungspolice erneuern',
    type: 'dokument',
    dueDate: '2025-04-01',
    completed: false,
    objectId: 'obj-3',
  },
  {
    id: 'task-12',
    title: 'Beschlusssammlung aktualisieren',
    type: 'dokument',
    dueDate: '2025-01-31',
    completed: true,
    objectId: 'obj-3',
  },
];

// Mock Cases (Vorgänge)
export const mockCases: CockpitCase[] = [
  // Musterstraße 12 (obj-1)
  {
    id: 'case-1',
    title: 'Heizungsanlage: Wartung erforderlich',
    status: 'in_bearbeitung',
    cost: 1250,
    objectId: 'obj-1',
    createdAt: '2025-01-05',
  },
  {
    id: 'case-2',
    title: 'Dachrinne: Reparatur nach Sturmschaden',
    status: 'offen',
    cost: null,
    objectId: 'obj-1',
    createdAt: '2025-01-08',
  },
  {
    id: 'case-3',
    title: 'Wasserschaden Whg 3A',
    status: 'in_bearbeitung',
    cost: 3500,
    objectId: 'obj-1',
    unitId: 'unit-5',
    createdAt: '2024-12-20',
  },
  {
    id: 'case-4',
    title: 'Treppenhausreinigung: Anbieter wechseln',
    status: 'offen',
    cost: null,
    objectId: 'obj-1',
    createdAt: '2025-01-02',
  },
  {
    id: 'case-5',
    title: 'Fassadensanierung Planung',
    status: 'in_bearbeitung',
    cost: 45000,
    objectId: 'obj-1',
    createdAt: '2024-10-15',
  },
  // Lindenweg 4 (obj-2)
  {
    id: 'case-6',
    title: 'Aufzugswartung abgeschlossen',
    status: 'abgeschlossen',
    cost: 890,
    objectId: 'obj-2',
    createdAt: '2024-11-15',
  },
  {
    id: 'case-7',
    title: 'Tiefgaragentor: Antrieb defekt',
    status: 'offen',
    cost: null,
    objectId: 'obj-2',
    createdAt: '2025-01-10',
  },
  {
    id: 'case-8',
    title: 'Schimmelbefall Whg 3A prüfen',
    status: 'in_bearbeitung',
    cost: 800,
    objectId: 'obj-2',
    unitId: 'unit-13',
    createdAt: '2024-12-28',
  },
  {
    id: 'case-9',
    title: 'Gartenpflege: Baumschnitt beauftragen',
    status: 'in_bearbeitung',
    cost: 1200,
    objectId: 'obj-2',
    createdAt: '2025-01-03',
  },
  {
    id: 'case-10',
    title: 'Briefkastenanlage erneuern',
    status: 'abgeschlossen',
    cost: 2800,
    objectId: 'obj-2',
    createdAt: '2024-09-20',
  },
  // Parkallee 7 (obj-3)
  {
    id: 'case-11',
    title: 'Dachdämmung: Gutachten erstellen',
    status: 'abgeschlossen',
    cost: 1500,
    objectId: 'obj-3',
    createdAt: '2024-11-01',
  },
  {
    id: 'case-12',
    title: 'Kellerfeuchte: Sanierung planen',
    status: 'abgeschlossen',
    cost: 8500,
    objectId: 'obj-3',
    createdAt: '2024-08-15',
  },
  {
    id: 'case-13',
    title: 'LED-Beleuchtung Treppenhaus',
    status: 'abgeschlossen',
    cost: 3200,
    objectId: 'obj-3',
    createdAt: '2024-10-01',
  },
];

// Mock Documents
export const mockDocuments: CockpitDocument[] = [
  // Musterstraße 12 (obj-1)
  {
    id: 'doc-1',
    name: 'Wirtschaftsplan_2025.pdf',
    type: 'abrechnung',
    date: '2024-12-15',
    objectId: 'obj-1',
  },
  {
    id: 'doc-2',
    name: 'Protokoll_ETV_2024-11.pdf',
    type: 'protokoll',
    date: '2024-11-20',
    objectId: 'obj-1',
  },
  {
    id: 'doc-3',
    name: 'Beschlusssammlung_2024.pdf',
    type: 'beschluss',
    date: '2024-11-20',
    objectId: 'obj-1',
  },
  {
    id: 'doc-4',
    name: 'Hausgeldabrechnung_2023.pdf',
    type: 'abrechnung',
    date: '2024-06-30',
    objectId: 'obj-1',
  },
  {
    id: 'doc-5',
    name: 'Mietvertrag_Fischer.pdf',
    type: 'vertrag',
    date: '2022-03-01',
    unitId: 'unit-5',
  },
  {
    id: 'doc-6',
    name: 'Nebenkostenabrechnung_2023_Whg3A.pdf',
    type: 'abrechnung',
    date: '2024-07-15',
    unitId: 'unit-5',
  },
  // Lindenweg 4 (obj-2)
  {
    id: 'doc-7',
    name: 'Wirtschaftsplan_2025.pdf',
    type: 'abrechnung',
    date: '2024-12-01',
    objectId: 'obj-2',
  },
  {
    id: 'doc-8',
    name: 'Protokoll_ETV_2024-10.pdf',
    type: 'protokoll',
    date: '2024-10-25',
    objectId: 'obj-2',
  },
  {
    id: 'doc-9',
    name: 'Beschlusssammlung_2024.pdf',
    type: 'beschluss',
    date: '2024-10-25',
    objectId: 'obj-2',
  },
  {
    id: 'doc-10',
    name: 'Hausgeldabrechnung_2023.pdf',
    type: 'abrechnung',
    date: '2024-05-15',
    objectId: 'obj-2',
  },
  {
    id: 'doc-11',
    name: 'Wartungsvertrag_Aufzug.pdf',
    type: 'vertrag',
    date: '2023-01-01',
    objectId: 'obj-2',
  },
  {
    id: 'doc-12',
    name: 'Gutachten_Tiefgarage.pdf',
    type: 'sonstiges',
    date: '2024-08-10',
    objectId: 'obj-2',
  },
  // Parkallee 7 (obj-3)
  {
    id: 'doc-13',
    name: 'Wirtschaftsplan_2025.pdf',
    type: 'abrechnung',
    date: '2024-11-28',
    objectId: 'obj-3',
  },
  {
    id: 'doc-14',
    name: 'Protokoll_ETV_2024-09.pdf',
    type: 'protokoll',
    date: '2024-09-15',
    objectId: 'obj-3',
  },
  {
    id: 'doc-15',
    name: 'Beschlusssammlung_2024.pdf',
    type: 'beschluss',
    date: '2024-09-15',
    objectId: 'obj-3',
  },
  {
    id: 'doc-16',
    name: 'Hausgeldabrechnung_2023.pdf',
    type: 'abrechnung',
    date: '2024-04-30',
    objectId: 'obj-3',
  },
  {
    id: 'doc-17',
    name: 'Energieausweis_2024.pdf',
    type: 'sonstiges',
    date: '2024-06-01',
    objectId: 'obj-3',
  },
  {
    id: 'doc-18',
    name: 'Versicherungspolice_2024.pdf',
    type: 'vertrag',
    date: '2024-01-01',
    objectId: 'obj-3',
  },
];

// Mock Finance Data (WEG) - per Object
export const mockFinanceSnapshot: FinanceSnapshot[] = [
  // Musterstraße 12 (obj-1)
  { label: 'Instandhaltung', current: 12500, planned: 18000, unit: '€', objectId: 'obj-1' },
  { label: 'Betriebskosten', current: 8200, planned: 9000, unit: '€', objectId: 'obj-1' },
  { label: 'Rücklagen', current: 45000, planned: 50000, unit: '€', objectId: 'obj-1' },
  // Lindenweg 4 (obj-2)
  { label: 'Instandhaltung', current: 22000, planned: 25000, unit: '€', objectId: 'obj-2' },
  { label: 'Betriebskosten', current: 14500, planned: 14000, unit: '€', objectId: 'obj-2' }, // Über Budget!
  { label: 'Rücklagen', current: 68000, planned: 75000, unit: '€', objectId: 'obj-2' },
  // Parkallee 7 (obj-3)
  { label: 'Instandhaltung', current: 5200, planned: 12000, unit: '€', objectId: 'obj-3' },
  { label: 'Betriebskosten', current: 4800, planned: 6000, unit: '€', objectId: 'obj-3' },
  { label: 'Rücklagen', current: 32000, planned: 35000, unit: '€', objectId: 'obj-3' },
];

// Helper function to get finance data for a specific object
export function getFinanceForObject(objectId: string): FinanceSnapshot[] {
  return mockFinanceSnapshot.filter(f => f.objectId === objectId);
}

// Mock Tenant Data (Eigentümer)
export const mockTenants: TenantInfo[] = [
  {
    id: 'tenant-1',
    unitId: 'unit-5',
    name: 'Familie Fischer',
    moveInDate: '2022-08-01',
    monthlyRent: 1200,
    status: 'aktiv',
    email: 'fischer@example.de',
    phone: '+49 170 1234567',
  },
  {
    id: 'tenant-2',
    unitId: 'unit-1',
    name: 'Familie Müller',
    moveInDate: '2021-03-15',
    monthlyRent: 950,
    status: 'aktiv',
  },
];

// Mock Eigentümer Finance Data
export const mockEigentuemerFinance: EigentuemerFinance[] = [
  {
    unitId: 'unit-5',
    yearlyRentIncome: 14400,
    yearlyRentExpected: 14400,
    yearlyCoststoDate: 6250,
    cashflow: 8150,
    nextPayout: 1200,
    nextPayoutDate: '2025-02-01',
    hausgeld: 320,
    nebenkosten: 180,
  },
];

// Eigentümer-specific tasks (different vocabulary)
export const mockEigentuemerTasks: CockpitTask[] = [
  {
    id: 'etask-1',
    title: 'Nebenkostenabrechnung 2024 erstellen',
    type: 'abrechnung',
    dueDate: '2025-03-31',
    completed: false,
    unitId: 'unit-5',
  },
  {
    id: 'etask-2',
    title: 'Mietanpassung prüfen (Indexmiete)',
    type: 'vorgang',
    dueDate: '2025-06-01',
    completed: false,
    unitId: 'unit-5',
  },
  {
    id: 'etask-3',
    title: 'Rauchmelder-Wartung beauftragen',
    type: 'vorgang',
    dueDate: '2025-04-15',
    completed: false,
    unitId: 'unit-5',
  },
];

// Eigentümer-specific documents (no protocols, no resolutions)
export const mockEigentuemerDocuments: CockpitDocument[] = [
  {
    id: 'edoc-1',
    name: 'Mietvertrag_Fischer.pdf',
    type: 'vertrag',
    date: '2022-08-01',
    unitId: 'unit-5',
  },
  {
    id: 'edoc-2',
    name: 'Nebenkostenabrechnung_2023.pdf',
    type: 'abrechnung',
    date: '2024-07-15',
    unitId: 'unit-5',
  },
  {
    id: 'edoc-3',
    name: 'Übergabeprotokoll_Einzug.pdf',
    type: 'sonstiges',
    date: '2022-08-01',
    unitId: 'unit-5',
  },
  {
    id: 'edoc-4',
    name: 'Mieterhöhung_2024.pdf',
    type: 'sonstiges',
    date: '2024-01-15',
    unitId: 'unit-5',
  },
];

// Current context state (would be managed by state management in real app)
export const defaultContext = {
  currentObjectId: 'obj-1',
  currentUnitId: null as string | null,
  mode: 'weg' as 'weg' | 'eigentuemer',
};

// User's owned units (the units that belong to the current user as Eigentümer)
export interface OwnedUnit {
  unitId: string;
  objectId: string;
  objectName: string;
  unitName: string;
}

export const myOwnedUnits: OwnedUnit[] = [
  {
    unitId: 'unit-5',
    objectId: 'obj-1',
    objectName: 'Musterstraße 12',
    unitName: 'Whg 3A',
  },
  {
    unitId: 'unit-7',
    objectId: 'obj-1',
    objectName: 'Musterstraße 12',
    unitName: 'Whg 4A',
  },
  {
    unitId: 'unit-12',
    objectId: 'obj-2',
    objectName: 'Lindenweg 4',
    unitName: 'Whg 2B',
  },
  {
    unitId: 'unit-18',
    objectId: 'obj-3',
    objectName: 'Parkallee 7',
    unitName: 'Whg 1A',
  },
];

// Add finance data for second owned unit
export const mockEigentuemerFinanceUnit7: EigentuemerFinance = {
  unitId: 'unit-7',
  yearlyRentIncome: 10800,
  yearlyRentExpected: 10800,
  yearlyCoststoDate: 4200,
  cashflow: 6600,
  nextPayout: 900,
  nextPayoutDate: '2025-02-01',
  hausgeld: 280,
  nebenkosten: 150,
};

// Add finance data for third owned unit (Lindenweg 4, Whg 2B)
export const mockEigentuemerFinanceUnit12: EigentuemerFinance = {
  unitId: 'unit-12',
  yearlyRentIncome: 9600,
  yearlyRentExpected: 9600,
  yearlyCoststoDate: 3800,
  cashflow: 5800,
  nextPayout: 800,
  nextPayoutDate: '2025-02-01',
  hausgeld: 250,
  nebenkosten: 120,
};

// Add finance data for fourth owned unit (Parkallee 7, Whg 1A)
export const mockEigentuemerFinanceUnit18: EigentuemerFinance = {
  unitId: 'unit-18',
  yearlyRentIncome: 13200,
  yearlyRentExpected: 13200,
  yearlyCoststoDate: 5100,
  cashflow: 8100,
  nextPayout: 1100,
  nextPayoutDate: '2025-02-01',
  hausgeld: 350,
  nebenkosten: 200,
};

// Add tenant for second owned unit
export const mockTenantUnit7: TenantInfo = {
  id: 'tenant-3',
  unitId: 'unit-7',
  name: 'Fr. Hoffmann',
  moveInDate: '2020-04-01',
  monthlyRent: 900,
  status: 'aktiv',
  email: 'hoffmann@example.de',
};

// Add tenant for third owned unit (Lindenweg 4, Whg 2B)
export const mockTenantUnit12: TenantInfo = {
  id: 'tenant-4',
  unitId: 'unit-12',
  name: 'Hr. Schneider',
  moveInDate: '2023-01-15',
  monthlyRent: 800,
  status: 'aktiv',
  email: 'schneider@example.de',
  phone: '+49 172 9876543',
};

// Add tenant for fourth owned unit (Parkallee 7, Whg 1A)
export const mockTenantUnit18: TenantInfo = {
  id: 'tenant-5',
  unitId: 'unit-18',
  name: 'Familie Braun',
  moveInDate: '2019-07-01',
  monthlyRent: 1100,
  status: 'aktiv',
  email: 'braun@example.de',
};

// Helper to get all owned units
export function getMyOwnedUnits(): OwnedUnit[] {
  return myOwnedUnits;
}

// Helper to get finance for any owned unit
export function getFinanceForOwnedUnit(unitId: string): EigentuemerFinance | undefined {
  if (unitId === 'unit-7') return mockEigentuemerFinanceUnit7;
  if (unitId === 'unit-12') return mockEigentuemerFinanceUnit12;
  if (unitId === 'unit-18') return mockEigentuemerFinanceUnit18;
  return mockEigentuemerFinance.find(f => f.unitId === unitId);
}

// Helper to get tenant for any owned unit
export function getTenantForOwnedUnit(unitId: string): TenantInfo | undefined {
  if (unitId === 'unit-7') return mockTenantUnit7;
  if (unitId === 'unit-12') return mockTenantUnit12;
  if (unitId === 'unit-18') return mockTenantUnit18;
  return mockTenants.find(t => t.unitId === unitId);
}

// Helper function to get object by ID
export function getObjectById(id: string): CockpitObject | undefined {
  return mockObjects.find(obj => obj.id === id);
}

// Helper function to get units for an object
export function getUnitsForObject(objectId: string): CockpitUnit[] {
  return mockUnits.filter(unit => unit.objectId === objectId);
}

// Helper function to get tasks for current context
export function getTasksForContext(objectId: string, unitId?: string | null): CockpitTask[] {
  if (unitId) {
    return mockTasks.filter(task => task.unitId === unitId);
  }
  return mockTasks.filter(task => task.objectId === objectId && !task.unitId);
}

// Helper function to get cases for current context
export function getCasesForContext(objectId: string, unitId?: string | null): CockpitCase[] {
  if (unitId) {
    return mockCases.filter(c => c.unitId === unitId);
  }
  return mockCases.filter(c => c.objectId === objectId);
}

// Helper function to get documents for current context
export function getDocumentsForContext(objectId: string, unitId?: string | null): CockpitDocument[] {
  if (unitId) {
    return mockDocuments.filter(doc => doc.unitId === unitId);
  }
  return mockDocuments.filter(doc => doc.objectId === objectId && !doc.unitId);
}

// Eigentümer-specific helper functions
export function getTenantForUnit(unitId: string): TenantInfo | undefined {
  return mockTenants.find(t => t.unitId === unitId);
}

export function getEigentuemerFinanceForUnit(unitId: string): EigentuemerFinance | undefined {
  return mockEigentuemerFinance.find(f => f.unitId === unitId);
}

export function getUnitById(unitId: string): CockpitUnit | undefined {
  return mockUnits.find(u => u.id === unitId);
}

export function getEigentuemerCasesForUnit(unitId: string): CockpitCase[] {
  return mockCases.filter(c => c.unitId === unitId);
}
