import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HubLayout } from './components/hub/HubLayout'
import { HomePage } from './components/hub/HomePage'
import { UnserAngebotPage } from './components/hub/UnserAngebotPage'
import { VisionPage } from './components/hub/VisionPage'
import { NeuigkeitenPage } from './components/hub/NeuigkeitenPage'
import { UeberUnsPage } from './components/hub/UeberUnsPage'
import { KontaktPage } from './components/hub/KontaktPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HubLayout><HomePage /></HubLayout>} />
        <Route path="/unser-angebot" element={<HubLayout><UnserAngebotPage /></HubLayout>} />
        <Route path="/vision" element={<HubLayout><VisionPage /></HubLayout>} />
        <Route path="/neuigkeiten" element={<HubLayout><NeuigkeitenPage /></HubLayout>} />
        <Route path="/ueber-uns" element={<HubLayout><UeberUnsPage /></HubLayout>} />
        <Route path="/kontakt" element={<HubLayout><KontaktPage /></HubLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
