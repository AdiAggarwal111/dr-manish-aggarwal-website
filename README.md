# Dr. Manish Aggarwal — Interventional Cardiology & Structural Heart

Official website for Dr. Manish Aggarwal, Director of Interventional Cardiology & Structural Heart at Yashoda Medicity, Indirapuram, Delhi NCR.

## Technology Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (Full-stack SSR with React 19)
- **Routing:** [TanStack Router](https://tanstack.com/router) (Type-safe file-based routing)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with CSS Variables (`styles.css`)
- **State & Data Fetching:** [TanStack React Query](https://tanstack.com/query)
- **Icons:** [Lucide React](https://lucide.dev)
- **Tooling:** Vite 7, TypeScript 5.8, Prettier, ESLint

## Architecture & Project Structure

```
├── legacy/                  # Archived static prototypes
├── src/
│   ├── assets/              # Images, portraits, facility photos
│   ├── components/          # Modular UI components
│   │   ├── ui/              # Base design system primitives
│   │   ├── appointment-form.tsx  # Appointment booking section & form
│   │   ├── facility-section.tsx  # Cath lab & hospital presentation
│   │   ├── hero-section.tsx      # Editorial hero with portrait & stats
│   │   ├── procedure-card.tsx    # Standardized clinical procedure card
│   │   ├── reviews-section.tsx   # Verified patient stories & ratings
│   │   ├── site-footer.tsx       # Primary navigation footer & regional coverage
│   │   ├── site-header.tsx       # Floating glassmorphic navigation pill
│   │   ├── timeline-section.tsx  # Interactive career timeline & narrative
│   │   └── whatsapp-fab.tsx      # WhatsApp floating action button
│   ├── data/                # Strongly-typed clinical and facility content
│   │   ├── facility.ts      # Quaternary facility capabilities
│   │   ├── locations.ts     # Delhi NCR regional coverage & driving routes
│   │   ├── procedures.ts    # Interventional & structural heart procedures
│   │   ├── reviews.ts       # Verified patient testimonials
│   │   ├── site-config.ts   # Centralized clinic contact & metadata
│   │   └── timeline.ts      # Career appointments & fellowship history
│   ├── hooks/               # Custom React hooks (scroll reveal, responsive breakpoints)
│   ├── lib/                 # Core utilities and SSR error resilience
│   ├── routes/              # TanStack file-based application routes
│   │   ├── __root.tsx       # Root layout shell
│   │   ├── index.tsx        # Homepage
│   │   ├── about.tsx        # Director biography & career timeline
│   │   ├── contact.tsx      # Direct consultation booking
│   │   ├── procedures/      # Procedures directory & individual procedure pages
│   │   └── locations/       # Delhi NCR regional hospital pages
│   ├── router.tsx           # Router configuration & QueryClient initialization
│   ├── server.ts            # SSR entry point with error normalization
│   └── styles.css           # Tailwind v4 theme definitions and custom utilities
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 20+ (recommended v22+)
- npm, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```
