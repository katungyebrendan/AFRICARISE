import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./components/navigation";
import { ThemeToggle } from "./components/theme-toggle";
import "./globals.css";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MunghaRise Africa",
  description:
    "Rising Opportunities. Transforming Lives. Empowering women and youth across Africa through entrepreneurship, innovation, leadership, and sustainable livelihoods.",
  icons: {
    icon: [
      { url: "/favicon.jpg", type: "image/jpeg" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: [{ url: "/favicon.jpg", type: "image/jpeg" }],
  },
};

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/projects", label: "Projects" },
  { href: "/impact", label: "Impact" },
  { href: "/partners", label: "Partners" },
  { href: "/news", label: "News" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="sticky top-0 z-30 border-b border-brand-green/15 bg-background/90 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand-green/15 bg-white shadow-[0_8px_28px_rgba(15,90,56,0.12)] transition-transform group-hover:scale-105">
                <Image
                  src="/logo.jpg"
                  alt="MunghaRise Africa logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                  priority
                />
              </span>
              <div>
                <span className="font-heading block text-xl tracking-wide text-brand-gold">
                  MunghaRise Africa
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-purple">
                  Rising Opportunities. Transforming Lives.
                </span>
              </div>
            </Link>
            <div className="flex flex-wrap items-center gap-5 text-sm font-semibold sm:justify-end">
              <Navigation links={navigationLinks} />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex-1 relative overflow-x-clip">{children}</main>

        <footer className="border-t border-brand-green/15 bg-background/90">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <p className="font-heading text-2xl text-brand-gold">MunghaRise Africa</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-foreground/80">
                Rise. Empower. Transform.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple">
                Quick Links
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {navigationLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple">
                Newsletter
              </p>
              <p className="mt-4 text-sm leading-7 text-foreground/80">
                Subscribe to receive updates on programs, opportunities, grants, and events.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-brand-purple px-5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Stay Connected
              </Link>
            </div>
          </div>
          <div className="border-t border-brand-green/10 px-6 py-4 text-center text-sm text-foreground/70">
            © 2026 MunghaRise Africa. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
