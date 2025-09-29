# Aurelie Burrows - CV Webpage

A modern, responsive CV/portfolio website built with React, TypeScript, and Vite. This multi-page application showcases professional experience, technical skills, and career background across three main sections with smooth navigation.

## 🚀 Live Demo

[View Live Site] (https://aurelieburrows.vercel.app/)

## 📋 Features

- **Responsive Design**: Optimised for all device sizes using Tailwind CSS and DaisyUI components
- **Theme Toggle**: Switch between light (winter) and dark (forest) themes with persistent storage
- **Multi-Page Navigation**: Three distinct pages (Home, Skills & Experience, Career Background) with React Router
- **Collapsible Career Sections**: Expandable dropdown sections for detailed career background
- **Modular Architecture**: Reusable components and organised data structure
- **Performance Optimised**: Built with Vite for fast development and optimised builds

## 🛠️ Tech Stack

### Core Technologies

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind CSS
- **React Icons** - Comprehensive icon library

### Routing & Navigation

- **React Router v6** - Client-side routing with modern API

### Additional Tools

- **tw-animate-css** - Animation utilities

## 📁 Project Structure

```
src/
├── components/
│   ├── Footer.tsx              # Site footer
│   ├── Loading.tsx             # Loading spinner component
│   ├── Navbar.tsx              # Navigation with theme toggle
│   ├── NavLinks.tsx            # Navigation link components
│   └── SectionRenderer.tsx     # Reusable section display component
├── pages/
│   ├── CareerBackground.tsx    # Career history with collapsible sections
│   ├── Error.tsx               # 404 and error handling
│   ├── HomeLayout.tsx          # Main layout wrapper
│   ├── Landing.tsx             # Homepage with introduction
│   └── SkillsAndExperience.tsx # Technical skills and experience
├── assets/
│   └── aurelie.jpg             # Profile image
├── data/
│   ├── landingData.ts          # Data for the landing page
│   ├── skillsAndExperienceData.ts # Data for the skills & experience page
│   └── careerBackgroundData.ts # Data for the career background page
├── routes/
│   └── router.tsx              # Centralised React Router configuration
├── types.ts                    # TypeScript type definitions
├── index.css                   # Tailwind imports
├── App.tsx                     # App root that mounts RouterProvider
└── main.tsx                    # Application entry point

```

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd cv-webpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 💡 Key Features Breakdown

### Theme System

- Persistent theme storage using localStorage
- Smooth transitions between light and dark modes
- DaisyUI theme integration (winter/forest themes)

### Data Management

- Page-specific data stored in `src/data/`
  - `landingData.ts` for landing page content
  - `skillsAndExperienceData.ts` for skills & experience content
  - `careerBackgroundData.ts` for career background content
- TypeScript interfaces in `types.ts` ensure type safety
- Modular content organisation makes it easy to extend or update individual pages

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Adaptive layouts for different screen sizes
- Optimised typography and spacing

### Component Architecture

- **SectionRenderer**: Flexible component for displaying categorised lists
- **Collapsible Sections**: Interactive component for presenting career background details
- **Reusable UI Elements**: Shared components that enforce consistent design patterns across the app

## 📱 Pages Overview

### Home (Landing)

- Professional introduction and summary
- Quick overview of programming and soft skills
- Call-to-action buttons to detailed sections

### Skills & Experience

- Comprehensive technical skills organised by category
- Professional experience with detailed accomplishments
- Relevant certifications and training

### Career Background

- Detailed career history in collapsible format
- Project management and leadership experience
- Link to professional profile

## 🎨 Customisation

### Updating Content

1. Modify the relevant file in `src/data/`
   - `landingData.ts` for landing page content
   - `skillsAndExperienceData.ts` for skills & experience content
   - `careerBackgroundData.ts` for career background content
2. Add new sections by extending the existing data structures
3. Update TypeScript types in `src/types.ts` if needed

### Styling Changes

1. Customise themes in `src/index.css`
2. Modify component styles using Tailwind classes
3. Add new DaisyUI components as needed

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Register the route in `src/routes/router.tsx`
3. Add a navigation link in `src/components/NavLinks.tsx`

## 🚀 Deployment

This project is optimised for deployment on platforms like:

- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**

### Deploy to Vercel

```bash
npm run build
# Upload dist/ folder to Vercel or connect GitHub repository
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop dist/ folder to Netlify or use CLI
```

## 🧪 Development Notes

- Uses modern React patterns (hooks, functional components)
- Implements React Router v6 with data loading patterns
- Follows TypeScript best practices with strict typing
- Responsive design following mobile-first principles
- Performance optimised with code splitting and lazy loading

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Aurelie Burrows**

- LinkedIn: [View Profile](https://www.linkedin.com/in/atacquard1/?locale=en_US)
