import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import FooterBlur from "@/components/Footer/FooterBlur";
import NavBar from "@/components/Navbar/NavBar";
import PageTransition from "@/components/PageTransition/PageTransition";
import { ThemeProvider } from "@/hooks/ThemeProvider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "Sahil Mishra",
  description:
    "Full Stack App Developer building scalable, AI-powered applications using Flutter, Firebase, FastAPI, and PostgreSQL with strong foundation in Data Structures & Algorithms.",
  icons: {
    icon: [
      { url: "/cropped_circle_image.png", sizes: "32x32", type: "image/png" },
      { url: "/cropped_circle_image.png", sizes: "16x16", type: "image/png" },
      { url: "/cropped_circle_image.png", sizes: "192x192", type: "image/png" },
      { url: "/cropped_circle_image.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/cropped_circle_image.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/cropped_circle_image.png",
  },
  openGraph: {
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="preload"
          href="/Coding_Profile.jpg"
          as="image"
          type="image/jpeg"
        />
        <link rel="dns-prefetch" href="//skillicons.dev" />
        <link rel="dns-prefetch" href="//cdn.simpleicons.org" />
        <link rel="preconnect" href="https://skillicons.dev" />
        <link rel="preconnect" href="https://cdn.simpleicons.org" />
      </head>
      <body
        className="overflow-x-hidden antialiased"
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <FooterBlur />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
