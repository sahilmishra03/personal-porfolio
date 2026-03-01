// Image fallback utilities using public paths
export const mockupImages = [
  "/mockups/1.png",
  "/mockups/2.png",
  "/mockups/3.png",
  "/mockups/4.png",
  "/mockups/5.png",
  "/mockups/6.png",
  "/mockups/7.png",
];

export const getFallbackImage = (
  projectId: string | number,
  projectIndex?: number
) => {
  // Use projectIndex if provided, otherwise try to parse ID
  const index =
    projectIndex !== undefined
      ? projectIndex
      : parseInt(String(projectId)) || 1;
  // Use only first 6 images (indices 0-5)
  const normalizedIndex = (index - 1) % 6;
  return mockupImages[normalizedIndex];
};

export const getPlaceholderImage = () => "/file.svg";

// Helper to determine if an image URL is likely to work
export const isValidImageUrl = (url?: string) => {
  if (!url || url.trim() === "") return false;

  const trimmedUrl = url.trim();

  // Check if it's a valid URL format
  try {
    new URL(trimmedUrl);
    return true;
  } catch {
    // Not a valid URL, check if it's a local path starting with /
    return trimmedUrl.startsWith("/") || trimmedUrl.startsWith("./");
  }
};

// Progressive image loading strategy
export const getImageWithFallbacks = (
  primaryUrl?: string,
  projectId?: string | number,
  fallbackIndex?: number,
  projectArrayIndex?: number
) => {
  // Use projectArrayIndex if provided for unique assignment, otherwise fallback to other methods
  const effectiveIndex =
    projectArrayIndex !== undefined ? projectArrayIndex : fallbackIndex;

  // Strategy 1: Try primary URL if valid
  if (primaryUrl && isValidImageUrl(primaryUrl)) {
    return primaryUrl;
  }

  // Strategy 2: Use getFallbackImage for unique assignment (uses first 6 images)
  if (projectId) {
    return getFallbackImage(projectId, effectiveIndex);
  }

  // Strategy 3: Use indexed fallback (use only first 6 images)
  const fallbackIdx = effectiveIndex !== undefined ? effectiveIndex : 1;
  return mockupImages[(fallbackIdx - 1) % 6];
};

// Image optimization utilities
export const getOptimizedImageProps = (src: string | { src: string }) => {
  const isString = typeof src === "string";
  const isExternal =
    isString && (src.startsWith("http") || src.startsWith("//"));

  return {
    unoptimized: isExternal,
    priority: false,
    quality: isExternal ? 75 : 80,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  };
};

// Generate responsive image sizes
export const getResponsiveImageSizes = () => {
  return {
    small: "(max-width: 640px) 100vw",
    medium: "(max-width: 1024px) 50vw",
    large: "(max-width: 1536px) 33vw",
    xlarge: "25vw",
  };
};
