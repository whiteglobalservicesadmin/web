# White Global Services ApS

Denmark-based company delivering transport services, import-export consultancy, cleaning services, and international trading solutions — serving Europe and Asia.

**Live site:** [whiteglobalservices.com](https://whiteglobalservices.com)

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix primitives)
- **Routing:** React Router (SPA)
- **Deployment:** Render (static site)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```sh
# Clone the repository
git clone https://github.com/white-global-services/global-connect-studio-main.git
cd global-connect-studio-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server runs at `http://localhost:8080` by default.

### Available Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start Vite dev server                |
| `npm run build`  | Production build to `./dist`         |
| `npm run preview`| Preview the production build locally |
| `npm run lint`   | Run ESLint                           |

## Project Structure

```
├── public/            # Static assets (images, favicon, robots.txt)
├── src/
│   ├── components/    # Reusable UI components
│   │   └── ui/        # shadcn/ui primitives
│   ├── contexts/      # React context providers
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and translations
│   └── pages/         # Route-level page components
├── index.html         # Vite entry HTML
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind configuration
└── render.yaml        # Render deployment config
```

## Deployment

The site is deployed as a static site on [Render](https://render.com). Push to `main` to trigger a deploy. Configuration is in `render.yaml`.

## License

All rights reserved — White Global Services ApS.
