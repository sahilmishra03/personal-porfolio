import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="pt-8">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-[44px]">
        {/* Forces it to be one line on screens sm (640px) and up, but lets it wrap naturally on mobile */}
        <span className="block sm:inline whitespace-normal sm:whitespace-nowrap">
          Hi, I&apos;m Sahil —{" "}
        </span>
        <span className="block text-neutral-500 dark:text-neutral-400 sm:inline whitespace-normal sm:whitespace-nowrap">
          A Full Stack App Developer.
        </span>
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl sm:leading-8">
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
        , and{" "}
        <span className="mx-1 inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-100/50 px-2 py-0.5 text-sm font-medium text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-100">
          <Image
            src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
            alt="Node.js"
            width={16}
            height={16}
            className="h-4 w-4 object-contain"
          />
          Node.js
        </span>
        . With a strong foundation in{" "}
        <span className="font-semibold text-neutral-900 dark:text-neutral-200">
          Data Structures & Algorithms
        </span>
        , driven by a keen eye for problem-solving.
      </p>
    </div>
  );
};

export default Intro;