import React from "react";
import { ChevronRight } from "lucide-react";

const timelineData = [
  {
    year: "3rd Year",
    items: [
      {
        period: "Even",
        title: "Smart Clinic & OpenForge",
        desc: "Architecture & scalable systems.",
      },
      {
        period: "Odd",
        title: "Hackathons & BullXchange",
        desc: "Advanced DSA & Firebase core.",
      },
    ],
  },
  {
    year: "2nd Year",
    items: [
      {
        period: "Even",
        title: "App Development",
        desc: "Functional UI & mobile logic.",
      },
      {
        period: "Odd",
        title: "Academics & Core DSA",
        desc: "Mastering programming logic.",
      },
    ],
  },
];

const GrowthTimeline = () => {
  return (
    <section id="growth" className="mx-auto mt-10 max-w-3xl px-0">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          Journey
        </h2>
        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Timeline
        </p>
      </div>

      <div className="space-y-8">
        {timelineData.map((yearGroup, idx) => (
          <div key={idx} className="group">
            {/* Year Heading */}
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
              {yearGroup.year}
            </h3>

            <div className="space-y-4">
              {yearGroup.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  {/* The Arrow Icon - Minimal & Clean */}
                  <ChevronRight 
                    size={16} 
                    className="mt-1 shrink-0 text-neutral-300 dark:text-neutral-700" 
                  />
                  
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-tighter">
                        / {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {item.desc}
                    </p>
                  </div>
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