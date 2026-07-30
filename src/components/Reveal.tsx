"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style,
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-reveal className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}
