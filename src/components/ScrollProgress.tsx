"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setWidth(0);
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
      setWidth(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}
