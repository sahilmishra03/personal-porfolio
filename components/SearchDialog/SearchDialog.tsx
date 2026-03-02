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

import projectsData from "@/data/projects.json";
import { cn } from "@/lib/utils";
import { ProjectType } from "@/types/project";

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
          // Changed w-full to w-[95vw] sm:w-full to give edge padding on mobile
          "bg-background fixed top-[50%] left-[50%] z-50 grid w-[95vw] max-w-md translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-xl border shadow-lg sm:w-full sm:rounded-xl",
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
      "max-h-[300px] overflow-x-hidden overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:max-h-[250px] [&::-webkit-scrollbar]:hidden",
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
      // Increased padding (py-2.5) for better mobile touch targets
      "aria-selected:bg-accent aria-selected:text-accent-foreground relative flex cursor-default items-center rounded-sm px-2 py-2.5 text-sm outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 sm:py-1.5",
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

  // Dynamic Projects from JSON
  ...(projectsData as ProjectType[]).map((project) => ({
    id: project.id,
    title:
      project.title?.split("–")[0].trim() ||
      project.title ||
      "Untitled Project",
    description: project.shortDescription || "No description available",
    category: "Projects" as const,
    icon: Code,
    href: `/projects/${project.id}`,
  })),
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
      portfolio: [
        "website",
        "personal",
        "showcase",
        "projects",
        "skills",
        "about",
        "sahil",
        "mishra",
        "search",
        "modern",
        "design",
      ],
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
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search portfolio and projects..." />
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
                  <item.icon className="mr-2 h-4 w-4 shrink-0" />
                  <div className="flex-1 overflow-hidden pr-2">
                    <div className="truncate font-medium">{item.title}</div>
                    <div className="text-muted-foreground truncate text-xs sm:text-sm">
                      {item.description}
                    </div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 opacity-50" />
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
                  {/* Added shrink-0 to prevent icon squishing */}
                  <item.icon className="mr-2 h-4 w-4 shrink-0" />

                  {/* Added overflow-hidden and pr-2 to constraint the text box */}
                  <div className="flex-1 overflow-hidden pr-2">
                    {/* Added truncate class here */}
                    <div className="truncate font-medium">{item.title}</div>
                    <div className="text-muted-foreground truncate text-xs sm:text-sm">
                      {item.description}
                    </div>
                  </div>

                  {/* Pushed arrow to end and prevented squishing */}
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 opacity-50" />
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
