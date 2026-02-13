import type { Metadata } from "next";
import { Playfair_Display, DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bella Italia | Authentic Italian Restaurant",
    template: "%s | Bella Italia",
  },
  description: "Experience authentic Italian cuisine at Bella Italia. Fresh handmade pasta, wood-fired pizza, and classic Italian dishes in an elegant atmosphere.",
  keywords: ["Italian restaurant", "pasta", "pizza", "fine dining", "events"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bella Italia",
    title: "Bella Italia | Authentic Italian Restaurant",
    description: "Experience authentic Italian cuisine at Bella Italia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSerif.variable} ${outfit.variable} font-body antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
