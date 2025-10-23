# Dejay's Big Bite - Food Truck Website

A modern, mobile-first website for Dejay's Big Bite food truck serving bold Southern flavors with Italian inspiration in Birmingham, AL.

## Features

- 🔥 Modern, bold design matching brand aesthetic (black/cream/red/orange)
- 📱 Fully responsive and mobile-optimized
- 🍗 Complete menu with wings, burgers, quesadillas, sandwiches, and more
- 🎉 Dedicated catering page for event bookings
- 📧 Contact form with serverless API
- 🔍 SEO optimized with metadata and structured data
- ⚡ Built with Next.js 14 + TypeScript + Tailwind CSS

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Images
Place these images in the `public/` folder:
- `brand-logo.png` - Your elephant chef logo
- `hero-wings.jpg` - Fire wings hero image
- `food-collage.jpg` - Food collage for about section
- `og.jpg` - Social share image (1200x630px)

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

### 4. Customize Content

**Update site information** in `lib/site.ts`:
- Add your social media links
- Verify contact info is correct

**Edit menu items** in `lib/data/menu.ts`:
- Update prices
- Add/remove items
- Modify descriptions

### 5. Deploy to Vercel

```bash
# Initialize git
git init
git add -A
git commit -m "Initial commit"
git branch -M main

# Push to GitHub
git remote add origin https://github.com/yourusername/dejays-big-bite.git
git push -u origin main
```

Then:
1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy! (Vercel auto-detects Next.js)

## Optional: Email Integration

To enable contact form emails:

1. Sign up at https://resend.com
2. Get your API key
3. Add to Vercel environment variables: `RESEND_API_KEY=your_key_here`
4. Uncomment the Resend code in `app/api/contact/route.ts`
5. Update the email addresses

## Project Structure

```
├── app/
│   ├── api/contact/        # Contact form API
│   ├── components/         # Reusable components
│   ├── about/             # About page
│   ├── catering/          # Catering page
│   ├── contact/           # Contact page
│   ├── menu/              # Menu page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── lib/
│   ├── data/menu.ts       # Menu data
│   ├── site.ts            # Site configuration
│   └── utils.ts           # Utility functions
├── public/                # Static assets
└── [config files]
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Bebas Neue + Inter (Google Fonts)
- **Deployment:** Vercel

## Support

For questions about the website, contact the developer who created it for you.
For business inquiries about Dejay's Big Bite:
- Phone: 205-332-5115
- Email: Chefronaldsmith12@gmail.com

## License

© 2025 Dejay's Big Bite. All rights reserved.
