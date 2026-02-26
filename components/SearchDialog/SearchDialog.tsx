"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search, Calendar, Calculator, Smile, User, CreditCard, Settings, Briefcase, Code, Globe, BookOpen, Trophy, TrendingUp, Users, ArrowRight, Home } from "lucide-react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(({ children, open, onOpenChange, className, ...props }, ref) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-all duration-100"
        onClick={() => onOpenChange?.(false)}
      />
      
      {/* Dialog */}
      <div 
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-xl border bg-background shadow-lg sm:rounded-xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
})
CommandDialog.displayName = "CommandDialog"

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[250px] overflow-y-auto overflow-x-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", className)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm text-muted-foreground"
    {...props}
  />
))
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </CommandPrimitive.Item>
))
CommandItem.displayName = CommandPrimitive.Item.displayName


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
  { id: "about", title: "About Me", description: "Learn more about Sahil Mishra", category: "Portfolio", icon: User, href: "/#about" },
  { id: "experience", title: "Experience", description: "View work experience and background", category: "Portfolio", icon: Briefcase, href: "/#experience" },
  { id: "projects", title: "Projects", description: "Explore portfolio projects", category: "Portfolio", icon: Code, href: "/#projects" },
  { id: "problem-solving", title: "Problem Solving", description: "DSA and coding challenges", category: "Portfolio", icon: TrendingUp, href: "/#problem-solving" },
  { id: "github", title: "GitHub Stats", description: "View GitHub contributions and statistics", category: "Portfolio", icon: Code, href: "/#github" },
  { id: "learning", title: "Currently Learning", description: "See what technologies I'm learning", category: "Portfolio", icon: BookOpen, href: "/#learning" },
  { id: "growth", title: "Growth Timeline", description: "Track my learning journey", category: "Portfolio", icon: TrendingUp, href: "/#growth" },
  { id: "achievements", title: "Achievements", description: "View accomplishments and awards", category: "Portfolio", icon: Trophy, href: "/#achievements" },
  { id: "resources", title: "Resources", description: "Tools and resources I use", category: "Portfolio", icon: Globe, href: "/#resources" },
  
  // Individual Projects
  { id: "rainbow-app", title: "Rainbow App", description: "Colorful Digital Experience - Interactive color mixing and design tools", category: "Projects", icon: Code, href: "/projects/rainbow-app" },
  { id: "neural-paint", title: "Neural Paint", description: "AI-Powered Art Generator - Text to image conversion", category: "Projects", icon: Code, href: "/projects/neural-paint" },
];

const SearchDialog = ({ isOpen, setIsOpen }: SearchDialogProps) => {
  const router = useRouter();

  const handleSelect = (item: SearchItem) => {
    setIsOpen(false);
    if (item.href.startsWith('#')) {
      window.location.hash = item.href.slice(1);
    } else if (item.href.includes('/#')) {
      router.push(item.href);
    } else {
      router.push(item.href);
    }
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Portfolio">
            {searchItems.filter(item => item.category === "Portfolio").map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.title} ${item.description}`}
                onSelect={() => handleSelect(item)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
                <ArrowRight className="ml-2 h-4 w-4" />
              </CommandItem>
            ))}
          </CommandGroup>
          
          <CommandGroup heading="Projects">
            {searchItems.filter(item => item.category === "Projects").map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.title} ${item.description}`}
                onSelect={() => handleSelect(item)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
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
}