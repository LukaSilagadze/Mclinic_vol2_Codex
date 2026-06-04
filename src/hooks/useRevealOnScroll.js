import { useEffect, useRef } from "react";

export function useRevealOnScroll(options) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 12% 0px", ...(options || {}) }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return ref;
}
