import { useAnimatedCounter } from "../hooks/useAnimatedCounter.js";

export default function AnimatedCounter({ end, decimals = 0, suffix = "" }) {
  const { ref, value } = useAnimatedCounter({ end, decimals });

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
