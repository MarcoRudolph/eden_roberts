import React from 'react'
import HeroSection from './HeroSection'
import OutfitsSection from './OutfitsSection'
import FashionSection from './FashionSection'
import TravelSection from './TravelSection'
import AboutSection from './AboutSection'
import SocialLinks from './SocialLinks'
import Footer from './Footer'

const InfluencerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <OutfitsSection />
      <FashionSection />
      <TravelSection />
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default InfluencerPage
