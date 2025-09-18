import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { key: 'home', href: '#home' },
    { key: 'outfits', href: '#outfits' },
    { key: 'fashion', href: '#fashion' },
    { key: 'travel', href: '#travel' },
    { key: 'about', href: '#about' }
  ]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className="py-8 px-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-handwriting text-gray-800 font-semibold leading-tight">
            Eden Roberts
          </h1>
        </div>

        {/* Navigation Items and Language Picker */}
        <div className="flex items-center space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-gray-400 hover:text-gray-600 font-light transition-colors duration-200 text-sm tracking-wide"
            >
              {t(`navigation.${item.key}`)}
            </a>
          ))}
          
          {/* Language Picker */}
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => changeLanguage('de')}
              className={`text-xs font-light transition-colors duration-200 ${
                i18n.language === 'de' 
                  ? 'text-gray-800' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              DE
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => changeLanguage('en')}
              className={`text-xs font-light transition-colors duration-200 ${
                i18n.language === 'en' 
                  ? 'text-gray-800' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between w-full">
        {/* Mobile Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl sm:text-2xl font-handwriting text-gray-800 font-semibold leading-tight">
            Eden Roberts
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-white py-4 min-w-[200px] shadow-lg">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block px-6 py-3 text-gray-400 hover:text-gray-600 font-light transition-colors duration-200 text-sm tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {t(`navigation.${item.key}`)}
              </a>
            ))}
            
            {/* Mobile Language Picker */}
            <div className="flex items-center justify-center space-x-4 px-6 py-3 border-t border-gray-200 mt-2">
              <button
                onClick={() => changeLanguage('de')}
                className={`text-xs font-light transition-colors duration-200 ${
                  i18n.language === 'de' 
                    ? 'text-gray-800' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                DE
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`text-xs font-light transition-colors duration-200 ${
                  i18n.language === 'en' 
                    ? 'text-gray-800' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
