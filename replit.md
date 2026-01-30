# Сайт Клуба (Managers Club Website)

## Overview
A React-based website for "Клуб менеджеров" (Managers Club) - a business community for entrepreneurs in the automotive industry. The site includes information about courses, masterclasses, and a profit management methodology.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Animation**: Motion (Framer Motion)

## Project Structure
```
├── src/
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # Entry point
│   ├── index.css         # Global styles with Tailwind
│   ├── components/       # React components
│   │   ├── sections/     # Page sections
│   │   ├── data/         # Content data files
│   │   └── figma/        # Figma-exported components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   └── utils/            # Helper utilities
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Development
- **Dev Server**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Outputs to `build/` directory

## Deployment
- Configured for static deployment
- Build command: `npm run build`
- Public directory: `build`
