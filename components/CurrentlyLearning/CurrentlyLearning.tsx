import React from "react";

const learningTopics = [
  {
    title: "Backend (Python & FastAPI)",
    desc: "Building blazing fast APIs, robust architecture, and mastering relational databases with PostgreSQL.",
  },
];

const CurrentlyLearning = () => {
  return (
    <section id="learning" className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16">
      
      {/* Header - Matching unified style */}
      <div className="mb-6">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          Growth
        </h2>
        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Currently Learning
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {learningTopics.map((topic) => (
          <div
            key={topic.title}
            className="group flex flex-col gap-1 rounded-xl border border-neutral-200 bg-neutral-50/50 px-5 py-4 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700"
          >
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              {topic.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {topic.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyLearning;