// Icon caching utility for faster loading
const iconCache = new Map<string, string>();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export const getCachedIconUrl = (
  iconId: string,
  theme: "light" | "dark" = "light"
): string => {
  const cacheKey = `${iconId}-${theme}`;
  const cached = iconCache.get(cacheKey);

  if (cached) {
    const [url, timestamp] = cached.split("|");
    if (Date.now() - parseInt(timestamp) < CACHE_DURATION) {
      return url;
    }
  }

  const url = `https://skillicons.dev/icons?i=${iconId}&theme=${theme}&perline=1`;
  iconCache.set(cacheKey, `${url}|${Date.now()}`);

  return url;
};

export const preloadIcon = (
  iconId: string,
  theme: "light" | "dark" = "light"
) => {
  const url = getCachedIconUrl(iconId, theme);
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = url;
  document.head.appendChild(link);
};

export const preloadCriticalIcons = (theme: "light" | "dark") => {
  const criticalIcons = ["react", "nextjs", "ts", "js", "flutter", "firebase"];
  criticalIcons.forEach((icon) => preloadIcon(icon, theme));
};
