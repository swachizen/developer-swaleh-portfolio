import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    "Swaleh Mohamad Swaleh is a full-stack website developer based in Mombasa, Kenya, specializing in Next.js, TypeScript, Supabase, SQL, backend systems, and modern frontend architecture.",

  keywords: [
    "Developer Swaleh",
    "Swaleh Mohamad Swaleh",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Supabase Developer",
    "Frontend Developer Kenya",
    "Backend Developer Kenya",
    "Web Developer Mombasa",
    "Civil Engineering Student",
    "React Developer",
    "Portfolio Website",
  ],

  authors: [
    {
      name: "Swaleh Mohamad Swaleh",
    },
  ],

  creator: "Swaleh Mohamad Swaleh",

  publisher: "Developer Swaleh",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Developer Swaleh | Full-Stack Website Developer",

    description:
      "Modern full-stack website developer specializing in scalable frontend systems, backend architecture, SQL databases, and high-performance web applications.",

    url: "https://portfolio.swaleh.app",

    siteName: "Developer Swaleh",

    locale: "en_US",

    type: "website",

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
      "Portfolio of Swaleh Mohamad Swaleh, a modern full-stack website developer building scalable digital experiences.",

    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: "https://portfolio.swaleh.app",
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
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
       <SpeedInsights />
      </body>
    </html>
  );
}
