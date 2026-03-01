"use client";

import Image from "next/image";

import { getTechLogoUrl } from "@/components/HeroSection/techStackLogos";
import { useTheme } from "@/hooks/ThemeProvider";

const skills = [
  { iconId: "flutter", alt: "Flutter" },
  { iconId: "firebase", alt: "Firebase" },
  { iconId: "fastapi", alt: "FastAPI" },
  { iconId: "postgres", alt: "PostgreSQL" },
  { iconId: "java", alt: "Java" },
  { iconId: "py", alt: "Python" },
];

const AboutMe = () => {
  const { isDark } = useTheme();

  const getSkillIcon = (skill: { iconId: string; alt: string }) => {
    const theme = isDark ? "dark" : "light";
    return getTechLogoUrl(skill.iconId, theme);
  };

  return (
    <section id="about" className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16">
      {/* Header - Unified with other sections */}
      <div className="mb-8">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          About
        </h2>
        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Me
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
        {/* Profile Image Wrapper - matching the card aesthetic */}
        <div className="shrink-0">
          <div className="group relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/50 p-2 transition-all duration-300 hover:border-neutral-300 sm:h-52 sm:w-52 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700">
            <Image
              src="/Coding_Profile.jpg"
              alt="Sahil Mishra Avatar"
              width={220}
              height={220}
              className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          </div>
        </div>

        {/* Text and Skills */}
        <div className="min-w-0 flex-1 text-center md:text-left">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
            Sahil Mishra
          </h3>

          <p className="mb-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            Full Stack App Developer specializing in Flutter and backend
            systems. With a strong focus on problem-solving, I build scalable,
            real-world applications and AI-powered solutions prioritized for
            performance and clean architecture.
          </p>

          {/* Top Skills Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-4 text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              Top Skills
            </h4>

            <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:justify-start">
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
                    className="h-11 w-11 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
                    unoptimized
                  />
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-neutral-900 opacity-0 shadow-sm transition-all duration-200 group-hover:-top-11 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
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
