import { useEffect, useRef, useState } from "react";

export function useAnimatedCounter({ end, decimals = 0, duration = 1200 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;

        hasRun.current = true;
        const start = performance.now();

        const frame = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(end * eased);

          if (progress < 1) {
            requestAnimationFrame(frame);
          } else {
            setValue(end);
          }
        };

        requestAnimationFrame(frame);
        observer.unobserve(node);
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [decimals, duration, end]);

  return { ref, value: value.toFixed(decimals) };
}
