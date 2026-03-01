"use client";

import * as React from "react";

import { useRouter } from "next/navigation";

import { Command as CommandPrimitive } from "cmdk";
import {
  ArrowRight,
  BookOpen,
  Code,
  Search,
  TrendingUp,
  Trophy,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ children, open, onOpenChange, className, ...props }, ref) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {/* Backdrop */}
      <div
        className="bg-background/80 fixed inset-0 backdrop-blur-sm transition-all duration-100"
        onClick={() => onOpenChange?.(false)}
      />

      {/* Dialog */}
      <div
        ref={ref}
        className={cn(
          "bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-xl border shadow-lg sm:rounded-xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});
CommandDialog.displayName = "CommandDialog";

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "max-h-[250px] overflow-x-hidden overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
      className
    )}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="text-muted-foreground py-6 text-center text-sm"
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("bg-border -mx-1 h-px", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </CommandPrimitive.Item>
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "text-muted-foreground ml-auto text-xs tracking-widest",
      className
    )}
    {...props}
  />
));
CommandShortcut.displayName = "CommandShortcut";

interface SearchDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const searchItems: SearchItem[] = [
  // Portfolio Sections
  {
    id: "about",
    title: "About Me",
    description: "Learn more about Sahil Mishra",
    category: "Portfolio",
    icon: User,
    href: "/#about",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Explore portfolio projects",
    category: "Portfolio",
    icon: Code,
    href: "/#projects",
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    description: "DSA and coding challenges",
    category: "Portfolio",
    icon: TrendingUp,
    href: "/#problem-solving",
  },
  {
    id: "github",
    title: "GitHub Stats",
    description: "View GitHub contributions and statistics",
    category: "Portfolio",
    icon: Code,
    href: "/#github",
  },
  {
    id: "learning",
    title: "Currently Learning",
    description: "See what technologies I'm learning",
    category: "Portfolio",
    icon: BookOpen,
    href: "/#learning",
  },
  {
    id: "growth",
    title: "Growth Timeline",
    description: "Track my learning journey",
    category: "Portfolio",
    icon: TrendingUp,
    href: "/#growth",
  },
  {
    id: "achievements",
    title: "Achievements",
    description: "View accomplishments and awards",
    category: "Portfolio",
    icon: Trophy,
    href: "/#achievements",
  },

  // Projects from JSON
  {
    id: "youtube-revision-panel",
    title: "YouTube Revision Panel",
    description: "Smart Chrome extension for playlist revision with timestamps",
    category: "Projects",
    icon: Code,
    href: "/projects/youtube-revision-panel",
  },
  {
    id: "eduguide",
    title: "EduGuide",
    description: "Smart teacher discovery and guidance platform for students",
    category: "Projects",
    icon: Code,
    href: "/projects/eduguide",
  },
  {
    id: "openforge",
    title: "OpenForge",
    description: "Community-driven open-source collaboration platform",
    category: "Projects",
    icon: Code,
    href: "/projects/openforge",
  },
  {
    id: "todo-app-flutter",
    title: "TODO App",
    description: "Offline-first task management app built with Flutter",
    category: "Projects",
    icon: Code,
    href: "/projects/todo-app-flutter",
  },
  {
    id: "vakeel-diary",
    title: "Vakeel Diary",
    description:
      "Digital legal practice management system for Indian advocates",
    category: "Projects",
    icon: Code,
    href: "/projects/vakeel-diary",
  },
  {
    id: "babua-lms",
    title: "Babua LMS",
    description: "Cohort-based learning management platform",
    category: "Projects",
    icon: Code,
    href: "/projects/babua-lms",
  },
];

const SearchDialog = ({ isOpen, setIsOpen }: SearchDialogProps) => {
  const router = useRouter();

  // Enhanced search with keyword matching and fuzzy logic
  const getSearchValue = (item: SearchItem) => {
    const keywords = {
      dsa: [
        "algorithm",
        "data structure",
        "coding",
        "interview",
        "problem solving",
        "leetcode",
        "competitive",
      ],
      flutter: [
        "mobile",
        "app",
        "android",
        "ios",
        "dart",
        "cross-platform",
        "ui",
        "todo",
        "task",
      ],
      firebase: [
        "database",
        "backend",
        "auth",
        "hosting",
        "realtime",
        "cloud",
        "lms",
        "learning",
      ],
      backend: [
        "server",
        "api",
        "node",
        "express",
        "database",
        "system design",
        "legal",
        "management",
      ],
      learning: [
        "course",
        "tutorial",
        "education",
        "study",
        "guide",
        "documentation",
        "cohort",
        "platform",
      ],
      about: ["profile", "bio", "introduction", "who", "sahil", "mishra"],
      projects: [
        "portfolio",
        "work",
        "apps",
        "applications",
        "development",
        "chrome",
        "extension",
      ],
      github: [
        "code",
        "repository",
        "contributions",
        "stats",
        "commits",
        "open-source",
      ],
      achievements: ["awards", "accomplishments", "success", "milestones"],
      youtube: [
        "video",
        "playlist",
        "revision",
        "panel",
        "chrome",
        "extension",
      ],
      teacher: ["education", "guidance", "platform", "discovery", "eduguide"],
      legal: ["lawyer", "advocate", "case", "management", "diary", "vakeel"],
      collaboration: ["community", "open-source", "platform", "openforge"],
    };

    let searchValue = `${item.title} ${item.description}`;

    // Add related keywords based on item content
    Object.entries(keywords).forEach(([key, relatedWords]) => {
      if (
        searchValue.toLowerCase().includes(key) ||
        item.title.toLowerCase().includes(key)
      ) {
        searchValue += ` ${relatedWords.join(" ")}`;
      }
    });

    return searchValue;
  };

  const handleSelect = (item: SearchItem) => {
    setIsOpen(false);
    if (item.href.startsWith("http")) {
      // External link - open in new tab
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else if (item.href.startsWith("#")) {
      // Use router for hash navigation to avoid direct DOM manipulation
      router.push(item.href);
    } else if (item.href.includes("/#")) {
      router.push(item.href);
    } else {
      router.push(item.href);
    }
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search portfolio and projects... (try: 'youtube', 'flutter', 'legal', 'learning')" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Portfolio">
            {searchItems
              .filter((item) => item.category === "Portfolio")
              .map((item) => (
                <CommandItem
                  key={item.id}
                  value={getSearchValue(item)}
                  onSelect={() => handleSelect(item)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-muted-foreground text-sm">
                      {item.description}
                    </div>
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </CommandItem>
              ))}
          </CommandGroup>

          <CommandGroup heading="Projects">
            {searchItems
              .filter((item) => item.category === "Projects")
              .map((item) => (
                <CommandItem
                  key={item.id}
                  value={getSearchValue(item)}
                  onSelect={() => handleSelect(item)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-muted-foreground text-sm">
                      {item.description}
                    </div>
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
};

export default SearchDialog;
export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
