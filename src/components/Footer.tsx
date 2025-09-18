import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <footer className="py-8 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end space-x-6">
          <a
            href="#privacy"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {t('footer.privacy')}
          </a>
          <a
            href="#terms"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {t('footer.terms')}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
