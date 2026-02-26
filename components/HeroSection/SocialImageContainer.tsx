import React from "react";
import Image from "next/image";

const SocialImageContainer = ({ image }: { image: string }) => {
  return (
    <div
      // Added a subtle frame effect (p-1.5) and a smooth hover lift
      className="group w-fit overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-1.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/50 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:shadow-black/50"
    >
      <Image
        src={image}
        alt="Social preview"
        width={300}
        height={300}
        priority // Replaced loading="eager" with Next.js standard 'priority'
        className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export default SocialImageContainer;