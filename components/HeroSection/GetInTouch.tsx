import Link from "next/link";

import { FileText, Send } from "lucide-react";

const GetInTouch = () => {
  return (
    // Added flex-wrap just in case a user is on a very narrow mobile screen
    <div className="mt-8 flex flex-wrap items-center gap-4">
      {/* Primary Button: Solid High-Contrast */}
      <Link
        href="https://drive.google.com/file/d/19mdBjYFPmGPOnyl6o2BDtaW30WiTZWP0/view?usp=sharing"
        target="_blank"
        className="group flex h-10 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-neutral-50 transition-all hover:bg-neutral-800 active:scale-95 sm:px-5 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        <FileText
          size={16}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />
        Resume / CV
      </Link>

      {/* Secondary Button: Subtle Outline */}
      <Link
        href="mailto:sahilmishra03032005@gmail.com"
        className="group flex h-10 items-center gap-2 rounded-lg border border-neutral-200 bg-transparent px-4 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100 active:scale-95 sm:px-5 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900"
      >
        <Send
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        Get in touch
      </Link>
    </div>
  );
};

export default GetInTouch;
