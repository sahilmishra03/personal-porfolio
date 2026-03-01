"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

const ProblemSolving = () => {
  const [stats, setStats] = useState({
    totalSolved: 0,
    maxStreak: 0,
    badgesCount: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/leetcode");
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch LeetCode data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const leetcodeStats = [
    {
      label: "Problems Solved",
      // Removed the "+" to make the dynamic data feel exact and authentic
      value: loading ? "..." : stats.totalSolved,
      subtext: "Consistent practice",
    },
    {
      label: "Max Streak",
      value: loading ? "..." : `${stats.maxStreak} Days`,
      subtext: "Daily coding habit",
    },
    {
      label: "Badges Earned",
      value: loading ? "..." : stats.badgesCount,
      subtext: "Monthly challenges",
    },
  ];

  return (
    <section
      id="problem-solving"
      className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          Technical Foundation
        </h2>
        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Problem Solving
        </p>
        {/* Upgraded copy for a stronger engineering vibe */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          I believe writing good software requires a strong foundation in Data
          Structures & Algorithms. I regularly practice competitive programming
          and algorithmic problem solving to build scalable and optimized
          systems.
        </p>
      </div>

      {/* Main Card */}
      <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700">
        {/* Profile Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
              <Image
                src="/Coding_Profile.jpg"
                alt="Sahil Mishra"
                width={48}
                height={48}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-neutral-900 dark:text-white">
                  LeetCode Profile
                </h3>
              </div>
              <a
                href="https://leetcode.com/u/sahilmishra03/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                @sahilmishra03
              </a>
            </div>
          </div>

          <a
            href="https://leetcode.com/u/sahilmishra03/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3.5 py-2 text-xs font-bold text-neutral-700 transition-all hover:bg-neutral-50 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            View Profile
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {leetcodeStats.map((stat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 dark:border-neutral-800/60 dark:bg-neutral-950/50"
            >
              <span className="mb-2 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                {stat.label}
              </span>
              <span className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-neutral-500">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
