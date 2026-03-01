import React from "react";

const timelineData = [
  {
    year: "1st Year",
    items: [
      {
        title: "Lateral Entry",
        desc: "Joined directly in 2nd year through lateral entry. Focused on adapting quickly and building strong programming fundamentals.",
      },
    ],
  },
  {
    year: "2nd Year",
    items: [
      {
        title: "Academics + Core DSA",
        desc: "Built strong foundation in programming logic, data structures and problem solving.",
      },
      {
        title: "Flutter Development",
        desc: "Started mobile app development. Learned UI building, state management and Firebase integration.",
      },
    ],
  },
  {
    year: "3rd Year",
    items: [
      {
        title: "Advanced DSA",
        desc: "Focused on solving medium-hard problems and improving algorithmic thinking.",
      },
      {
        title: "Production-Level Projects",
        desc: "Built scalable full-stack applications using Flutter, FastAPI and PostgreSQL.",
      },
    ],
  },
  {
    year: "4th Year",
    items: [
      {
        title: "Placement Preparation (Coming Soon 🚀)",
        desc: "Preparing for product-based companies with strong DSA, system design basics and real-world project experience.",
      },
    ],
  },
];

const GrowthTimeline = () => {
  return (
    <section id="growth" className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          Journey
        </h2>
        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Growth Timeline
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-10">
        {timelineData.map((yearGroup, idx) => (
          <div key={idx} className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            {/* Year Label */}
            <div className="shrink-0 pt-2 sm:w-28">
              <span className="text-xs font-black tracking-[0.2em] text-neutral-400 uppercase dark:text-neutral-500">
                {yearGroup.year}
              </span>
            </div>

            {/* Content Cards */}
            <div className="flex flex-1 flex-col gap-3">
              {yearGroup.items.map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-5 transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
                >
                  <span className="text-base font-bold text-neutral-900 sm:text-lg dark:text-white">
                    {item.title}
                  </span>

                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowthTimeline;
