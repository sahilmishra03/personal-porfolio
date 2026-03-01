"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: (x?: number, y?: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme store for useSyncExternalStore
let themeListeners: Array<() => void> = [];

const themeStore = {
  getSnapshot: (): boolean => {
    if (typeof window === "undefined") return true; // SSR fallback
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme !== "light";
    } catch {
      return true; // Default to dark if localStorage fails
    }
  },
  getServerSnapshot: (): boolean => {
    // Return consistent value for SSR - default to dark
    return true;
  },
  subscribe: (listener: () => void): (() => void) => {
    themeListeners.push(listener);
    return () => {
      themeListeners = themeListeners.filter((l) => l !== listener);
    };
  },
  emitChange: () => {
    themeListeners.forEach((listener) => listener());
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const isDark = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  // Handle initial theme sync after mount to prevent hydration issues
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    if (isDarkMode !== isDark) {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDark]);

  // Sync dark class with DOM when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = useCallback((x?: number, y?: number) => {
    const currentIsDark = themeStore.getSnapshot();
    const newIsDark = !currentIsDark;
    const newTheme = newIsDark ? "dark" : "light";

    // Optimized theme application with single DOM operation
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", newIsDark);
      localStorage.setItem("theme", newTheme);
      themeStore.emitChange();
    };

    // Fallback for browsers without View Transition API
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyTheme();
      return;
    }

    const clickX = x ?? window.innerWidth - 24;
    const clickY = y ?? 24;
    const endRadius = Math.hypot(
      Math.max(clickX, window.innerWidth - clickX),
      Math.max(clickY, window.innerHeight - clickY)
    );

    const transition = document.startViewTransition(applyTheme);

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${clickX}px ${clickY}px)`,
            `circle(${endRadius}px at ${clickX}px ${clickY}px)`,
          ],
        },
        {
          duration: 400,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Only export useTheme for the NavBar toggle button
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
