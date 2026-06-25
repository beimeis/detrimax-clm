import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import BabyFlow from './pages/BabyFlow'
import ActiveFlow from './pages/ActiveFlow'
import Finale from './pages/Finale'
import { useFrameScale } from './hooks/useFrameScale'

export default function App() {
  useFrameScale()

  return (
    <BrowserRouter>
      <div className="slide-viewport">
        <div className="slide-viewport-inner">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/baby/:slideId" element={<BabyFlow />} />
            <Route path="/active/:slideId" element={<ActiveFlow />} />
            <Route path="/finale" element={<Finale />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
