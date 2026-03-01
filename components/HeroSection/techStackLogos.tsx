"use client";

/**
 * Utility function to get dynamic tech stack icons from skillicons.dev.
 * You can import and use this anywhere in your Next.js project.
 * * @param iconId - The specific ID of the icon (e.g., 'java', 'js', 'flutter')
 * @param theme - The current theme of the application ('light' or 'dark')
 * @returns The full image URL
 */
export const techStack = [
  { name: "Android Studio", iconId: "androidstudio", desc: "IDE" },
  { name: "AWS", iconId: "aws", desc: "Cloud Services" },
  { name: "Cloudflare", iconId: "cloudflare", desc: "Security & Performance" },
  { name: "CSS", iconId: "css", desc: "Styling" },
  { name: "Dart", iconId: "dart", desc: "Language" },
  { name: "Discord", iconId: "discord", desc: "Communication" },
  { name: "Docker", iconId: "docker", desc: "Containerization" },
  { name: "Firebase", iconId: "firebase", desc: "BaaS" },
  { name: "FastAPI", iconId: "fastapi", desc: "Framework" },
  { name: "Figma", iconId: "figma", desc: "Design" },
  { name: "Flutter", iconId: "flutter", desc: "Mobile Framework" },
  { name: "Git", iconId: "git", desc: "Version Control" },
  { name: "GitHub", iconId: "github", desc: "Git Hosting" },
  { name: "Gmail", iconId: "gmail", desc: "Email" },
  { name: "Gradle", iconId: "gradle", desc: "Build Tool" },
  { name: "HTML", iconId: "html", desc: "Markup Language" },
  { name: "IntelliJ IDEA", iconId: "idea", desc: "IDE" },
  { name: "Java", iconId: "java", desc: "Language" },
  { name: "JavaScript", iconId: "js", desc: "Language" },
  { name: "LinkedIn", iconId: "linkedin", desc: "Professional Network" },
  { name: "Linux", iconId: "linux", desc: "OS" },
  { name: "MongoDB", iconId: "mongodb", desc: "Database" },
  { name: "MySQL", iconId: "mysql", desc: "Database" },
  { name: "Next.js", iconId: "nextjs", desc: "Framework" },
  { name: "Node.js", iconId: "nodejs", desc: "Runtime" },
  { name: "Notion", iconId: "notion", desc: "Productivity" },
  { name: "npm", iconId: "npm", desc: "Package Manager" },
  { name: "Obsidian", iconId: "obsidian", desc: "Note-taking" },
  { name: "Python", iconId: "py", desc: "Language" },
  { name: "PostgreSQL", iconId: "postgresql", desc: "Database" },
  { name: "PyCharm", iconId: "pycharm", desc: "IDE" },
  { name: "React", iconId: "react", desc: "Library" },
  { name: "Replit", iconId: "replit", desc: "Cloud IDE" },
  { name: "Stack Overflow", iconId: "stackoverflow", desc: "Community" },
  { name: "Tailwind CSS", iconId: "tailwind", desc: "Styling" },
  { name: "TypeScript", iconId: "ts", desc: "Language" },
  { name: "Twitter/X", iconId: "twitter", desc: "Social Media" },
  { name: "Ubuntu", iconId: "ubuntu", desc: "OS" },
  { name: "Vercel", iconId: "vercel", desc: "Deployment" },
  { name: "VS Code", iconId: "vscode", desc: "IDE" },
];
export const getTechLogoUrl = (
  iconId: string,
  theme: "light" | "dark" = "light"
) => {
  return `https://skillicons.dev/icons?i=${iconId}&theme=${theme}`;
};
