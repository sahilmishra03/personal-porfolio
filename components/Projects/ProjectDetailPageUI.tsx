"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Github, Globe, Play, X } from "lucide-react";

import { useTheme } from "@/hooks/ThemeProvider";
import { ProjectType } from "@/types/project";

// --- Main Page Component ---

interface ProjectDetailPageUIProps {
  project: ProjectType;
}

// LoginPopup component moved outside to avoid recreation during render
const LoginPopup = ({
  isOpen,
  onClose,
  message,
  isDark,
}: {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  isDark: boolean;
}) => {
  if (!isOpen) return null;
  return (
    <div className="animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md duration-200">
      <div
        className={`${isDark ? "border-zinc-800 bg-[#1C1C1E]" : "border-gray-100 bg-white"} animate-in zoom-in-95 relative w-full max-w-sm rounded-2xl border p-8 shadow-2xl duration-200`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 rounded-full p-2 ${isDark ? "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"} transition-colors`}
        >
          <X className="h-4 w-4" />
        </button>
        <h3
          className={`${isDark ? "text-white" : "text-gray-900"} mb-3 text-xl font-black`}
        >
          Sign In Required
        </h3>
        <p
          className={`${isDark ? "font-light text-white" : "text-gray-500"} mb-8 text-sm leading-relaxed`}
        >
          {message}
        </p>
        <button
          onClick={onClose}
          className={`w-full py-3 ${isDark ? "bg-white text-black hover:bg-zinc-200" : "bg-black text-white hover:bg-gray-800"} rounded-xl text-sm font-semibold transition-all active:scale-[0.98]`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function ProjectDetailPageUI({
  project,
}: ProjectDetailPageUIProps) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const { isDark } = useTheme();

  // --- Highly Refined Content Renderer ---
  const renderRichContent = (content: string | undefined) => {
    if (!content) return null;

    const lines = content.split("\n").filter((line) => line.trim() !== "");
    const isList = lines.some(
      (line) => line.trim().startsWith("* ") || line.trim().startsWith("- ")
    );

    if (isList) {
      return (
        <ul className="flex flex-col gap-3">
          {lines.map((line, i) => {
            const cleanLine = line.replace(/^[\*\-]\s*/, "");
            const parts = cleanLine.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full ${isDark ? "bg-zinc-500" : "bg-gray-400"}`}
                ></span>
                <p
                  className={`m-0 text-[0.95rem] leading-relaxed ${isDark ? "font-light text-white" : "text-gray-600"}`}
                >
                  {parts.map((part, j) =>
                    j % 2 === 1 ? (
                      <strong
                        key={j}
                        className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      );
    }

    return (
      <div className="flex flex-col gap-4">
        {lines.map((line, i) => {
          const parts = line.split(/\*\*(.*?)\*\*/g);
          return (
            <p
              key={i}
              className={`text-[0.95rem] leading-relaxed ${isDark ? "font-light text-white" : "text-gray-600"}`}
            >
              {parts.map((part, j) =>
                j % 2 === 1 ? (
                  <strong
                    key={j}
                    className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          );
        })}
      </div>
    );
  };

  const hasVideoUrl = project.videoUrl && project.videoUrl.trim() !== "";
  const videoUrl = project.videoUrl;

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch"))
      return `https://www.youtube.com/embed/${url.split("v=")[1]?.split("&")[0]}`;
    if (url.includes("youtu.be/"))
      return `https://www.youtube.com/embed/${url.split("youtu.be/")[1]?.split("?")[0]}`;
    return url;
  };

  const flatTechList =
    project.technologies || project.techStack?.map((t) => t.name) || [];

  const allTags = [project.projectType, ...flatTechList].filter(Boolean);
  const visibleTags = allTags.slice(0, 6);

  return (
    <div
      className={`min-h-screen ${isDark ? "bg-[#161618]" : "bg-[#FAFAFA]"} ${isDark ? "text-white" : "text-gray-800"} w-full overflow-x-hidden pb-32 font-sans transition-colors duration-300 selection:bg-black/10 dark:selection:bg-white/20`}
    >
      {/* Top Navigation - Aligned to max-w-5xl to match the new large image */}
      <div className="mx-auto max-w-5xl px-5 pt-16 pb-8 sm:px-6">
        <Link
          href="/#projects"
          className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive btn-inner-shadow hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 group inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [@media(hover:hover)_and_(pointer:fine)]:transition-colors [@media(hover:hover)_and_(pointer:fine)]:duration-200 [@media(hover:hover)_and_(pointer:fine)]:ease-[ease]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="size-4"
          >
            <path d="M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H51.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,85.66,45.66L51.31,80H168A64.07,64.07,0,0,1,232,144Z"></path>
          </svg>
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* ================= HERO IMAGE - Expanded to max-w-5xl, Uncropped ================= */}
      <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto mb-12 max-w-5xl px-5 duration-700 ease-out sm:px-6">
        <div
          className={`relative w-full overflow-hidden rounded-2xl border shadow-xl ${isDark ? "border-zinc-800/80 bg-zinc-900/50" : "border-gray-200/60 bg-white"}`}
        >
          {project.imagePath || project.mockupImage ? (
            <Image
              src={project.imagePath || project.mockupImage || ""}
              alt={`${project.title} mockup`}
              width={1200}
              height={800}
              // Removed object-cover and aspect-[16/9] to ensure the image scales naturally without cropping text
              className="block h-auto w-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement!.className += ` aspect-[16/9] bg-gradient-to-br ${isDark ? "from-zinc-800 to-[#111113]" : "from-gray-100 to-gray-200"}`;
              }}
            />
          ) : (
            <div
              className={`aspect-[16/9] w-full bg-gradient-to-br ${isDark ? "from-zinc-800 via-zinc-900 to-[#111113]" : "from-gray-100 via-gray-200 to-gray-300"}`}
            ></div>
          )}
        </div>
      </div>

      {/* ================= CONTENT CONTAINER - Kept at max-w-3xl for optimal readability ================= */}
      <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both mx-auto max-w-3xl px-5 delay-150 duration-700 ease-out sm:px-6">
        {/* ================= TAGS / PILLS ================= */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {visibleTags.map((tag, i) => (
            <span
              key={i}
              className={`rounded-full px-3 py-1 text-[11px] font-medium tracking-wide ${
                isDark
                  ? "border border-zinc-700/80 bg-transparent text-white"
                  : "border border-gray-300 bg-transparent text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
          {allTags.length > 6 && (
            <span
              className={`px-2 py-1 text-[11px] font-medium ${isDark ? "text-white" : "text-gray-600"}`}
            >
              +more
            </span>
          )}
        </div>

        {/* ================= TITLE & DESC ================= */}
        <div className="mb-8">
          <h1
            className={`text-4xl font-black tracking-tight md:text-[3rem] ${isDark ? "text-white" : "text-black"} mb-4 leading-tight`}
          >
            {(project.title || "").split("–")[0].trim()}
          </h1>
          <p
            className={`text-[1.1rem] ${isDark ? "font-light text-zinc-300" : "text-gray-600"} leading-relaxed`}
          >
            {project.shortDescription}
          </p>
        </div>

        {/* ================= STATS BOX ================= */}
        <div
          className={`flex flex-wrap items-center justify-between gap-6 rounded-xl border px-6 py-5 md:flex-nowrap ${isDark ? "border-zinc-800/80 bg-[#1C1C1E]" : "border-gray-200 bg-white"} mb-8 shadow-sm`}
        >
          <div className="flex w-[45%] flex-col gap-1 md:w-auto">
            <span
              className={`text-[10px] font-black tracking-widest uppercase ${isDark ? "font-extralight text-zinc-500" : "text-gray-400"}`}
            >
              Timeline
            </span>
            <span
              className={`text-[13px] font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {project.timeline || "N/A"}
            </span>
          </div>
          <div className="flex w-[45%] flex-col gap-1 md:w-auto">
            <span
              className={`text-[10px] font-black tracking-widest uppercase ${isDark ? "font-extralight text-zinc-500" : "text-gray-400"}`}
            >
              Role
            </span>
            <span
              className={`text-[13px] font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {project.role || "N/A"}
            </span>
          </div>
          <div className="flex w-[45%] flex-col gap-1 md:w-auto">
            <span
              className={`text-[10px] font-black tracking-widest uppercase ${isDark ? "font-extralight text-zinc-500" : "text-gray-400"}`}
            >
              Team
            </span>
            <span
              className={`text-[13px] font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Solo
            </span>
          </div>
          <div className="flex w-[45%] flex-col gap-1 md:w-auto">
            <span
              className={`text-[10px] font-black tracking-widest uppercase ${isDark ? "font-extralight text-zinc-500" : "text-gray-400"}`}
            >
              Status
            </span>
            <span
              className={`inline-flex items-center justify-center self-start rounded px-2 py-0.5 text-[11px] font-bold tracking-wide ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
            >
              {project.status || "Completed"}
            </span>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mb-12 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-lg border border-transparent px-5 py-2.5 ${isDark ? "bg-white text-black hover:bg-zinc-200" : "bg-black text-white hover:bg-gray-800"} text-[13px] font-semibold transition-all active:scale-95`}
            >
              <Globe className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 rounded-lg border px-5 py-2.5 ${isDark ? "border-zinc-700 bg-transparent text-white hover:bg-zinc-800" : "border-gray-300 bg-transparent text-black hover:bg-gray-100"} text-[13px] font-medium transition-all active:scale-95`}
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          )}
          {hasVideoUrl && (
            <button
              onClick={() => setShowPreviewModal(true)}
              className={`flex items-center gap-2 rounded-lg border px-5 py-2.5 ${isDark ? "border-zinc-700 bg-transparent text-white hover:bg-zinc-800" : "border-gray-300 bg-transparent text-black hover:bg-gray-100"} text-[13px] font-medium transition-all active:scale-95`}
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Video
            </button>
          )}
        </div>

        {/* ================= CONTENT BODY ================= */}
        <div className="flex w-full flex-col">
          {/* Main Context Heading & Divider */}
          <div
            className={`border-t ${isDark ? "border-zinc-800/80" : "border-gray-200"} mb-8 pt-10`}
          >
            <h2
              className={`group relative text-[1.8rem] font-black tracking-tight ${isDark ? "text-white" : "text-black"} cursor-default transition-opacity`}
            >
              <span className="absolute right-full mr-2 font-bold text-gray-400 opacity-0 transition-opacity select-none group-hover:opacity-100 dark:text-zinc-500">
                #
              </span>
              {project.title}
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {project.overview && (
              <div className="w-full">
                <h3
                  className={`group relative text-[1.4rem] font-extrabold tracking-tight ${isDark ? "text-white" : "text-black"} mb-4 cursor-default transition-opacity`}
                >
                  <span className="absolute right-full mr-2 font-bold text-gray-400 opacity-0 transition-opacity select-none group-hover:opacity-100 dark:text-zinc-500">
                    ##
                  </span>
                  Overview
                </h3>
                {renderRichContent(project.overview)}
              </div>
            )}

            {[
              {
                title: "What Users Can Do",
                content: project.whatUsersCanDo
                  ?.map((item) => `* ${item}`)
                  .join("\n"),
              },
              { title: "Why I built this", content: project.whyIBuiltThis },
              {
                title: "Features",
                content: project.features
                  ?.map((feature) => `* ${feature}`)
                  .join("\n"),
              },
              {
                title: "Tech Stack",
                content:
                  flatTechList.length > 0
                    ? flatTechList.map((tech) => `* ${tech}`).join("\n")
                    : null,
              },
              { title: "After Launch & Impact", content: project.impact },
              {
                title: "Future Plans",
                content: project.futurePlans
                  ?.map((plan) => `* ${plan}`)
                  .join("\n"),
              },
            ].map(
              (section, idx) =>
                section.content && (
                  <div key={idx} className="w-full">
                    <h3
                      className={`group relative text-[1.4rem] font-extrabold tracking-tight ${isDark ? "text-white" : "text-black"} mb-4 cursor-default transition-opacity`}
                    >
                      <span className="absolute right-full mr-2 font-bold text-gray-400 opacity-0 transition-opacity select-none group-hover:opacity-100 dark:text-zinc-500">
                        ##
                      </span>
                      {section.title}
                    </h3>
                    {renderRichContent(section.content)}
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      <LoginPopup
        isOpen={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
        message="Please sign in to submit ideas or contribute to this project."
        isDark={isDark}
      />

      {/* Preview Modal */}
      {showPreviewModal && hasVideoUrl && (
        <div className="animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md duration-200 md:p-8">
          <div className="animate-in zoom-in-95 relative flex h-full max-h-[85vh] w-full max-w-5xl flex-col duration-200">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Video Preview
              </h3>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative w-full flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
              {videoUrl?.includes("youtube.com") ||
              videoUrl?.includes("youtu.be") ? (
                <iframe
                  src={getYouTubeEmbedUrl(videoUrl || "")}
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <video
                  src={videoUrl || ""}
                  className="absolute inset-0 h-full w-full object-contain"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
