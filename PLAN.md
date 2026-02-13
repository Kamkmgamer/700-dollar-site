# $700 Restaurant Website - "Enhanced Dining Experience"

## Project Overview

**Budget**: $700
**Target**: Mid-tier restaurant, competitive local market
**Development Time**: 16-24 hours
**Best For**: Restaurants wanting to stand out, frequent menu updates

---

## Technical Specifications

### Stack
- **Frontend**: Next.js 14+ (App Router)
- **Backend**: Next.js API Routes
- **Database**: None (CMS-based content)
- **CMS**: Sanity (free tier) or Strapi (self-hosted)
- **Hosting**: Vercel Pro
- **Forms**: Custom + Resend
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: React Context or Zustand (for UI state)

### File Structure
```
seven_hundred_dollar_site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Home
│   ├── menu/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── events/
│   │   └── page.tsx                # Events calendar
│   ├── contact/
│   │   └── page.tsx
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   ├── reservation/
│   │   │   └── route.ts
│   │   └── newsletter/
│   │       └── route.ts
│   └── globals.css
├── components/
│   ├── layout/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedDishes.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Events.tsx
│   │   └── Newsletter.tsx
│   ├── menu/
│   ├── events/
│   │   ├── EventCard.tsx
│   │   └── Calendar.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── ReservationForm.tsx
│   │   └── DateTimePicker.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx
│       ├── DatePicker.tsx
│       └── Notification.tsx
├── lib/
│   ├── sanity.ts                   # Sanity client
│   ├── email.ts
│   └── utils.ts
├── sanity/                         # Sanity schema (if using)
│   ├── schemas/
│   │   ├── menu.ts
│   │   ├── event.ts
│   │   └── testimonial.ts
│   └── sanity.config.ts
├── public/
│   └── images/
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## Pages

### 1. Home Page (`/`)
1. Hero - Parallax background with text animations
2. Featured Dishes - Animated carousel
3. About Preview - Animated on scroll
4. Events Preview - Upcoming 3 events
5. Testimonials - Animated slider
6. Newsletter Signup
7. Reservation CTA

### 2. Menu Page (`/menu`)
- CMS-powered menu items
- Category filtering with smooth transitions
- Search functionality
- Menu items with hover animations
- Dietary filter checkboxes

### 3. About Page (`/about`)
- Animated story sections
- Team grid with hover effects
- Interactive timeline
- Video embed (optional)
- Awards carousel

### 4. Gallery Page (`/gallery`)
- Masonry grid layout
- Category filters
- Lightbox with navigation
- Lazy loading with blur placeholder

### 5. Events Page (`/events`)
- Calendar view or list view toggle
- Event cards with:
  - Date, time, title
  - Description
  - Image
  - Price/ticket link
- Past events archive

### 6. Contact Page (`/contact`)
- Interactive date/time picker for reservations
- Real-time availability indicators (simulated)
- Contact form
- Map with custom styling
- Business hours with current status

---

## Design Specifications

### Brand Identity
```css
/* Extended Color Palette */
--primary: #8B2635;
--primary-50: #FDF2F4;
--primary-100: #FCE7EA;
--primary-200: #F8D0D7;
--primary-300: #F0A8B6;
--primary-400: #E4758C;
--primary-500: #D44A68;
--primary-600: #B83A4B;
--primary-700: #8B2635;
--primary-800: #6B1D29;
--primary-900: #4A141C;

/* Secondary Palette */
--secondary: #1E3A5F;
--secondary-50: #E8EDF3;
--secondary-100: #C5D1E1;
--secondary-200: #9FB3CC;
--secondary-300: #7995B7;
--secondary-400: #5C7CA7;
--secondary-500: #3F6397;
--secondary-600: #2D4C7B;
--secondary-700: #1E3A5F;
--secondary-800: #142842;
--secondary-900: #0A1521;

/* Accent Colors */
--accent-gold: #D4A574;
--accent-cream: #FFFBF5;
--accent-olive: #708238;
```

### Typography
```css
/* Font Stack */
--font-display: 'Playfair Display', serif;
--font-heading: 'DM Serif Display', serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Responsive Type Scale */
h1: clamp(2rem, 5vw, 4rem);
h2: clamp(1.5rem, 4vw, 3rem);
h3: clamp(1.25rem, 3vw, 2rem);
body: clamp(1rem, 2vw, 1.125rem);
```

### Design Tokens
```css
/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);

