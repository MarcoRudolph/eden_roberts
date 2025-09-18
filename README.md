# Eden Roberts - Social Media Influencer Page

A modern, responsive personal website for social media influencer Eden Roberts, built with React, TypeScript, Tailwind CSS, and Shadcn UI components.

## ✨ Features

- **Modern Design**: Beautiful gradient backgrounds and glass-morphism effects
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Social Media Integration**: Direct links to all social platforms
- **Contact Form**: Professional contact section for business inquiries
- **Content Showcase**: Featured posts and content categories
- **Performance Optimized**: Built with Vite for fast development and building

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Icons**: Lucide React
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── avatar.tsx
│   ├── HeroSection.tsx     # Hero section with profile
│   ├── AboutSection.tsx    # About me section
│   ├── SocialLinks.tsx     # Social media platforms
│   ├── ContentShowcase.tsx # Featured content
│   ├── ContactSection.tsx  # Contact form & info
│   └── InfluencerPage.tsx  # Main page component
├── lib/
│   └── utils.ts            # Utility functions
├── App.tsx                 # Main app component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### 1. Clone the repository

```bash
git clone <repository-url>
cd eden-roberts-influencer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 🎨 Customization

### Colors & Themes

The app uses CSS custom properties for easy theming. Main colors can be modified in `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other colors */
}
```

### Content Updates

- **Profile Information**: Update personal details in `HeroSection.tsx`
- **Social Media Links**: Modify platform URLs in `SocialLinks.tsx`
- **About Section**: Edit personal story in `AboutSection.tsx`
- **Contact Information**: Update contact details in `ContactSection.tsx`

### Styling

The app uses Tailwind CSS with custom utility classes:
- `.gradient-text`: Purple to pink gradient text
- `.glass-effect`: Glass-morphism background effect
- `.hover-lift`: Subtle lift animation on hover

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Configure custom domain if needed

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint configuration included
- Prettier formatting (recommended)
- Component naming: PascalCase
- File naming: PascalCase for components, camelCase for utilities

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
