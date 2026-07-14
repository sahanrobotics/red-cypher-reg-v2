import { useEffect, useState } from "react";

export function useIntersectionObserver(
  elementRef,
  { threshold = 0, root = null, rootMargin = "10%", freezeOnceVisible = false } = {}
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = elementRef?.current;
    
    if (!node || !window.IntersectionObserver) {
      setIntersecting(true); // Fallback if no observer
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIntersecting(isElementIntersecting);
        if (isElementIntersecting && freezeOnceVisible) {
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible]);

  return isIntersecting;
}
