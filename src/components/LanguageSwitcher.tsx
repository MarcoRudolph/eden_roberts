import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="fixed top-4 right-4 z-40">
      <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border">
        <Button
          variant={i18n.language === 'de' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => changeLanguage('de')}
          className={`rounded-full px-4 py-2 ${
            i18n.language === 'de' 
              ? 'bg-gray-900 text-white' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          DE
        </Button>
        <Button
          variant={i18n.language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => changeLanguage('en')}
          className={`rounded-full px-4 py-2 ${
            i18n.language === 'en' 
              ? 'bg-gray-900 text-white' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </Button>
      </div>
    </div>
  )
}

export default LanguageSwitcher
