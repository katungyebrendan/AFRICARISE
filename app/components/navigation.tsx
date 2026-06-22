"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationLink = {
  href: string;
  label: string;
};

type NavigationProps = {
  links: NavigationLink[];
};

export function Navigation({ links }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
      {links.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={isActive ? "nav-link nav-link-active" : "nav-link"}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
