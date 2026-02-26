import React from "react";

const learningResources = [
  {
    topic: "DSA Sheet I Follow",
    source: "Striver's A2Z Sheet",
    link: "https://takeuforward.org/strivers-a2z-dsa-course-sheet-2-0/",
  },
  {
    topic: "Flutter Architecture",
    source: "Rivaan Ranawat / Andrea Bizzotto",
    link: "https://codewithandrea.com/",
  },
  {
    topic: "Firebase Mastery",
    source: "Official Documentation",
    link: "https://firebase.google.com/docs",
  },
  {
    topic: "Backend & Systems",
    source: "Harkirat Singh (100xDevs)",
    link: "https://100xdevs.com/",
  },
  {
    topic: "Backend First Principles",
    source: "Hussein Nasser",
    link: "https://www.youtube.com/c/HusseinNasser-software-engineering",
  },
];

const Resources = () => {
  return (
    <section id="resources" className="mx-auto mt-10 max-w-3xl px-0">
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          Knowledge
        </h2>
        <p className="mt-0.5 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Resources
        </p>
      </div>

      <div className="space-y-1">
        {learningResources.map((item) => (
          <a
            key={item.topic}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-3 transition-all"
          >
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-neutral-900 transition-colors group-hover:text-neutral-500 dark:text-neutral-100 dark:group-hover:text-neutral-400">
                {item.topic}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500">
                  {item.source}
                </p>
                {/* Minimalist dot separator and tag */}
                <span className="text-[10px] font-bold text-neutral-300 dark:text-neutral-700">
                  • LINK
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Resources;