import React from "react";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="pt-8">
      <h1 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
        <span className="inline-block">
          Hi, I&apos;m Sahil{" "}
          <span className="text-neutral-500 dark:text-neutral-500">
            — Full Stack App Developer.
          </span>
        </span>
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-neutral-600 sm:text-xl sm:leading-8 dark:text-neutral-400">
        I build scalable, AI-powered applications using{" "}
        <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-neutral-300 bg-neutral-100 px-2 py-0.5 text-sm font-medium text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white">
          <Image
            src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
            alt="Flutter"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          Flutter
        </span>
        {" , "}
        <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-neutral-300 bg-neutral-100 px-2 py-0.5 text-sm font-medium text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white">
          <Image
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="Firebase"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          Firebase
        </span>
        {" , "}
        <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-neutral-300 bg-neutral-100 px-2 py-0.5 text-sm font-medium text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white">
          <Image
            src="https://skillicons.dev/icons?i=fastapi&theme=light"
            alt="FastAPI"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          FastAPI
        </span>
        {" , and "}
        <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-neutral-300 bg-neutral-100 px-2 py-0.5 text-sm font-medium text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white">
          <Image
            src="https://skillicons.dev/icons?i=postgresql&theme=light"
            alt="PostgreSQL"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          PostgreSQL
        </span>
        {". With a strong foundation in "}
        <span className="font-semibold text-neutral-900 dark:text-white">
          Data Structures & Algorithms
        </span>
        {
          ", I focus on building efficient, real-world solutions with clean architecture and strong backend systems."
        }
      </p>
    </div>
  );
};

export default Intro;
