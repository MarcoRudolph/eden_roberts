import React from 'react'

interface ImageCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  subtitle: string
  className?: string
  variant?: 'default' | 'elegant'
  showCategory?: boolean
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  className = '',
  variant = 'default',
  showCategory = false
}) => {
  const isElegant = variant === 'elegant'
  
  return (
    <div className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* White Overlay at Bottom */}
        <div className={`absolute bottom-0 left-0 right-0 ${
          isElegant 
            ? 'bg-white/98 backdrop-blur-sm' 
            : 'bg-white/95 backdrop-blur-sm'
        } p-4 md:p-6`}>
          <div className="space-y-1">
            {showCategory && (
              <p className={`${
                isElegant 
                  ? 'text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider' 
                  : 'text-xs font-medium text-gray-500 uppercase tracking-wider'
              }`}>
                {subtitle}
              </p>
            )}
            <h3 className={`${
              isElegant 
                ? 'text-xl md:text-2xl font-bold text-gray-900' 
                : 'text-lg md:text-xl font-bold text-gray-900'
            } leading-tight`}>
              {title}
            </h3>
            {!showCategory && (
              <p className={`${
                isElegant 
                  ? 'text-sm md:text-base font-medium text-gray-700' 
                  : 'text-sm md:text-base text-gray-600'
              } leading-relaxed tracking-wide`}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
