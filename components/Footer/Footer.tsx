import React from "react";

import GitHubLogo from "../ui/GitHubLogo";
import LinkedInLogo from "../ui/LinkedInLogo";
import GmailLogo from "../ui/GmailLogo";

const Footer = () => {
  return (
    <footer className="space-y-8 pb-24">
      <div className="flex flex-col items-center justify-between gap-6 pb-8 md:flex-row">
        <div className="text-center md:text-left">
          <p
            className={`mb-2 bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent`}
          >
            Let&apos;s build something amazing.
          </p>
          <p className={`mb-3 text-sm`}>
            Open to freelance projects and collaborations
          </p>
          <a
            href="mailto:john.doe@example.com"
            className={`group inline-flex items-center gap-2 text-sm transition-colors`}
          >
            <GmailLogo
              size={16}
              className="transition-transform group-hover:scale-110"
            />
            john.doe@example.com
          </a>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/example"
            className="rounded-xl border bg-neutral-100 p-3 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none dark:bg-neutral-800 dark:shadow-[0_4px_0_0_rgba(0,0,0,0.4)] dark:hover:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] dark:active:shadow-none"
          >
            <GitHubLogo size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/example/"
            className="rounded-xl border bg-neutral-100 p-3 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none dark:bg-neutral-800 dark:shadow-[0_4px_0_0_rgba(0,0,0,0.4)] dark:hover:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] dark:active:shadow-none"
          >
            <LinkedInLogo size={22} />
          </a>
          <a
            href="mailto:john.doe@example.com"
            className="rounded-xl border bg-neutral-100 p-3 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none dark:bg-neutral-800 dark:shadow-[0_4px_0_0_rgba(0,0,0,0.4)] dark:hover:shadow-[0_2px_0_0_rgba(0,0,0,0.4)] dark:active:shadow-none"
          >
            <GmailLogo size={22} />
          </a>
        </div>
      </div>
      <div className={`border-t pt-8 text-center`}>
        <p className={`text-xs`}>
          © 2026 Crafted with <span className="text-red-500">♥</span> by John Doe.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
