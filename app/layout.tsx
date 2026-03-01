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

// Script to prevent flash of incorrect theme and fix hydration
const themeInitScript = `(function(){try{var theme=localStorage.getItem('theme');if(!theme){var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;theme=prefersDark?'dark':'light';localStorage.setItem('theme',theme)}if(theme==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}document.documentElement.setAttribute('data-theme',theme)}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preload" href="/x.webp" as="image" type="image/webp" />
        <link
          rel="preload"
          href="/linkedin.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        <ThemeProvider>
          <NavBar />
          <PageTransition>{children}</PageTransition>
          <FooterBlur />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
