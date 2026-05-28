import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import ServiceWorkerProvider from "@/components/ServiceWorkerProvider";

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
    default: "Developer Swaleh | Full-Stack Website Developer",
    template: "%s | Developer Swaleh",
  },

  description:
    "Swaleh Mohamad Swalehe is a full-stack website developer based in Mombasa, Kenya, specializing in Next.js, TypeScript, Supabase, PostgreSQL, backend systems, and scalable frontend architecture.",

  keywords: [
    "Developer Swaleh",
    "Swaleh Mohamad Swalehe",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Supabase Developer",
    "PostgreSQL Developer",
    "Frontend Developer Kenya",
    "Backend Developer Kenya",
    "Web Developer Mombasa",
    "React Developer",
    "Portfolio Website",
    "Software Engineer Kenya",
    "Modern Web Developer",
  ],

  authors: [
    {
      name: "Swaleh Mohamad Swalehe",
      url: "https://portfolio.swaleh.app",
    },
  ],

  creator: "Swaleh Mohamad Swalehe",

  publisher: "Swaleh Mohamad",

  applicationName: "Swaleh Mohamad Portfolio",

  category: "technology",

  referrer: "origin-when-cross-origin",

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://portfolio.swaleh.app",
  },

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

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://portfolio.swaleh.app",

    siteName: "Swaleh Mohamad",

    title: "Developer Swaleh | Full-Stack Website Developer",

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

    title: "Developer Swaleh | Full-Stack Website Developer",

    description:
      "Portfolio of Swaleh Mohamad Swalehe, a modern full-stack website developer building scalable digital experiences.",

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
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: ["/favicon.ico"],

    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
  "@type": "Person",

  name: "Swaleh Mohamad Swaleh",

  url: "https://portfolio.swaleh.app",

  image: "https://portfolio.swaleh.app/profile.webp",

  jobTitle: "Full-Stack Website Developer",

  description:
    "Full-stack website developer specializing in Next.js, TypeScript, Supabase, PostgreSQL, scalable frontend systems, backend architecture, and modern web applications.",

  sameAs: ["https://github.com/swachizen/developer-swaleh-portfolio"],

  worksFor: {
    "@type": "Organization",
    name: "Developer Swaleh",
  },

  address: {
    "@type": "PostalAddress",
    addressLocality: "Mombasa",
    addressCountry: "Kenya",
  },

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Technical University of Mombasa",
  },
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
      <ServiceWorkerProvider />
      </body>
    </html>
  );
}
