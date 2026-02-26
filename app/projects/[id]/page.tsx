"use client";

import React, { useState } from "react";
import {
  Globe,
  Github,
  Lightbulb,
  GitPullRequest,
  ArrowLeft,
  User,
  Calendar,
  Users,
  Briefcase,
  Activity,
  Linkedin,
  X,
  Play,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/hooks/ThemeProvider";
import { getTechLogoUrl } from "@/components/HeroSection/techStackLogos";

// --- Mock Components for UI ---

// Tech icon mappings using centralized system
const getTechIcon = (tech: string) => {
  const iconMap: Record<string, string> = {
    React: "react",
    "React.js": "react",
    "Node.js": "nodejs",
    Express: "express",
    "Express.js": "express",
    MongoDB: "mongodb",
    Redis: "redis",
    BullMQ: "redis",
    "Socket.io": "socketio",
    JWT: "nodejs",
    "Discord.js": "discord",
    "Cloudflare R2": "cloudflare",
    dns2: "nodejs",
    dotenv: "nodejs",
    Gemini: "gcp",
    TypeScript: "ts",
    PostgreSQL: "postgresql",
    Python: "py",
    TensorFlow: "tensorflow",
    FastAPI: "fastapi",
    Canvas: "html",
    WebGL: "html",
  };
  return iconMap[tech] || null;
};

const MarkdownRenderer = ({ content }: { content: string }) => (
  <div className="text-zinc-400 whitespace-pre-wrap">{content}</div>
);

const LoginPopup = ({ isOpen, onClose, message }: { isOpen: boolean, onClose: () => void, message: string }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl max-w-sm w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-white text-lg font-bold mb-2">Sign In Required</h3>
        <p className="text-zinc-400 text-sm mb-6">{message}</p>
        <button onClick={onClose} className="w-full py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
          Close Preview
        </button>
      </div>
    </div>
  );
};

// --- Dummy Data ---

const DUMMY_PROJECT = {
  id: "proj_123",
  title: "TechFlow",
  shortDescription: "A modern project management platform designed to streamline team collaboration and boost productivity with intelligent automation and real-time insights.",
  mockupImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2070&auto=format&fit=crop",
  bannerGradient: "from-blue-600 via-indigo-700 to-purple-800",
  tags: ["Project Management", "Team Collaboration", "SaaS"],
  timeline: "Mar 2026 - Present",
  role: "Full Stack Developer",
  team: "5 Members",
  status: "Active Development",
  techStack: "React, Node.js, TypeScript, PostgreSQL, Redis",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
  liveUrl: "https://example.com/techflow",
  githubUrl: "https://github.com/example/techflow",
  overview: "TechFlow revolutionizes project management by combining intelligent task automation with real-time collaboration tools. It features AI-powered task prioritization, comprehensive analytics dashboards, and seamless integration with popular development workflows.",
  whatUsersCanDo: "• Create and manage projects with intuitive drag-and-drop interfaces\n• Collaborate in real-time with team members\n• Track progress with advanced analytics and reporting\n• Automate repetitive tasks with smart workflows",
  whyIBuiltThis: "Traditional project management tools often lack the intelligence and flexibility needed for modern development teams. I wanted to create a platform that anticipates needs and adapts to different workflows.",
  features: "• AI-Powered Task Prioritization\n• Real-time Collaboration Tools\n• Advanced Analytics Dashboard\n• Custom Workflow Automation\n• Integration with Popular Dev Tools",
  impact: "Currently in private beta with 20+ teams testing the platform, gathering feedback to refine the user experience and expand feature capabilities.",
  futurePlans: "• Mobile applications for iOS and Android\n• Advanced AI-powered project insights\n• Enterprise-grade security features\n• Integration with 50+ third-party services"
};

const DUMMY_FEATURES = [
  { id: "f1", name: "Jordan Smith", github: "jordans", type: "idea" },
  { id: "f2", name: "Taylor Chen", github: "taylormc", type: "idea" },
  { id: "f3", name: "Alex Rivera", github: "alexr", type: "idea" },
];

