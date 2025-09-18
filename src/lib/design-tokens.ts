/**
 * Design Token Utilities
 * Provides easy access to design tokens and helper functions for components
 */

import { tokens } from '../style/tokens'

// Export all tokens for direct access
export { tokens }

// Helper functions for common token access patterns
export const getColor = (colorPath: string) => {
  const path = colorPath.split('.')
  let value: any = tokens.colors
  
  for (const key of path) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      console.warn(`Color path "${colorPath}" not found in tokens`)
      return undefined
    }
  }
  
  return value
}

export const getSpacing = (size: keyof typeof tokens.spacing) => {
  return tokens.spacing[size]
}

export const getBorderRadius = (size: keyof typeof tokens.borderRadius) => {
  return tokens.borderRadius[size]
}

export const getShadow = (size: keyof typeof tokens.shadows) => {
  return tokens.shadows[size]
}

export const getTypography = {
  fontFamily: (variant: keyof typeof tokens.typography.fontFamily) => 
    tokens.typography.fontFamily[variant],
  fontSize: (size: keyof typeof tokens.typography.fontSize) => 
    tokens.typography.fontSize[size],
  fontWeight: (weight: keyof typeof tokens.typography.fontWeight) => 
    tokens.typography.fontWeight[weight],
  lineHeight: (height: keyof typeof tokens.typography.lineHeight) => 
    tokens.typography.lineHeight[height],
  letterSpacing: (spacing: keyof typeof tokens.typography.letterSpacing) => 
    tokens.typography.letterSpacing[spacing],
}

export const getLayout = {
  containerMaxWidth: () => tokens.layout.containerMaxWidth,
  sectionPadding: (mobile: boolean = false) => 
    mobile ? tokens.layout.sectionPaddingMobileY : tokens.layout.sectionPaddingDesktopY,
  gridGap: () => tokens.layout.gridGap,
  cardPadding: () => tokens.layout.cardPadding,
  cardRadius: () => tokens.layout.cardRadius,
}

export const getMotion = {
  duration: (speed: keyof typeof tokens.motion.duration) => 
    tokens.motion.duration[speed],
  easing: (type: keyof typeof tokens.motion.easing) => 
    tokens.motion.easing[type],
}

export const getGradient = (type: keyof typeof tokens.gradients) => {
  return tokens.gradients[type]
}

// CSS-in-JS helpers for inline styles
export const createStyles = {
  color: (colorPath: string) => ({ color: getColor(colorPath) }),
  backgroundColor: (colorPath: string) => ({ backgroundColor: getColor(colorPath) }),
  borderColor: (colorPath: string) => ({ borderColor: getColor(colorPath) }),
  spacing: (size: keyof typeof tokens.spacing) => ({ 
    padding: getSpacing(size),
    margin: getSpacing(size)
  }),
  borderRadius: (size: keyof typeof tokens.borderRadius) => ({ 
    borderRadius: getBorderRadius(size) 
  }),
  shadow: (size: keyof typeof tokens.shadows) => ({ 
    boxShadow: getShadow(size) 
  }),
  typography: {
    fontFamily: (variant: keyof typeof tokens.typography.fontFamily) => ({ 
      fontFamily: getTypography.fontFamily(variant).join(', ') 
    }),
    fontSize: (size: keyof typeof tokens.typography.fontSize) => ({ 
      fontSize: getTypography.fontSize(size) 
    }),
    fontWeight: (weight: keyof typeof tokens.typography.fontWeight) => ({ 
      fontWeight: getTypography.fontWeight(weight) 
    }),
    lineHeight: (height: keyof typeof tokens.typography.lineHeight) => ({ 
      lineHeight: getTypography.lineHeight(height) 
    }),
  },
  motion: {
    transition: (speed: keyof typeof tokens.motion.duration) => ({
      transitionDuration: getMotion.duration(speed),
      transitionTimingFunction: getMotion.easing('standard'),
    }),
  },
}

// Default export for easy importing
export default {
  tokens,
  getColor,
  getSpacing,
  getBorderRadius,
  getShadow,
  getTypography,
  getLayout,
  getMotion,
  getGradient,
  createStyles,
}
