import { Metadata } from "next";

import AboutMe from "@/components/AboutMe/AboutMe";
import Achievments from "@/components/Achievments/Achievments";
import CurrentlyLearning from "@/components/CurrentlyLearning/CurrentlyLearning";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import FooterBlur from "@/components/Footer/FooterBlur";
import GitHub from "@/components/GitHub/GitHub";
import GrowthTimeline from "@/components/GrowthTimeline/GrowthTimeline";
import Hero from "@/components/HeroSection/Hero";
import ProblemSolving from "@/components/ProblemSolving/ProblemSolving";
import Projects from "@/components/Projects/Projects";
import Resources from "@/components/Resources/Resources";
import FadeIn from "@/components/ui/FadeIn";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export const metadata: Metadata = {
  title: "Sahil Mishra | Full Stack & Flutter Developer",
  description:
    "Sahil Mishra is a Full Stack Developer specializing in Flutter, Firebase, Node.js & AI-powered applications. Passionate about building scalable, real-world apps with clean architecture and strong problem-solving skills.",
  keywords: [
    "Sahil Mishra",
    "Full Stack Developer",
    "Flutter Developer",
    "Firebase",
    "Node.js",
    "MongoDB",
    "AI Integration",
    "DSA",
    "Portfolio",
  ],
  authors: [{ name: "Sahil Mishra" }],
  creator: "Sahil Mishra",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Sahil Mishra | Full Stack & Flutter Developer",
    description:
      "Full Stack & Flutter Developer building scalable apps with Firebase, Node.js & AI integration. Strong foundation in Data Structures & Algorithms.",
    siteName: "Sahil Mishra Portfolio",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Sahil Mishra Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Mishra | Full Stack & Flutter Developer",
    description:
      "Full Stack Developer specializing in Flutter, Firebase, Node.js & AI integration.",
    images: ["/og_image.png"],
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
};

const page = () => {
  return (
    <div className="mx-auto max-w-[720px] px-8 md:px-0">
      {/* Hero Section */}
      <FadeIn>
        <Hero />
      </FadeIn>

      {/* About Me */}
      <FadeIn>
        <AboutMe />
      </FadeIn>

      {/* Experience */}
      <FadeIn>
        <Experience />
      </FadeIn>

      {/* Projects (Most Important) */}
      <FadeIn>
        <Projects />
      </FadeIn>

      {/* Problem Solving / DSA Strength */}
      <FadeIn>
        <ProblemSolving />
      </FadeIn>

      {/* GitHub Stats */}
      <FadeIn>
        <GitHub />
      </FadeIn>

      {/* Currently Learning */}
      <FadeIn>
        <CurrentlyLearning />
      </FadeIn>

      {/* Growth Journey */}
      <FadeIn>
        <GrowthTimeline />
      </FadeIn>

      {/* Achievements */}
      <FadeIn>
        <Achievments />
      </FadeIn>

      {/* Resources I Use */}
      <FadeIn>
        <Resources />
      </FadeIn>

      {/* Footer */}
      <FadeIn>
        <Footer />
      </FadeIn>

      <FooterBlur />
    </div>
  );
};

export default page;