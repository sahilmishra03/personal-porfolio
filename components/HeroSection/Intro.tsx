import React from "react";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="pt-8">
      <h1 className="text-3xl leading-tight font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-[44px] dark:text-white">
        {/* Forces it to be one line on screens sm (640px) and up, but lets it wrap naturally on mobile */}
        <span className="block whitespace-normal sm:inline sm:whitespace-nowrap">
          Hi, I&apos;m Sahil —{" "}
        </span>
        <span className="block whitespace-normal text-neutral-500 sm:inline sm:whitespace-nowrap dark:text-neutral-400">
          A Full Stack App Developer.
        </span>
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-neutral-600 sm:text-xl sm:leading-8 dark:text-neutral-400">
        I build scalable, AI-powered applications using{" "}
        <span className="mx-1 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100/50 px-2 py-0.5 text-sm font-medium text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-100">
          <Image
            src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
            alt="Flutter"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          Flutter
        </span>
        ,{" "}
        <span className="mx-1 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100/50 px-2 py-0.5 text-sm font-medium text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-100">
          <Image
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="Firebase"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          Firebase
        </span>
        ,{" "}
        <span className="mx-1 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100/50 px-2 py-0.5 text-sm font-medium text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-100">
          <Image
            src="https://skillicons.dev/icons?i=fastapi&theme=light"
            alt="FastAPI"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          FastAPI
        </span>
        , and{" "}
        <span className="mx-1 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100/50 px-2 py-0.5 text-sm font-medium text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-100">
          <Image
            src="https://skillicons.dev/icons?i=postgresql&theme=light"
            alt="PostgreSQL"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          PostgreSQL
        </span>
        . With a strong foundation in{" "}
        <span className="font-semibold text-neutral-900 dark:text-neutral-200">
          Data Structures & Algorithms
        </span>
        , I focus on building efficient, real-world solutions with clean
        architecture and strong backend systems.
      </p>
    </div>
  );
};

export default Intro;
