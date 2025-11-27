# Neo-Brutalism Puppy Care Site

A bold, edgy puppy care website built with React, TypeScript, and Supabase featuring Neo-Brutalism design aesthetics.

## Features

- **Hero Section**: Eye-catching introduction with bold typography
- **Care Guides**: Comprehensive puppy care information
- **Breed Selector**: Interactive breed exploration
- **Training Section**: Essential training tips and techniques
- **Health Tips**: Important health and wellness information

## Design System

- **Colors**: #FF005C (Pink), #00F0FF (Cyan), #000000 (Black), #FFFFFF (White)
- **Typography**: IBM Plex Mono (monospaced)
- **Style**: Thick borders (3-4px), hard shadows, asymmetrical layouts
- **Aesthetic**: Raw, intentionally unfinished appearance

## Tech Stack

- React 18
- TypeScript
- Vite
- Supabase (Authentication)
- Lucide React (Icons)

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd puppy-care-brutalist
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Add your Supabase credentials to `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
puppy-care-brutalist/
├── src/
│   ├── components/     # React components
│   ├── lib/           # Supabase client
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
└── package.json       # Dependencies
```

## Contributing

This project follows Neo-Brutalism design principles. When contributing:
- Maintain flat colors (no gradients)
- Use thick borders (3-4px)
- Implement hard shadows
- Keep asymmetrical layouts
- Use monospaced fonts

## License

MIT

---

Built with ChatAndBuild
