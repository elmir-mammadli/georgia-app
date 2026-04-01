# Georgia Marketing Website

Next.js + Strapi CMS marketing website for Georgia soft-skills training platform.

## Project Structure

```
georgia-react/
  frontend/    → Next.js 16 (App Router, TypeScript, Tailwind CSS)
  backend/     → Strapi 5 (Headless CMS)
```

## Prerequisites

- Node.js >= 20.0.0
- npm >= 6.0.0

## Getting Started

### 1. Backend (Strapi)

```bash
cd backend
npm install
npm run develop
```

Strapi will start at `http://localhost:1337`. On first run:
- Create an admin account
- Go to Settings → API Tokens and create a full-access token
- Copy the token to `frontend/.env.local`

### 2. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Next.js will start at `http://localhost:3000`.

### 3. Create Content

In Strapi admin (`http://localhost:1337/admin`):

1. Create a **Page** with slug `home`
2. Add sections using the dynamic zone:
   - Hero
   - Stats Banner
   - Features
   - Steps
   - Video
   - Case Studies
   - FAQ
   - CTA (with form enabled)
3. Fill in the SEO component
4. Publish the page

## Environment Variables

### Frontend (`frontend/.env.local`)

| Variable | Description | Default |
|----------|-------------|---------|
| `STRAPI_URL` | Strapi API URL (server-side) | `http://localhost:1337` |
| `STRAPI_API_TOKEN` | Strapi API token | — |
| `NEXT_PUBLIC_STRAPI_URL` | Strapi URL (for image URLs) | `http://localhost:1337` |

### Backend (`backend/.env`)

| Variable | Description |
|----------|-------------|
| `HOST` | Server host |
| `PORT` | Server port |
| `APP_KEYS` | Application keys |
| `API_TOKEN_SALT` | API token salt |
| `ADMIN_JWT_SECRET` | Admin JWT secret |

## Architecture

- **All page content** comes from Strapi via dynamic zones (except Header and Footer)
- **Server Components** by default, Client Components only for interactive elements (accordion, forms, video player, mobile nav)
- **ISR** with 60-second revalidation
- **Form submissions** go through Next.js API route → Strapi collection

## Content Types

### Page
- `title` (string)
- `slug` (UID)
- `seo` (component: shared.seo)
- `sections` (dynamic zone)

### Available Sections
- Hero, Stats Banner, Features, Steps, Video, Case Studies, FAQ, CTA
# georgia-app
