import { useState } from 'react'
import './lib/i18n'
import InfluencerPage from './components/InfluencerPage'
import ImpressumPage from './components/ImpressumPage'
import DatenschutzPage from './components/DatenschutzPage'
import Navigation from './components/Navigation'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'impressum':
        return <ImpressumPage />
      case 'privacy':
        return <DatenschutzPage />
      default:
        return <InfluencerPage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App
