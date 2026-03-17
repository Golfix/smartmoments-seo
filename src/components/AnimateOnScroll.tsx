"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale"
  | "reveal";

interface Props {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animations: Record<AnimationType, { from: string; to: string }> = {
  "fade-up": {
    from: "opacity-0 translate-y-12",
    to: "opacity-100 translate-y-0",
  },
  "fade-down": {
    from: "opacity-0 -translate-y-12",
    to: "opacity-100 translate-y-0",
  },
  "fade-left": {
    from: "opacity-0 translate-x-12",
    to: "opacity-100 translate-x-0",
  },
  "fade-right": {
    from: "opacity-0 -translate-x-12",
    to: "opacity-100 translate-x-0",
  },
  fade: {
    from: "opacity-0",
    to: "opacity-100",
  },
  scale: {
    from: "opacity-0 scale-95",
    to: "opacity-100 scale-100",
  },
  reveal: {
    from: "opacity-0 translate-y-8 blur-[2px]",
    to: "opacity-100 translate-y-0 blur-0",
  },
};

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const anim = animations[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? anim.to : anim.from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
