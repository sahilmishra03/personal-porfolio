"use client";

import React from "react";

import {
  Code2,
  Headphones,
  Keyboard,
  Laptop,
  Map,
  Monitor,
  Mouse,
  Youtube,
} from "lucide-react";

// --- Real Data based on your links ---
const featuredResources = [
  {
    title: "FLUTTER ROADMAP",
    description: "The complete roadmap I follow for Flutter Development.",
    buttonText: "VIEW ROADMAP",
    buttonIcon: Map,
    link: "https://rivaanranawat.netlify.app/roadmap",
  },
  {
    title: "DSA YOUTUBE CHANNEL",
    description:
      "Coding with CTO Bhaiya - Great resource for Data Structures & Algorithms.",
    buttonText: "VISIT CHANNEL",
    buttonIcon: Youtube,
    link: "https://www.youtube.com/@CodingwithCTOBhaiya",
  },
  {
    title: "DSA SHEET I FOLLOW",
    description: "Striver's A2Z Sheet - Learn DSA from A to Z.",
    buttonText: "VIEW SHEET",
    buttonIcon: Code2,
    link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z",
  },
  {
    title: "BACKEND RESOURCE",
    description:
      "The specific video/playlist I follow for learning Backend Development.",
    buttonText: "WATCH VIDEO",
    buttonIcon: Youtube,
    link: "https://youtu.be/0sOvCWFmrtA?si=SpnF-IYy-Upp1-0z",
  },
];

const recommendedProducts = [
  {
    title: 'MSI 23.8" MONITOR',
    icon: Monitor,
    link: "https://www.amazon.in/MSI-MP243X-23-8-Inch-Monitor/dp/B0C8JTZLTV?th=1",
    store: "View on Amazon",
  },
  {
    title: "LENOVO IDEAPAD LAPTOP",
    icon: Laptop,
    link: "https://www.amazon.in/Lenovo-MSOffice-82R400BRIN-Integrated-Graphics/dp/B09MM58Y7Q",
    store: "View on Amazon",
  },
  {
    title: "PORTRONICS WIRELESS MOUSE",
    icon: Mouse,
    link: "https://www.amazon.in/Portronics-Wireless-Bluetooth-Connectivity-Rechargeable/dp/B0BG8LZNYL",
    store: "View on Amazon",
  },
  {
    title: "ANT ESPORTS KEYBOARD",
    icon: Keyboard,
    link: "https://www.flipkart.com/ant-esports-mk1300-mini-blue-swiitch-wired-usb-tenkeyless-gaming-keyboard-compatible-desktop-laptop-mac/p/itma6643cc33e95f?pid=ACCG9JD9YWHNCUPT",
    store: "View on Flipkart",
  },
  {
    title: "PORTRONICS LAPTOP STAND",
    icon: Laptop,
    link: "https://www.amazon.in/Portronics-My-Buddy-Adjustable-OverHeating/dp/B00EU6TXC6",
    store: "View on Amazon",
  },
  {
    title: "boAt AIRDOPES 161",
    icon: Headphones,
    link: "https://www.boat-lifestyle.com/products/airdopes-161?srsltid=AfmBOooaD6V-jN3d7XpVsvtSkLY99TA7yGjqXq7MuSlx1eQyjSuXjqCU",
    store: "View on boAt",
  },
];

export default function Resources() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 flex w-full flex-col gap-16 duration-700 ease-out">
      {/* ================= FEATURED RESOURCES SECTION ================= */}
      <section className="flex flex-col items-center">
        {/* Section Heading with hover ## */}
        <h2 className="group relative mb-8 cursor-default text-[1.4rem] font-black tracking-tight text-gray-900 uppercase transition-opacity dark:text-white">
          <span className="absolute right-full mr-2 font-bold text-gray-400 opacity-0 transition-opacity select-none group-hover:opacity-100 dark:text-zinc-600">
            ##
          </span>
          Featured Resources
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {featuredResources.map((resource, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-[#1C1C1E] dark:hover:border-zinc-700"
            >
              <h3 className="mb-3 flex h-10 items-center justify-center text-[13px] font-bold tracking-wider text-gray-900 uppercase dark:text-white">
                {resource.title}
              </h3>
              <p className="mb-6 flex-1 text-[13px] leading-relaxed text-gray-500 dark:text-zinc-400">
                {resource.description}
              </p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-2.5 text-[12px] font-bold tracking-wide text-gray-700 uppercase transition-colors hover:bg-black hover:text-white dark:border-zinc-700 dark:bg-[#252527] dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <resource.buttonIcon className="h-4 w-4" />
                {resource.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RECOMMENDED PRODUCTS SECTION ================= */}
      <section className="flex flex-col items-center">
        {/* Section Heading with hover ## */}
        <h2 className="group relative mb-8 cursor-default text-[1.4rem] font-black tracking-tight text-gray-900 uppercase transition-opacity dark:text-white">
          <span className="absolute right-full mr-2 font-bold text-gray-400 opacity-0 transition-opacity select-none group-hover:opacity-100 dark:text-zinc-600">
            ##
          </span>
          Recommended Products
        </h2>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
          {recommendedProducts.map((product, idx) => (
            <a
              key={idx}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-black dark:border-zinc-800 dark:bg-[#1C1C1E] dark:hover:border-white"
            >
              <div className="flex w-full flex-1 flex-col items-center">
                <product.icon className="mb-4 h-8 w-8 text-gray-400 transition-colors duration-300 group-hover:text-black dark:text-zinc-500 dark:group-hover:text-white" />
                <h3 className="mb-5 text-center text-[12px] font-bold tracking-wider text-gray-900 uppercase dark:text-white">
                  {product.title}
                </h3>
              </div>
              <span className="w-full rounded-lg bg-gray-100 px-3 py-2 text-center text-[10px] font-bold tracking-widest text-gray-600 uppercase transition-colors duration-300 group-hover:bg-black group-hover:text-white dark:bg-zinc-800 dark:text-gray-300 dark:group-hover:bg-white dark:group-hover:text-black">
                {product.store}
              </span>
            </a>
          ))}
        </div>
        {/* --- FUNNY NO-COMMISSION NOTE --- */}
        <p className="mt-8 max-w-lg text-center text-[12px] font-medium text-gray-500 dark:text-zinc-400">
          * Note: Koi affiliate links nahi hain bhai, tension mat lo! Tumhare
          paise safe hain aur mera commission zero. 😂💸
        </p>
      </section>
    </div>
  );
}
