import React from 'react'
import { useTranslation } from 'react-i18next'

const TravelSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="travel" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          {t('navigation.travel')}
        </h2>
        <p className="text-2xl text-gray-700 leading-relaxed">
          Coming soon - Travel adventures and destination guides
        </p>
      </div>
    </section>
  )
}

export default TravelSection
