import React from 'react'
import HeroSection from './HeroSection'
import OutfitsSection from './OutfitsSection'
import FashionSection from './FashionSection'
import TravelSection from './TravelSection'
import AboutSection from './AboutSection'
import SocialLinks from './SocialLinks'
import Footer from './Footer'

interface InfluencerPageProps {
  onNavigate?: (page: string) => void
}

const InfluencerPage: React.FC<InfluencerPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div id="top" />
      <HeroSection />
      <AboutSection />
      <OutfitsSection />
      <FashionSection />
      <TravelSection />
      <SocialLinks />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default InfluencerPage
