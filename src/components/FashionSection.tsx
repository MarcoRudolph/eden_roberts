import React from 'react'
import { useTranslation } from 'react-i18next'

const FashionSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="fashion" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          {t('navigation.fashion')}
        </h2>
        <p className="text-2xl text-gray-700 leading-relaxed">
          Coming soon - Fashion trends and style guides
        </p>
      </div>
    </section>
  )
}

export default FashionSection