/* Transitions */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-slower: 500ms ease;
```

---

## Features

### Must Have
- [ ] 6 pages with navigation
- [ ] CMS integration for menu items
- [ ] Framer Motion animations
- [ ] Date/time reservation form
- [ ] Events calendar/list
- [ ] Newsletter signup with email integration
- [ ] Parallax scrolling effects
- [ ] Search/filter for menu
- [ ] Lightbox gallery
- [ ] Full SEO + schema markup
- [ ] Accessibility AA compliant

### Nice to Have
- [ ] Video hero section
- [ ] Dark mode toggle
- [ ] Print-friendly menu
- [ ] Social sharing buttons
- [ ] Instagram feed integration
- [ ] Review aggregation

### Must NOT Have
- [ ] NO user accounts
- [ ] NO real-time booking confirmation
- [ ] NO payment processing
- [ ] NO online ordering
- [ ] NO database (use CMS)

---

## CMS Integration (Sanity)

### Schema: Menu Item
```typescript
// sanity/schemas/menuItem.ts
export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'category', type: 'reference', to: [{ type: 'menuCategory' }] },
    { name: 'image', type: 'image', title: 'Image' },
    { 
      name: 'tags', 
      type: 'array', 
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Vegetarian', value: 'vegetarian' },
          { title: 'Vegan', value: 'vegan' },
          { title: 'Gluten-Free', value: 'gluten-free' },
          { title: 'Spicy', value: 'spicy' },
        ]
      }
    },
    { name: 'featured', type: 'boolean', title: 'Featured' },
    { name: 'order', type: 'number', title: 'Display Order' },
  ]
};
```

### Schema: Event
```typescript
// sanity/schemas/event.ts
export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'date', type: 'datetime', title: 'Date & Time' },
    { name: 'endTime', type: 'datetime', title: 'End Time' },
    { name: 'image', type: 'image', title: 'Event Image' },
    { name: 'price', type: 'number', title: 'Price (optional)' },
    { name: 'ticketUrl', type: 'url', title: 'Ticket URL (optional)' },
    { name: 'capacity', type: 'number', title: 'Capacity' },
  ]
};
```

### Schema: Testimonial
```typescript
// sanity/schemas/testimonial.ts
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'quote', type: 'text', title: 'Quote' },
    { name: 'author', type: 'string', title: 'Author Name' },
    { name: 'rating', type: 'number', title: 'Rating (1-5)' },
    { name: 'source', type: 'string', title: 'Source', options: {
      list: ['Google', 'Yelp', 'Facebook', 'Other']
    }},
    { name: 'date', type: 'date', title: 'Date' },
  ]
};
```

---

## Framer Motion Animations

### Page Transitions
```tsx
// components/layout/PageTransition.tsx
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export function PageTransition({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### Scroll Animations
```tsx
// components/ui/ScrollReveal.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

### Menu Item Hover
```tsx
// components/menu/MenuCard.tsx
<motion.div
  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
  transition={{ type: "spring", stiffness: 300 }}
>
  {/* Card content */}
</motion.div>
```

---

## Reservation Form

### DateTimePicker Component
```tsx
// components/contact/DateTimePicker.tsx
import { useState } from 'react';

interface DateTimePickerProps {
  onSelect: (date: string, time: string) => void;
}

export function DateTimePicker({ onSelect }: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<string>();
  const [selectedTime, setSelectedTime] = useState<string>();
  
  // Generate next 30 days
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });
  
  // Generate time slots (11am - 9pm, every 30 min)
  const timeSlots = Array.from({ length: 20 }, (_, i) => {
    const hour = 11 + Math.floor(i / 2);
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minute}`;
  });
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Date picker */}
      {/* Time picker */}
    </div>
  );
}
```

---

## Performance Requirements

### Target Metrics
- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 95+
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2s
- **Cumulative Layout Shift**: < 0.05
- **Time to Interactive**: < 3s

### Optimizations
- [ ] ISR (Incremental Static Regeneration) for menu/events
- [ ] Image optimization with blur placeholders
- [ ] Font subsetting
- [ ] Code splitting per page
- [ ] Lazy load Framer Motion
- [ ] Prefetch linked pages
- [ ] Optimize animation performance (will-change)

### Revalidation Strategy
```typescript
// app/menu/page.tsx
export const revalidate = 3600; // Revalidate every hour

async function getMenuItems() {
  const client = createClient(sanityConfig);
  return client.fetch(`*[_type == "menuItem"] | order(order asc)`);
}
```

---

## SEO Requirements

### Full Schema Implementation
```typescript
// Restaurant + Menu + Events
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": "https://bellaitalia.com/#restaurant",
      "name": "Bella Italia",
      // ... full restaurant schema
    },
    {
      "@type": "Menu",
      "@id": "https://bellaitalia.com/menu/#menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Appetizers",
          "hasMenuItem": [...]
        }
      ]
    },
    {
      "@type": "Event",
      // ... for special events
    }
  ]
};
```

---

## Newsletter Integration

### Implementation
```typescript
// app/api/newsletter/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();
  
  // Add to Resend audience
  await resend.contacts.create({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID!,
  });
  
  // Send welcome email
  await resend.emails.send({
    from: 'Bella Italia <newsletter@bellaitalia.com>',
    to: email,
    subject: 'Welcome to Bella Italia Newsletter!',
    html: `
      <h1>Welcome!</h1>
      <p>Thank you for subscribing to our newsletter.</p>
    `,
  });
  
  return Response.json({ success: true });
}
```

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Initialize Next.js project
- [ ] Set up Sanity CMS
- [ ] Configure Framer Motion
- [ ] Set up Resend for emails

### Phase 2: CMS
- [ ] Create Sanity schemas
- [ ] Populate initial content
- [ ] Build CMS queries

### Phase 3: Components
- [ ] Build animated UI components
- [ ] Build DateTimePicker
- [ ] Build EventCard
- [ ] Build Newsletter form

### Phase 4: Pages
- [ ] Build all 6 pages
- [ ] Implement page transitions
- [ ] Add scroll animations

### Phase 5: Integration
- [ ] Connect CMS to pages
- [ ] Set up email notifications
- [ ] Test all forms

### Phase 6: Polish
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Mobile testing

---

## Comparison to $500 Tier

| Feature | $500 | $700 |
|---------|------|------|
| Pages | 5 | 6 |
| CMS | None | Sanity |
| Animations | CSS | Framer Motion |
| Events | No | Calendar/list |
| Menu Updates | Hardcoded | CMS-powered |
| Newsletter | No | Yes |
| Parallax | No | Yes |
| Performance | ~85 | ~90 |

---

## Notes for Developers

This tier introduces:
- Headless CMS for content management
- Advanced animations library
- More complex interactions
- Content revalidation strategies

The key differentiator is the CMS integration, allowing non-developers to update menu items and events.
