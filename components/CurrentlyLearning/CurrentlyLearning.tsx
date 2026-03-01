import React from "react";

const learningTopics = [
  {
    title: "Backend Development",
    desc: "Deep diving into robust architecture, building blazing fast APIs with Python & FastAPI, and mastering PostgreSQL.",
    // A clean code icon
    icon: (
      <svg
        className="h-6 w-6 text-neutral-600 dark:text-neutral-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Building a SaaS App",
    desc: "Applying my full-stack knowledge to architect, build, and launch a complete Software-as-a-Service product from the ground up.",
    // A clean grid/app icon
    icon: (
      <svg
        className="h-6 w-6 text-neutral-600 dark:text-neutral-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
];

const CurrentlyLearning = () => {
  return (
    <section id="learning" className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16">
      {/* Header aligned with other sections */}
      <div className="mb-8">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          Growth
        </h2>
        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Currently Learning
        </p>
      </div>

      {/* Cards container with slightly wider gap */}
      <div className="flex flex-col gap-4">
        {learningTopics.map((topic) => (
          <div
            key={topic.title}
            className="group flex items-start gap-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-5 transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
          >
            {/* Enlarged Icon Box for cleaner proportions */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-200/60 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              {topic.icon}
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-1.5 pt-0.5">
              <h3 className="text-base font-bold text-neutral-900 sm:text-lg dark:text-white">
                {topic.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {topic.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyLearning;
