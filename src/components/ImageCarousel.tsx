import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ImageCard from './ImageCard'

interface CarouselItem {
  imageSrc: string
  imageAlt: string
  category: string
  title: string
}

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const carouselItems: CarouselItem[] = [
    {
      imageSrc: '/img/hotblack.jpeg',
      imageAlt: 'Eden Roberts in leather bomber jacket',
      category: 'Fashion',
      title: 'LEATHER BOMBER'
    },
    {
      imageSrc: '/img/sexy.jpeg',
      imageAlt: 'Eden Roberts with faux fur scarf',
      category: 'Outfits',
      title: 'FAUX FUR SCARF X ELEGANT'
    },
    {
      imageSrc: '/img/portrait_white.jpeg',
      imageAlt: 'Eden Roberts in sparkling dress',
      category: 'Fashion',
      title: 'SPARKLING FESTIVE'
    },
    {
      imageSrc: '/img/sporty.jpeg',
      imageAlt: 'Eden Roberts in cozy chocolate outfit',
      category: 'Fashion',
      title: 'COSY CHOCOLATE'
    },
    {
      imageSrc: '/img/upfront.jpeg',
      imageAlt: 'Eden Roberts collaboration',
      category: 'Shopping',
      title: 'EDEN ROBERTS X'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = isMobile ? carouselItems.length - 1 : carouselItems.length - 3
      return prevIndex >= maxIndex ? 0 : prevIndex + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = isMobile ? carouselItems.length - 1 : carouselItems.length - 3
      return prevIndex === 0 ? maxIndex : prevIndex - 1
    })
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 100 / 3)}%)` 
            }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-3">
                <div className="max-w-xs mx-auto">
                  <ImageCard
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    title={item.title}
                    subtitle={item.category}
                    variant="elegant"
                    showCategory={true}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator - Hidden on mobile for cleaner look */}
        <div className="hidden md:flex justify-center mt-8 space-x-2">
          {Array.from({ length: carouselItems.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-gray-800 w-8' 
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageCarousel
