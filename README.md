# Faidaa - Membership-Only Flash Drops

A modern React + TypeScript + Tailwind CSS implementation of the Faidaa landing page.

## Project Structure

```
src/
  components/
    ui/                    # Reusable UI primitives
      Button.tsx           # Primary/secondary button variants
      Card.tsx             # Container with dark/light/green variants
      Badge.tsx            # Live/category/default badge variants
      PriceDisplay.tsx     # Price with strikethrough original price
      IconButton.tsx       # Circular icon buttons
      Divider.tsx          # Horizontal/vertical dividers
    sections/              # Page section components
      Header.tsx           # Top navigation with logo and Join button
      NextDropHero.tsx     # Main hero with countdown timer
      MembershipUnlockedCard.tsx  # Benefits list card
      LastSoldCard.tsx     # Last sold product display
      ProductCard.tsx      # Reusable product card component
      UpcomingDropsGrid.tsx # Grid of upcoming drop products
      TestimonialCard.tsx  # User testimonial display
      LimitedSeatsCard.tsx # Membership slots progress card
      Footer.tsx           # Footer with links and icons
  pages/
    Home.tsx               # Main page composing all sections
  utils/
    cn.ts                  # Class name utility (clsx wrapper)
```

## Reusable Components

### UI Primitives (Design System)
All components in `src/components/ui/` are reusable design system primitives:

- **Button**: Used in Header, NextDropHero, and throughout the app
- **Card**: Used in all section components (NextDropHero, MembershipUnlockedCard, LastSoldCard, ProductCard, TestimonialCard, LimitedSeatsCard)
- **Badge**: Used in NextDropHero (Live badge) and ProductCard (Category badge)
- **PriceDisplay**: Used in LastSoldCard and can be reused in ProductCard
- **IconButton**: Used in ProductCard (alert bell) and Footer (share, notifications)

### Section Components
- **ProductCard**: Reused 4 times in UpcomingDropsGrid
- All section components are composed in the Home page

## Design System

### Colors
- `faidaa-green`: #4ade80 (light green accent)
- `faidaa-dark`: #1a1f2e (dark blue-grey background)
- `faidaa-light`: #f3f4f6 (light grey background)

### Spacing
- Consistent gap: `22px` (gap-[22px])
- Card padding: `28px` (p-[28px])
- Border radius: `36px` (rounded-[36px]) for main cards

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **clsx** - Conditional class names
