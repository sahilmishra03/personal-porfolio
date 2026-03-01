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
import FadeIn from "@/components/ui/FadeIn";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sahilmishra.vercel.app";

export const metadata: Metadata = {
  title: "Sahil Mishra | Full Stack App Developer",
  description:
    "Sahil Mishra is a Full Stack App Developer building scalable, AI-powered applications using Flutter, Firebase, FastAPI, and PostgreSQL. With a strong foundation in Data Structures & Algorithms, I focus on building efficient, real-world solutions with clean architecture and strong backend systems.",
  keywords: [
    "Sahil Mishra",
    "Full Stack App Developer",
    "Flutter Developer",
    "Firebase",
    "FastAPI",
    "PostgreSQL",
    "AI Integration",
    "Data Structures & Algorithms",
    "Clean Architecture",
    "Backend Systems",
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
    title: "Sahil Mishra | Full Stack App Developer",
    description:
      "Full Stack App Developer building scalable, AI-powered applications using Flutter, Firebase, FastAPI, and PostgreSQL. Strong foundation in Data Structures & Algorithms with focus on clean architecture.",
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
    title: "Sahil Mishra | Full Stack App Developer",
    description:
      "Full Stack App Developer building scalable, AI-powered applications using Flutter, Firebase, FastAPI, and PostgreSQL.",
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
      <section id="projects" className="scroll-mt-24">
        <FadeIn>
          <Projects />
        </FadeIn>
      </section>

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

      {/* Footer */}
      <FadeIn>
        <Footer />
      </FadeIn>

      <FooterBlur />
    </div>
  );
};

export default page;
