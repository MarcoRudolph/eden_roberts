import React from 'react'
import { useTranslation } from 'react-i18next'
import { Instagram, Music, Heart } from 'lucide-react'

const SocialLinks: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/eden_roberts_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-400 transition-colors duration-200">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">{t('social.instagram.name')}</h3>
              <p className="text-sm text-gray-500">@eden_roberts_official</p>
            </div>
          </a>

          {/* TikTok Link */}
          <a
            href="https://www.tiktok.com/discover/eden-roberts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-400 transition-colors duration-200">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">{t('social.tiktok.name')}</h3>
              <p className="text-sm text-gray-500">@eden-roberts</p>
            </div>
          </a>

          {/* Fanvue Link */}
          <a
            href="https://www.fanvue.com/edenroberts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-400 transition-colors duration-200">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Fanvue</h3>
              <p className="text-sm text-gray-500">@edenroberts</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SocialLinks
