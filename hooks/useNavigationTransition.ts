"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useNavigationTransition() {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return isNavigating;
}
