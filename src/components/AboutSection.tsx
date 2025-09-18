import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            {t('about.title')}
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl">
            {t('about.description1')}
          </p>
          <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mt-8">
            {t('about.description2')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
