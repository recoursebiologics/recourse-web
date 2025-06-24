# Recourse Biologics Website

Official website for Recourse Biologics - a biotechnology company advancing first-in-class immunotherapeutics for oncology.

## About Recourse Biologics

Recourse Biologics is committed to advancing new and improved therapies for oncology. Our lead molecule RB101 is a first-in-class immunotherapeutic that increases professional killer cell persistence, memory formation, and cytotoxicity without systemic toxicity.

## Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Getting Started

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd recourse-precision-web

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Technology Stack

This website is built with:

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

Manual deployment:
```sh
npm run deploy
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── main.tsx          # App entry point
```
