import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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
import { Footer } from "./Footer";
import { useCockpitMode } from "@/context/CockpitModeContext";
import { mockObjects, getMyOwnedUnits } from "@/data/mockCockpitData";

interface HubLayoutProps {
  children: React.ReactNode;
}

export function HubLayout({ children }: HubLayoutProps) {
  const location = useLocation();
  const {
    mode,
    switchMode,
    selectedObjectId,
    setSelectedObjectId,
    selectedUnitId,
    setSelectedUnitId,
  } = useCockpitMode();

  // Check if we're in the cockpit area
  const isCockpit = location.pathname.startsWith("/cockpit");

  // State for hover-based Angebot dropdown with delayed close
  const [angebotOpen, setAngebotOpen] = useState(false);
  const angebotTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAngebotMouseEnter = () => {
    if (angebotTimeoutRef.current) {
      clearTimeout(angebotTimeoutRef.current);
      angebotTimeoutRef.current = null;
    }
    setAngebotOpen(true);
  };

  const handleAngebotMouseLeave = () => {
    angebotTimeoutRef.current = setTimeout(() => {
      setAngebotOpen(false);
    }, 200);
  };

  // Get data for dropdowns
  const myOwnedUnits = getMyOwnedUnits();
  const currentObject = mockObjects.find((obj) => obj.id === selectedObjectId);
  const currentOwnedUnit = myOwnedUnits.find((u) => u.unitId === selectedUnitId);

  const isActive = (path: string) => {
    if (path === "/cockpit") {
      return location.pathname === "/cockpit";
    }
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinkClass = (path: string) => {
    return `text-sm font-medium transition-all px-3 py-2 rounded-md ${
      isActive(path)
        ? "text-[#2463eb] bg-[#2463eb]/10"
        : "text-foreground/80 hover:text-[#2463eb] hover:bg-[#2463eb]/10"
    }`;
  };

  // Dynamic nav link class based on mode
  const cockpitNavLinkClass = (path: string) => {
    const activeColor = mode === "eigentuemer" ? "text-teal-600" : "text-[#2463eb]";
    const activeBg = mode === "eigentuemer" ? "bg-teal-600/10" : "bg-[#2463eb]/10";
    const hoverColor = mode === "eigentuemer" ? "hover:text-teal-600" : "hover:text-[#2463eb]";
    const hoverBg = mode === "eigentuemer" ? "hover:bg-teal-600/10" : "hover:bg-[#2463eb]/10";

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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
      {/* Navigation Header */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <div className="h-16 px-6 border-0 shadow-lg bg-background/95 backdrop-blur-sm mx-auto max-w-screen-xl rounded-lg">
          <div className="flex items-center h-full w-full gap-8">
            <Link to={isCockpit ? "/cockpit" : "/"}>
              <WegoraLogo variant="horizontal" size="md" dotWeight="hero" />
            </Link>

            {isCockpit ? (
              /* Cockpit Navigation */
              <nav className="flex-1 flex items-center gap-1">
                {/* 1. Objekt-Dropdown (always visible) */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`h-9 px-3 gap-2 font-medium ${
                        mode === "eigentuemer"
                          ? "text-teal-700 hover:bg-teal-600/10"
                          : "text-[#2463eb] hover:bg-[#2463eb]/10"
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
                          <Check className="h-4 w-4 text-teal-600" />
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
                        className="h-9 px-3 gap-2 font-medium text-teal-700 hover:bg-teal-600/10"
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
                              <Check className="h-4 w-4 text-teal-600" />
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
                    to={item.path}
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
                            ? "text-teal-600 bg-teal-600/10"
                            : "text-[#2463eb] bg-[#2463eb]/10"
                          : `text-foreground/80 ${
                              mode === "eigentuemer"
                                ? "hover:text-teal-600 hover:bg-teal-600/10"
                                : "hover:text-[#2463eb] hover:bg-[#2463eb]/10"
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
                        to="/cockpit/finanzen"
                        className="cursor-pointer flex items-center gap-2"
                      >
                        <ChartBar className="h-4 w-4" />
                        Finanzen-Übersicht
                      </Link>
                    </DropdownMenuItem>
                    {mode === "eigentuemer" && (
                      <DropdownMenuItem asChild>
                        <Link
                          to="/cockpit/optimierung"
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
            ) : (
              /* Marketing Site Navigation */
              <nav className="flex-1 flex items-center gap-2">
                {/* Angebot Dropdown with two equal entries */}
                <div
                  className="relative"
                  onMouseEnter={handleAngebotMouseEnter}
                  onMouseLeave={handleAngebotMouseLeave}
                >
                  <DropdownMenu open={angebotOpen} onOpenChange={setAngebotOpen} modal={false}>
                    <DropdownMenuTrigger asChild>
                      <span
                        className={`text-sm font-medium transition-all px-3 py-2 rounded-md cursor-pointer flex items-center gap-1 ${
                          (isActive("/angebot-weg") || isActive("/angebot-eigentuemer"))
                            ? "text-[#2463eb] bg-[#2463eb]/10"
                            : "text-foreground/80 hover:text-[#2463eb] hover:bg-[#2463eb]/10"
                        }`}
                      >
                        Unser Angebot
                        <CaretDown className="h-3 w-3" />
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-[22rem] animate-none"
                      sideOffset={0}
                      onMouseEnter={handleAngebotMouseEnter}
                      onMouseLeave={handleAngebotMouseLeave}
                    >
                      <DropdownMenuItem asChild className="group hover:bg-[#2463eb]/10 focus:bg-[#2463eb]/10">
                        <Link to="/angebot-weg" className="cursor-pointer flex items-center gap-3 py-2">
                          <div className="w-8 h-8 bg-[#2463eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Buildings className="h-4 w-4 text-[#2463eb]" />
                          </div>
                          <div>
                            <div className="font-medium text-sm group-hover:text-[#2463eb] transition-colors whitespace-nowrap">Wegora WEG</div>
                            <div className="text-xs text-muted-foreground whitespace-nowrap">Für WEGs, Selbstverwalter & kleine Verwaltungen</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="group hover:bg-teal-500/10 focus:bg-teal-500/10">
                        <Link to="/angebot-eigentuemer" className="cursor-pointer flex items-center gap-3 py-2">
                          <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <House className="h-4 w-4 text-teal-500" />
                          </div>
                          <div>
                            <div className="font-medium text-sm group-hover:text-teal-500 transition-colors whitespace-nowrap">Wegora Eigentümer</div>
                            <div className="text-xs text-muted-foreground whitespace-nowrap">Für Eigentümer & Vermieter</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Link to="/vision" className={navLinkClass("/vision")}>
                  Vision
                </Link>
                <Link to="/ueber-uns" className={navLinkClass("/ueber-uns")}>
                  Über uns
                </Link>
                <Link to="/kontakt" className={navLinkClass("/kontakt")}>
                  Kontakt
                </Link>
              </nav>
            )}

            {isCockpit ? (
              /* Cockpit: Mode Toggle + User Menu */
              <div className="flex items-center gap-2">
                {/* Mode Toggle */}
                <div className="flex items-center bg-muted rounded-lg p-0.5">
                  <button
                    onClick={() => switchMode("weg")}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      mode === "weg"
                        ? "bg-white text-[#2463eb] shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Meine WEG
                  </button>
                  <button
                    onClick={() => switchMode("eigentuemer")}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      mode === "eigentuemer"
                        ? "bg-white text-teal-600 shadow-sm"
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
                      <Link to="/" className="cursor-pointer flex items-center gap-2">
                        <SignOut className="h-4 w-4" />
                        Abmelden
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              /* Marketing Site Buttons */
              <>
                <Link to="/cockpit">
                  <Button
                    size="sm"
                    className="h-9 text-sm px-6 bg-[#2463eb] hover:bg-[#1d4ed8] text-white"
                  >
                    Jetzt registrieren
                  </Button>
                </Link>

                {/* Login Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 text-sm px-4 gap-2"
                    >
                      <UserCircle className="h-5 w-5" />
                      <span>Login</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link
                        to="/cockpit"
                        className="cursor-pointer"
                      >
                        Anmelden
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/cockpit"
                        className="cursor-pointer"
                      >
                        Registrieren
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer - hide in cockpit */}
      {!isCockpit && <Footer />}
    </div>
  );
}
