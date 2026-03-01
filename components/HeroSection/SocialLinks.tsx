"use client";

import Link from "next/link";

import GmailLogo from "../ui/GmailLogo";
import LinkedInLogo from "../ui/LinkedInLogo";

const SocialLinks = () => {
  return (
    // Slightly increased the gap and added items-center for perfect alignment
    <div className="mt-8 flex items-center gap-4">
      {/* X (Twitter) */}
      <div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/SahilMi86109458"
          className="group flex p-2 text-neutral-500 transition-colors duration-300 hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          <span className="size-6 transition-transform duration-300 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
          </span>
        </Link>
      </div>

      {/* LinkedIn */}
      <div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sahilmishra03/"
          className="group flex p-2 text-neutral-500 transition-colors duration-300 hover:text-[#0A66C2] dark:text-neutral-400 dark:hover:text-[#318CE7]"
        >
          <span className="size-6 transition-transform duration-300 group-hover:scale-110">
            <LinkedInLogo size={24} />
          </span>
        </Link>
      </div>

      {/* GitHub */}
      <div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sahilmishra03"
          className="group flex p-2 text-neutral-500 transition-colors duration-300 hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          <span className="size-6 transition-transform duration-300 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
            </svg>
          </span>
        </Link>
      </div>

      {/* Gmail */}
      <div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:sahilmishra03032005@gmail.com"
          className="group flex p-2 text-neutral-500 transition-colors duration-300 hover:text-[#EA4335] dark:text-neutral-400 dark:hover:text-[#EA4335]"
        >
          <span className="size-6 transition-transform duration-300 group-hover:scale-110">
            <GmailLogo size={24} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
