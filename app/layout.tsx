import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { site } from "@/lib/site";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const bebas = Bebas_Neue({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-bebas",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dejays-big-bite.vercel.app"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`
  },
  description:
    "Dejay's Big Bite food truck serves bold Southern flavors with an Italian twist in Birmingham, AL. Chef Ron Smith brings 27+ years of culinary expertise with signature wings, burgers, quesadillas, ribs, and SUPERLIT sauces. Catering available for events.",
  keywords: [
    "food truck Birmingham AL",
    "wings Birmingham",
    "catering Birmingham",
    "Dejay's Big Bite",
    "Chef Ron Smith",
    "Southern food",
    "Italian fusion",
    "food truck catering"
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "Bold Southern flavors with an Italian twist. Wings, burgers, ribs, and more from Birmingham's favorite food truck. Catering available!",
    url: "/",
    siteName: site.name,
    images: [
      { 
        url: "/og.jpg", 
        width: 1200, 
        height: 630, 
        alt: `${site.name} - The Sauce is SUPERLIT` 
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: "Bold Southern flavors with an Italian twist. Birmingham's favorite food truck!",
    images: ["/og.jpg"]
  },
  icons: { 
    icon: "/brand-logo.png",
    apple: "/brand-logo.png"
  }
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: site.name,
              description: "Food truck serving bold Southern flavors with Italian inspiration",
              telephone: site.phone,
              email: site.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Birmingham",
                addressRegion: "AL",
                addressCountry: "US"
              },
              servesCuisine: ["Southern", "American", "Barbecue", "Italian Fusion"],
              priceRange: "$$",
              url: "https://dejays-big-bite.vercel.app",
              image: "https://dejays-big-bite.vercel.app/og.jpg"
            })
          }}
        />
      </body>
    </html>
  );
}
