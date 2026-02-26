"use client";

import Image from "next/image";
import { useTheme } from "@/hooks/ThemeProvider";
import { getTechLogoUrl } from "@/components/HeroSection/techStackLogos";

const skills = [
  { iconId: "flutter", alt: "Flutter" },
  { iconId: "dart", alt: "Dart" },
  { iconId: "firebase", alt: "Firebase" },
  { iconId: "nodejs", alt: "Node.js" },
  { iconId: "mongodb", alt: "MongoDB" },
  { iconId: "express", alt: "Express.js" },
  { iconId: "git", alt: "Git" },
  { iconId: "figma", alt: "Figma" },
];

const AboutMe = () => {
  const { isDark } = useTheme();

  const getSkillIcon = (skill: { iconId: string; alt: string }) => {
    const theme = isDark ? "dark" : "light";
    return getTechLogoUrl(skill.iconId, theme);
  };

  return (
    <section id="about" className="mx-auto mt-10 max-w-3xl px-0 py-4">
      
      {/* Header Container */}
      <div className="mb-6 flex flex-col sm:mb-8 md:flex-row md:items-baseline md:gap-3">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          About
        </h2>
        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:mt-0">
          Me
        </p>
      </div>
      
      {/* Main Content Layout */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
        
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="group relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-2 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 sm:h-52 sm:w-52">
            <Image
              src="/Coding_Profile.jpg"
              alt="Sahil Mishra Avatar"
              width={220}
              height={220}
              className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
        </div>
        
        {/* Text and Skills */}
        <div className="min-w-0 flex-1 text-center md:text-left">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-3xl">
            Sahil Mishra
          </h3>
          
          <p className="mb-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            I&apos;m a Full Stack App Developer focused on building scalable, real-world applications. My toolkit relies on <span className="font-semibold text-neutral-900 dark:text-neutral-200">Flutter, Next.js, Node.js, and Firebase</span>. 
          </p>
          
          <p className="mb-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            Driven by a strong foundation in <span className="font-semibold text-neutral-900 dark:text-neutral-200">problem-solving</span>, I&apos;m currently developing AI-powered platforms like Smart Clinic. Seeking an internship to contribute to impactful projects.
          </p>
          
          {/* Top Skills - Big Icons, No Boxes */}
          <div>
            <span className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              Top Skills
            </span>
            {/* Swapped back to a dense flex layout so they sit naturally without rigid grid spacing */}
            <div className="mt-4 flex flex-wrap justify-center gap-5 sm:gap-6 md:justify-start">
              {skills.map((skill) => (
                <div 
                  key={skill.alt} 
                  className="group relative flex items-center justify-center transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <Image
                    src={getSkillIcon(skill)}
                    alt={skill.alt}
                    width={48} 
                    height={48} 
                    // Made the icons themselves much larger (h-11 w-11 / sm:h-12 sm:w-12)
                    className="h-11 w-11 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
                    unoptimized
                  />
                  {/* Clean Tooltip */}
                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-neutral-900 opacity-0 shadow-sm transition-all duration-200 group-hover:-top-11 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
                    {skill.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;