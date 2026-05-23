import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.swaleh.app"),

  title: {
    default:
      "Developer Swaleh | Full-Stack Website Developer",
    template: "%s | Developer Swaleh",
  },

  description:
    "Swaleh Mohamad is a full-stack website developer based in Kenya, specializing in Next.js, TypeScript, Supabase, PostgreSQL, backend systems, and scalable frontend architecture.",

  keywords: [
    "Developer Swaleh",
    "Swaleh Mohamad",
    "Swaleh Mohamad",
    "Kenya Website Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Supabase Developer",
    "PostgreSQL Developer",
    "Frontend Developer Kenya",
    "Backend Developer Kenya",
    "Web Developer Kenya",
    "React Developer",
    "Portfolio Website",
    "Software Engineer Kenya",
    "Modern Web Developer",
    "Civil Engineer Student",
  ],

  authors: [
    {
      name: "Swaleh Mohamad",
      url: "https://portfolio.swaleh.app",
    },
  ],

  creator: "Swaleh Mohamad",

  publisher: "Developer Swaleh",

  category: "technology",

  applicationName: "Developer Swaleh Portfolio",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://portfolio.swaleh.app",
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://portfolio.swaleh.app",

    siteName: "Developer Swaleh",

    title:
      "Developer Swaleh | Full-Stack Website Developer",

    description:
      "Modern full-stack website developer specializing in scalable frontend systems, backend architecture, SQL databases, and high-performance web applications.",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Developer Swaleh Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Developer Swaleh | Full-Stack Website Developer",

    description:
      "Portfolio of Swaleh Mohamad, a modern full-stack website developer building scalable digital experiences.",

    creator: "@developerswaleh",

    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "96x96",
        type: "image/x-icon",
      },
    ],

    shortcut: ["/favicon.ico"],

    apple: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Swaleh Mohamad",
  url: "https://portfolio.swaleh.app",
  description:
    "Modern full-stack portfolio website of Swaleh Mohamad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Noise Texture */}
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.015] [background-image:url('/noise.png')]" />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Provider */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={12}
          toastOptions={{
            duration: 5000,

            style: {
              background: "#0a0a0a",
              color: "#fafafa",
              border: "1px solid #1f1f1f",
              borderRadius: "16px",
              padding: "16px",
              fontSize: "14px",
            },

            success: {
              iconTheme: {
                primary: "#3b82f6",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#ffffff",
              },
            },
          }}
        />

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
