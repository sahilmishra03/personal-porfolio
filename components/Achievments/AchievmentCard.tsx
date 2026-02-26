"use client";

import { ExternalLink, Hash } from "lucide-react";
import { motion } from "framer-motion";

const AchievementCard = () => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-100/50 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
    >
      {/* Background ID Hint - More subtle */}
      <span className="pointer-events-none absolute -right-4 -bottom-6 select-none font-sans text-[100px] leading-none font-black tracking-tighter text-neutral-950 opacity-[0.03] transition-opacity group-hover:opacity-[0.05] dark:text-white">
        42
      </span>

      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-600 uppercase dark:text-emerald-400">
                Excellence Award
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Innovation Summit 2024
            </h3>

            <p className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
              Tech Community Global
            </p>
          </div>

          <div className="flex flex-col sm:items-end">
            <div className="flex items-baseline gap-1 font-bold text-neutral-900 dark:text-white">
              <span className="text-xs text-emerald-500">#</span>
              <span className="text-2xl tracking-tighter">42</span>
              <span className="ml-1 text-[10px] font-medium text-neutral-400">
                / 500+
              </span>
            </div>
            <p className="mt-1 w-fit rounded bg-neutral-200/50 px-1.5 py-0.5 text-[9px] font-bold tracking-tighter text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              TOP 8% PERCENTILE
            </p>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="mt-6 max-w-2xl border-l border-neutral-200 pl-4 text-sm leading-relaxed text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          Recognized for outstanding innovation in <span className="font-semibold text-neutral-900 dark:text-neutral-200">Digital Solutions</span>. Developed a high-performance prototype demonstrating technical proficiency and creative engineering.
        </p>

        {/* Action Footer */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 pt-5">
          <a
            href="https://example.com/verify/AWARD-123ABC-789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 transition-colors hover:text-emerald-500 dark:text-neutral-500 dark:hover:text-emerald-400"
          >
            <ExternalLink size={12} />
            VERIFY_CERTIFICATE
          </a>

          <div className="flex items-center gap-1.5 text-[10px] font-medium text-neutral-400 dark:text-neutral-600">
            <Hash size={10} />
            <span>ID: AWARD-123ABC-789</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;