/**
 * Design Token Utilities
 * Provides easy access to design tokens from tokens.json
 * These tokens are automatically available via Tailwind CSS 4 @theme directive
 */

// Import tokens from your JSON file
import tokens from '../style/tokens.json'

// Export all tokens for direct access
export { tokens }

// Helper functions for common token access patterns
export const getColor = (colorPath: string) => {
  const path = colorPath.split('.')
  let value: any = tokens.props.color
  
  for (const key of path) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      console.warn(`Color path "${colorPath}" not found in tokens`)
      return undefined
    }
  }
  
  return value?.value || value
}

export const getSpacing = (size: keyof typeof tokens.props.spacing) => {
  return tokens.props.spacing[size].value
}

export const getBorderRadius = (size: keyof typeof tokens.props.radius) => {
  return tokens.props.radius[size].value
}

export const getShadow = (size: keyof typeof tokens.props.shadow) => {
  return tokens.props.shadow[size].value
}

export const getTypography = {
  fontFamily: () => tokens.props.typography.fontFamily.value,
  fontSize: (size: keyof typeof tokens.props.typography.size) => 
    tokens.props.typography.size[size].value,
  fontWeight: (weight: keyof typeof tokens.props.typography.weights) => 
    tokens.props.typography.weights[weight].value,
  lineHeight: (height: keyof typeof tokens.props.typography.lineHeight) => 
    tokens.props.typography.lineHeight[height].value,
  letterSpacing: (spacing: keyof typeof tokens.props.typography.tracking) => 
    tokens.props.typography.tracking[spacing].value,
}

export const getLayout = {
  containerMaxWidth: () => tokens.props.layout.containerMaxWidth.value,
  sectionPadding: (mobile: boolean = false) => 
    mobile ? tokens.props.layout.sectionPaddingMobileY.value : tokens.props.layout.sectionPaddingDesktopY.value,
  gridGap: () => tokens.props.layout.gridGap.value,
  cardPadding: () => tokens.props.layout.cardPadding.value,
  cardRadius: () => tokens.props.layout.cardRadius.value,
}

export const getMotion = {
  duration: (speed: keyof typeof tokens.props.motion.duration) => 
    tokens.props.motion.duration[speed].value,
  easing: (type: keyof typeof tokens.props.motion.easing) => 
    tokens.props.motion.easing[type].value,
}

// CSS-in-JS helpers for inline styles
export const createStyles = {
  color: (colorPath: string) => ({ color: getColor(colorPath) }),
  backgroundColor: (colorPath: string) => ({ backgroundColor: getColor(colorPath) }),
  borderColor: (colorPath: string) => ({ borderColor: getColor(colorPath) }),
  spacing: (size: keyof typeof tokens.props.spacing) => ({ 
    padding: getSpacing(size),
    margin: getSpacing(size)
  }),
  borderRadius: (size: keyof typeof tokens.props.radius) => ({ 
    borderRadius: getBorderRadius(size) 
  }),
  shadow: (size: keyof typeof tokens.props.shadow) => ({ 
    boxShadow: getShadow(size) 
  }),
  typography: {
    fontFamily: () => ({ 
      fontFamily: getTypography.fontFamily() 
    }),
    fontSize: (size: keyof typeof tokens.props.typography.size) => ({ 
      fontSize: getTypography.fontSize(size) 
    }),
    fontWeight: (weight: keyof typeof tokens.props.typography.weights) => ({ 
      fontWeight: getTypography.fontWeight(weight) 
    }),
    lineHeight: (height: keyof typeof tokens.props.typography.lineHeight) => ({ 
      lineHeight: getTypography.lineHeight(height) 
    }),
  },
  motion: {
    transition: (speed: keyof typeof tokens.props.motion.duration) => ({
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
  createStyles,
}
