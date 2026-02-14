# AENEXZ Website Redesign

A modern, interactive educational platform redesigned with premium UI/UX, 3D effects, and scroll-based animations.

## 🎨 Design Features

### Modern Dark Theme
- Deep dark background (#0A0A0F) with premium glass-morphism effects
- Gradient accents (Blue → Purple) throughout the interface
- Custom color palette with proper contrast ratios
- Inter font family for modern typography

### Advanced Animations
- **3D Hero Background**: WebGL canvas with ambient spheres
- **Scroll Reveals**: GSAP-powered section entrances
- **Smooth Scrolling**: Lenis integration with reduced-motion support
- **Micro-interactions**: Hover effects, scale transforms, and glow effects
- **Framer Motion**: Button animations and stagger effects

### Premium Components
- **Navigation**: Scroll-responsive nav with glass-morphism blur effect
- **Hero Section**: Full-screen with gradient text, floating orbs, and CTAs
- **KPI Stats**: Animated counters with color-coded metrics
- **Program Cards**: Interactive cards with gradients and hover effects
- **Job Guarantee**: Glass-card layout with benefits grid
- **Category Grid**: Icon-based navigation with scale animations
- **Mentor Cards**: Profile cards with company logos
- **Partner Logos**: Interactive partner grid
- **Footer**: Multi-column layout with brand presence

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 (CSS-first setup)
- **Animations**: 
  - Framer Motion (component animations)
  - GSAP + ScrollTrigger (scroll-based reveals)
  - Lenis (smooth scroll)
- **3D**: React Three Fiber + Three.js
- **Analytics**: Vercel Analytics

## 📦 Getting Started

```powershell
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎯 Key Sections

1. **Hero**: Full-screen gradient hero with 3D background
2. **KPI Stats**: 80+ courses, 50+ instructors, 100% certification, 9k+ learners
3. **Programs**: Full Stack, AI/ML, Cloud Architecture
4. **Job Guarantee**: 100% placement program details
5. **Categories**: Browse by Technology, Business, Design, Data Science, etc.
6. **Mentors**: Industry experts from Google, Microsoft, Amazon, Meta
7. **Partners**: Certification partners and hiring companies

## 🎨 Design System

### Colors
```
Primary: #0A0A0F (darkest), #1A1A2F (dark)
Accent: #4F46E5 (blue), #7C3AED (purple), #06B6D4 (cyan)
Text: #F9FAFB (primary), #9CA3AF (tertiary)
```

### Typography
- Font: Inter (300-900 weights)
- Display: 48-96px (responsive)
- Body: 16-20px

## 📱 Responsive Design

- Mobile: 0-767px (stacked layout)
- Tablet: 768-1023px (2-column grid)
- Desktop: 1024px+ (multi-column grid)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Reduced motion support (`prefers-reduced-motion`)

## 🚀 Deployment

### Vercel (Recommended)
```powershell
npm install -g vercel
vercel login
vercel
```

## 📝 Project Documentation

- Full SOPs: `docs/` folder
- Step-by-step guide: `steps to create target website/`
- Design specs: `Detailed_files/`

## 📄 License

© 2026 AENEXZ TECH PRIVATE LIMITED

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
