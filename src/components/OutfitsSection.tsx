import React from 'react'
import { useTranslation } from 'react-i18next'
import ImageCard from './ImageCard'

const OutfitsSection: React.FC = () => {
  const { t } = useTranslation()

  const outfitItems = [
    {
      imageSrc: '/img/sexy.jpeg',
      imageAlt: 'Eden Roberts in elegant outfit',
      title: 'Outfits',
      subtitle: 'FAUX FUR SCARF X ELEGANT STYLE',
      variant: 'elegant' as const
    },
    {
      imageSrc: '/img/sporty.jpeg',
      imageAlt: 'Eden Roberts in sporty outfit',
      title: 'Sporty Look',
      subtitle: 'ATHLETIC WEAR X CASUAL CHIC',
      variant: 'default' as const
    },
    {
      imageSrc: '/img/portrait_white.jpeg',
      imageAlt: 'Eden Roberts portrait',
      title: 'Portrait Style',
      subtitle: 'MINIMALIST ELEGANCE X TIMELESS BEAUTY',
      variant: 'default' as const
    }
  ]

  return (
    <section id="outfits" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            {t('navigation.outfits')}
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Discover my latest outfit inspirations and styling tips
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outfitItems.map((item, index) => (
            <ImageCard
              key={index}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              subtitle={item.subtitle}
              variant={item.variant}
              className="w-full max-w-sm mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OutfitsSection