const DUMMY_CONTRIBUTIONS = [
  { id: "c1", name: "Morgan Lee", github: "morganl", linkedin: "https://linkedin.com/in/example", prLink: "https://github.com/example/techflow/pull/1", type: "code" },
  { id: "c2", name: "Casey Brown", github: "caseyb", prLink: "https://github.com/example/techflow/pull/2", type: "code" },
  { id: "c3", name: "Riley Davis", github: "rileyd", linkedin: "https://linkedin.com/in/example", prLink: "https://github.com/example/techflow/pull/3", type: "code" },
  { id: "c4", name: "Jamie Wilson", github: "jamiew", prLink: "https://github.com/example/techflow/pull/4", type: "code" },
];


// --- Components ---

// COMPACT STAT CARD
const StatCard = ({
  icon: Icon,
  label,
  value,
  highlight = false,
}: {
  icon: any;
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className="flex flex-col justify-center px-3 py-2.5 rounded-lg bg-card/40 border border-border hover:border-muted-foreground hover:bg-card/60 transition-all group w-full">
    <div className="flex items-center gap-2 mb-1">
      <Icon
        className={`w-3.5 h-3.5 ${highlight ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
      />
      <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </span>
    </div>
    <span
      className={`text-sm font-semibold truncate ${highlight ? "text-foreground" : "text-card-foreground"}`}
    >
      {value}
    </span>
  </div>
);

// Clean Profile Card Component
const ContributorProfileCard = ({
  name,
  github,
  linkedin,
  prLink,
  type = "idea",
}: {
  name: string;
  github?: string;
  linkedin?: string;
  prLink?: string;
  type?: "idea" | "code";
}) => {
  const isIdea = type === "idea";
  const iconColorClass = isIdea
    ? "text-yellow-500 bg-yellow-500/10 border-yellow-500/20"
    : "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";

  return (
    <div className="group flex flex-col justify-between p-4 rounded-xl bg-card/40 border border-border hover:border-muted-foreground hover:bg-card/80 transition-all duration-300 w-full">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center border ${iconColorClass}`}
        >
          <User
            className={`w-5 h-5 ${isIdea ? "text-yellow-500" : "text-emerald-500"}`}
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="font-semibold text-card-foreground text-sm group-hover:text-foreground transition-colors truncate">
            {name}
          </span>
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
            {isIdea ? "Idea Creator" : "Contributor"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        {github && (
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-card text-muted-foreground hover:bg-foreground hover:text-background transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-card text-muted-foreground hover:bg-[#0077b5] hover:text-white transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {prLink && !isIdea && (
          <a
            href={prLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            title="View Pull Request"
          >
            <GitPullRequest className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default function ProjectDetailPageUI() {
  const [project] = useState<any>(DUMMY_PROJECT);
  const [approvedFeatures] = useState<any[]>(DUMMY_FEATURES);
  const [approvedContributions] = useState<any[]>(DUMMY_CONTRIBUTIONS);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const { isDark } = useTheme();

  // Mock authentication state for UI testing
  const isSignedIn = false; 

  const techStackArray = project.techStack.split(",").map((t: string) => t.trim());
  const hasVideoUrl = project.videoUrl && project.videoUrl.trim() !== "";
  const videoUrl = project.videoUrl;

  // Get tech icon URL with theme support
  const getTechIconUrl = (techName: string) => {
    const iconId = getTechIcon(techName);
    if (!iconId) return null;
    
    const theme = isDark ? 'dark' : 'light';
    return getTechLogoUrl(iconId, theme);
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com/watch") || url.includes("youtu.be/");
  };

  const isGoogleDriveUrl = (url: string) => {
    return url.includes("drive.google.com");
  };

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
    return url;
  };

  const getGoogleDriveEmbedUrl = (url: string) => {
    return url.replace(/\/view.*/, "/preview");
  };

  const proseClasses = `
    prose prose-invert max-w-none w-full
    prose-headings:text-foreground prose-headings:font-bold prose-headings:mb-3 prose-headings:text-xl
    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-normal prose-p:text-base prose-p:my-4
    prose-strong:text-foreground prose-strong:font-semibold
    prose-ul:text-muted-foreground prose-li:marker:text-muted-foreground
    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
    break-words
  `;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-white/20 pb-20 w-full overflow-x-hidden">
      {/* Top Navigation */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-20 pb-6">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <div className="w-6 h-6 rounded-full bg-card border-border flex items-center justify-center group-hover:bg-accent transition-colors">
            <ArrowLeft className="w-3 h-3" />
          </div>
          Back to Projects
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* ================= HERO SECTION ================= */}
        <div className="w-full rounded-2xl relative overflow-hidden mb-8 border border-border bg-card shadow-xl shadow-black/50">
          {project.mockupImage ? (
            <img
              src={project.mockupImage}
              alt={`${project.title} mockup`}
              className="w-full h-auto block object-cover max-h-[400px]"
            />
          ) : (
            <div className={`w-full aspect-video bg-gradient-to-br ${project.bannerGradient}`}></div>
          )}
        </div>

        {/* Title & Meta Area */}
        <div className="flex flex-col gap-4 mb-8 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-2">
            {project.tags?.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full bg-card border border-border text-[10px] text-muted-foreground font-medium whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full mt-2">
            {project.timeline && <StatCard icon={Calendar} label="Timeline" value={project.timeline} />}
            {project.role && <StatCard icon={Briefcase} label="Role" value={project.role} />}
            {project.team && <StatCard icon={Users} label="Team Size" value={project.team} />}
            <StatCard icon={Activity} label="Status" value={project.status} highlight={true} />
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-4">
            <div className="flex items-center justify-center gap-2 mt-2 sm:mt-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-muted-foreground transition-colors px-3 py-2"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-muted-foreground transition-colors px-3 py-2"
              >
                <Github className="w-3.5 h-3.5" /> Source Code
              </a>
            </div>
          </div>
        </div>

        {/* ================= CONTENT BODY ================= */}
        <div className="w-full space-y-12">
          {project.overview && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-muted-foreground font-light">#</span> Overview
              </h2>
              <div className={proseClasses}>
                <MarkdownRenderer content={project.overview} />
              </div>
            </div>
          )}

          {techStackArray.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-muted-foreground font-light">#</span> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {techStackArray.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="inline-flex h-fit items-center gap-1.5 rounded-md border bg-card px-3 py-1.5 text-xs text-card-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
                  >
                    {getTechIconUrl(tech) && (
                      <Image
                        src={getTechIconUrl(tech)!}
                        alt={tech}
                        width={14}
                        height={14}
                        className="h-3.5 w-3.5"
                        unoptimized
                      />
                    )}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {[
            { title: "What Users Can Do", content: project.whatUsersCanDo },
            { title: "Why I built this", content: project.whyIBuiltThis },
            { title: "Features", content: project.features },
            { title: "After launch & Impact", content: project.impact },
            { title: "Future Plans", content: project.futurePlans },
          ].map(
            (section, idx) =>
              section.content && (
                <div key={idx} className="w-full">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-muted-foreground font-light">#</span> {section.title}
                  </h2>
                  <div className={proseClasses}>
                    <MarkdownRenderer content={section.content} />
                  </div>
                </div>
              ),
          )}

          <div className="pt-10 border-t border-border flex flex-col items-center justify-center gap-8">
            <Link
              href="#"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      <LoginPopup
        isOpen={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
        message="Please sign in to submit ideas or contribute to this project."
      />

      {/* Preview Modal */}
      {showPreviewModal && hasVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-semibold">Video Preview</h3>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              {isYouTubeUrl(videoUrl) ? (
                <iframe
                  src={getYouTubeEmbedUrl(videoUrl)}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : isGoogleDriveUrl(videoUrl) ? (
                <iframe
                  src={getGoogleDriveEmbedUrl(videoUrl)}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <video src={videoUrl} className="absolute inset-0 w-full h-full object-contain" controls autoPlay />
              )}
            </div>

            {project.liveUrl && (
              <div className="flex justify-center mt-6">
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-zinc-200 rounded-lg transition-colors text-sm font-medium"
                >
                  <Globe className="w-4 h-4" />
                  Visit Live Site
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}