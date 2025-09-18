import React from 'react'
import ImageCarousel from './ImageCarousel'

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-white">
      {/* Image Carousel */}
      <ImageCarousel />
    </section>
  )
}

export default HeroSection
