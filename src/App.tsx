import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CockpitModeProvider } from './context/CockpitModeContext'
import { TooltipProvider } from './components/ui/tooltip'
import { Toaster } from './components/ui/sonner'
import { HubLayout } from './components/hub/HubLayout'
import { HomePage } from './components/hub/HomePage'
import { AngebotWEGPage } from './components/hub/AngebotWEGPage'
import { AngebotEigentuemerPage } from './components/hub/AngebotEigentuemerPage'
import { ServiceDetailWEGPage } from './components/hub/ServiceDetailWEGPage'
import { ServiceDetailEigentuemerPage } from './components/hub/ServiceDetailEigentuemerPage'
import { VisionPage } from './components/hub/VisionPage'
import { NeuigkeitenPage } from './components/hub/NeuigkeitenPage'
import { UeberUnsPage } from './components/hub/UeberUnsPage'
import { KontaktPage } from './components/hub/KontaktPage'
// Cockpit pages
import { CockpitPage } from './components/cockpit/CockpitPage'
import { ObjektePage } from './components/cockpit/ObjektePage'
import { VorgaengePage } from './components/cockpit/VorgaengePage'
import { DokumentePage } from './components/cockpit/DokumentePage'
import { FinanzenPage } from './components/cockpit/FinanzenPage'
import { MieterPage } from './components/cockpit/MieterPage'
import { OptimierungPage } from './components/cockpit/OptimierungPage'
// Test page for @acme/ui integration
import { AcmeUiTestPage } from './components/hub/AcmeUiTestPage'

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <CockpitModeProvider>
          <Routes>
          {/* Marketing Site Routes */}
          <Route path="/" element={<HubLayout><HomePage /></HubLayout>} />
          <Route path="/angebot-weg" element={<HubLayout><AngebotWEGPage /></HubLayout>} />
          <Route path="/angebot-weg/:serviceId" element={<HubLayout><ServiceDetailWEGPage /></HubLayout>} />
          <Route path="/angebot-eigentuemer" element={<HubLayout><AngebotEigentuemerPage /></HubLayout>} />
          <Route path="/angebot-eigentuemer/:serviceId" element={<HubLayout><ServiceDetailEigentuemerPage /></HubLayout>} />
          {/* Redirect old route for compatibility */}
          <Route path="/unser-angebot" element={<Navigate to="/angebot-weg" replace />} />
          <Route path="/vision" element={<HubLayout><VisionPage /></HubLayout>} />
          <Route path="/neuigkeiten" element={<HubLayout><NeuigkeitenPage /></HubLayout>} />
          <Route path="/ueber-uns" element={<HubLayout><UeberUnsPage /></HubLayout>} />
          <Route path="/kontakt" element={<HubLayout><KontaktPage /></HubLayout>} />

          {/* Cockpit Routes */}
          <Route path="/cockpit" element={<HubLayout><CockpitPage /></HubLayout>} />
          <Route path="/cockpit/objekte" element={<HubLayout><ObjektePage /></HubLayout>} />
          <Route path="/cockpit/vorgaenge" element={<HubLayout><VorgaengePage /></HubLayout>} />
          <Route path="/cockpit/dokumente" element={<HubLayout><DokumentePage /></HubLayout>} />
          <Route path="/cockpit/finanzen" element={<HubLayout><FinanzenPage /></HubLayout>} />
          <Route path="/cockpit/mieter" element={<HubLayout><MieterPage /></HubLayout>} />
          <Route path="/cockpit/optimierung" element={<HubLayout><OptimierungPage /></HubLayout>} />

          {/* Test route for @acme/ui integration */}
          <Route path="/test-acme-ui" element={<AcmeUiTestPage />} />
          </Routes>
          <Toaster />
        </CockpitModeProvider>
      </TooltipProvider>
    </BrowserRouter>
  )
}

export default App
