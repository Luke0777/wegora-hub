"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WegoraLogo } from "@/components/ui/WegoraLogo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  UserCircle,
  House,
  Buildings,
  Folder,
  FileText,
  ChartBar,
  SignOut,
  CaretDown,
  User,
  Lightbulb,
  CurrencyEur,
  Check,
} from "@phosphor-icons/react";
import { useCockpitMode } from "@/context/CockpitModeContext";
import { mockObjects, getMyOwnedUnits } from "@/data/mockCockpitData";

export function CockpitHeader() {
  const pathname = usePathname();
  const {
    mode,
    switchMode,
    selectedObjectId,
    setSelectedObjectId,
    selectedUnitId,
    setSelectedUnitId,
  } = useCockpitMode();

  // Get data for dropdowns
  const myOwnedUnits = getMyOwnedUnits();
  const currentObject = mockObjects.find((obj) => obj.id === selectedObjectId);
  const currentOwnedUnit = myOwnedUnits.find((u) => u.unitId === selectedUnitId);

  const isActive = (path: string) => {
    if (path === "/cockpit") {
      return pathname === "/cockpit";
    }
    return pathname === path || pathname.startsWith(path + "/");
  };

  // Dynamic nav link class based on mode
  const cockpitNavLinkClass = (path: string) => {
    const activeColor = mode === "eigentuemer" ? "text-owner-600" : "text-weg-500";
    const activeBg = mode === "eigentuemer" ? "bg-owner-600/10" : "bg-weg-500/10";
    const hoverColor = mode === "eigentuemer" ? "hover:text-owner-600" : "hover:text-weg-500";
    const hoverBg = mode === "eigentuemer" ? "hover:bg-owner-600/10" : "hover:bg-weg-500/10";

    return `text-sm font-medium transition-all px-3 py-2 rounded-md flex items-center gap-2 ${
      isActive(path)
        ? `${activeColor} ${activeBg}`
        : `text-foreground/80 ${hoverColor} ${hoverBg}`
    }`;
  };

  // Get unique objects where user owns units (for Eigentümer mode)
  const ownedObjectIds = [...new Set(myOwnedUnits.map((u) => u.objectId))];
  const ownedObjects = mockObjects.filter((obj) => ownedObjectIds.includes(obj.id));

  // Get units in currently selected object (for Wohnung dropdown)
  const unitsInCurrentObject = myOwnedUnits.filter(
    (u) => u.objectId === selectedObjectId
  );

  // WEG Navigation Items (no Finanzen - it's a dropdown)
  const wegNavItems = [
    { path: "/cockpit/objekte", label: "Objekte", icon: Buildings },
    { path: "/cockpit/vorgaenge", label: "Vorgänge", icon: Folder },
    { path: "/cockpit/dokumente", label: "Dokumente", icon: FileText },
  ];

  // Eigentümer Navigation Items (no Finanzen - it's a dropdown, no Objekte)
  const eigentuemerNavItems = [
    { path: "/cockpit/vorgaenge", label: "Vorgänge", icon: Folder },
    { path: "/cockpit/dokumente", label: "Dokumente", icon: FileText },
    { path: "/cockpit/mieter", label: "Mieter", icon: User },
  ];

  const navItems = mode === "eigentuemer" ? eigentuemerNavItems : wegNavItems;

  // Handle object change with auto-select first unit in that object
  const handleObjectChange = (objectId: string) => {
    setSelectedObjectId(objectId);
    if (mode === "eigentuemer") {
      // Auto-select first owned unit in this object
      const firstUnitInObject = myOwnedUnits.find((u) => u.objectId === objectId);
      if (firstUnitInObject) {
        setSelectedUnitId(firstUnitInObject.unitId);
      }
    }
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="h-16 px-6 border-0 shadow-lg bg-background/95 backdrop-blur-sm mx-auto max-w-screen-xl rounded-lg">
        <div className="flex items-center h-full w-full gap-8">
          <Link href="/cockpit">
            <WegoraLogo variant="horizontal" size="md" dotWeight="hero" />
          </Link>

          {/* Cockpit Navigation */}
          <nav className="flex-1 flex items-center gap-1">
            {/* 1. Objekt-Dropdown (always visible) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-9 px-3 gap-2 font-medium ${
                    mode === "eigentuemer"
                      ? "text-owner-700 hover:bg-owner-600/10"
                      : "text-weg-500 hover:bg-weg-500/10"
                  }`}
                >
                  <Buildings className="h-4 w-4" />
                  <span className="max-w-[120px] truncate">
                    {currentObject?.name || "Objekt wählen"}
                  </span>
                  <CaretDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                  {mode === "eigentuemer" ? "Meine Objekte" : "Alle Objekte"}
                </div>
                {(mode === "eigentuemer" ? ownedObjects : mockObjects).map((obj) => (
                  <DropdownMenuItem
                    key={obj.id}
                    onClick={() => handleObjectChange(obj.id)}
                    className="cursor-pointer flex items-center justify-between"
                  >
                    <span>{obj.name}</span>
                    {selectedObjectId === obj.id && (
                      <Check className="h-4 w-4 text-owner-600" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 2. Wohnung-Dropdown (only in Eigentümer mode) */}
            {mode === "eigentuemer" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 px-3 gap-2 font-medium text-owner-700 hover:bg-owner-600/10"
                  >
                    <House className="h-4 w-4" />
                    <span className="max-w-[100px] truncate">
                      {currentOwnedUnit?.unitName || "Wohnung wählen"}
                    </span>
                    <CaretDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                    Wohnungen in {currentObject?.name}
                  </div>
                  {unitsInCurrentObject.length > 0 ? (
                    unitsInCurrentObject.map((unit) => (
                      <DropdownMenuItem
                        key={unit.unitId}
                        onClick={() => setSelectedUnitId(unit.unitId)}
                        className="cursor-pointer flex items-center justify-between"
                      >
                        <span>{unit.unitName}</span>
                        {selectedUnitId === unit.unitId && (
                          <Check className="h-4 w-4 text-owner-600" />
                        )}
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <div className="px-2 py-2 text-sm text-muted-foreground">
                      Keine Wohnungen in diesem Objekt
                    </div>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* 3. Dynamic Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cockpitNavLinkClass(item.path)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}

            {/* 4. Finanzen-Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-9 px-3 gap-2 font-medium ${
                    isActive("/cockpit/finanzen") || isActive("/cockpit/optimierung")
                      ? mode === "eigentuemer"
                        ? "text-owner-600 bg-owner-600/10"
                        : "text-weg-500 bg-weg-500/10"
                      : `text-foreground/80 ${
                          mode === "eigentuemer"
                            ? "hover:text-owner-600 hover:bg-owner-600/10"
                            : "hover:text-weg-500 hover:bg-weg-500/10"
                        }`
                  }`}
                >
                  <CurrencyEur className="h-4 w-4" />
                  Finanzen
                  <CaretDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link
                    href="/cockpit/finanzen"
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <ChartBar className="h-4 w-4" />
                    Finanzen-Übersicht
                  </Link>
                </DropdownMenuItem>
                {mode === "eigentuemer" && (
                  <DropdownMenuItem asChild>
                    <Link
                      href="/cockpit/optimierung"
                      className="cursor-pointer flex items-center gap-2"
                    >
                      <Lightbulb className="h-4 w-4" />
                      Optimierung
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Cockpit: Mode Toggle + User Menu */}
          <div className="flex items-center gap-2">
            {/* Mode Toggle */}
            <div className="flex items-center bg-muted rounded-lg p-0.5">
              <button
                onClick={() => switchMode("weg")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  mode === "weg"
                    ? "bg-white text-weg-500 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Meine WEG
              </button>
              <button
                onClick={() => switchMode("eigentuemer")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  mode === "eigentuemer"
                    ? "bg-white text-owner-600 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Meine Wohnungen
              </button>
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 text-sm px-4 gap-2"
                >
                  <UserCircle className="h-5 w-5" />
                  <span className="hidden sm:inline">Max Mustermann</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer flex items-center gap-2">
                    <SignOut className="h-4 w-4" />
                    Abmelden
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
