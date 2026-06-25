"use client";

import { useEffect, useRef, useState } from "react";

type MobileScrollHeaderProps = {
  children: React.ReactNode;
};

export function MobileScrollHeader({ children }: MobileScrollHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!mobileQuery.matches) {
        setHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY <= 8) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 4) {
        setHidden(true);
      } else if (currentY > 8) {
        setHidden(true);
      }

      lastScrollY.current = currentY;
    };

    const handleViewportChange = () => {
      if (!mobileQuery.matches) {
        setHidden(false);
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  return (
    <div
      className={[
        "transition-transform duration-300 ease-out will-change-transform",
        hidden ? "max-sm:-translate-y-full max-sm:pointer-events-none" : "translate-y-0",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
