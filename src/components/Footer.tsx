import React from 'react'
import { useTranslation } from 'react-i18next'

interface FooterProps {
  onNavigate?: (page: string) => void
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation()

  return (
    <footer className="py-8 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end space-x-6">
          <button
            onClick={() => onNavigate?.('privacy')}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {t('footer.privacy')}
          </button>
          <button
            onClick={() => onNavigate?.('impressum')}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {t('footer.terms')}
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
