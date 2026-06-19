import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Link from "next/link";
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
    "Empowering youth and women through skills, mentorship, and community-led transformation.",
};

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
              <span className="inline-block h-3 w-3 rounded-full bg-brand-gold shadow-[0_0_24px_rgba(231,161,21,0.7)] transition-transform group-hover:scale-110" />
              <span className="font-heading text-xl tracking-wide text-brand-green">
                MunghaRise Africa
              </span>
            </Link>
            <div className="flex flex-wrap items-center gap-5 text-sm font-semibold sm:justify-end">
              <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link href="/" className="nav-link">
                Home
              </Link>
                <Link href="/appointment" className="nav-link">
                  Get Involved
                </Link>
                <Link href="/services" className="nav-link">
                  Programs
                </Link>
                <Link href="/about" className="nav-link">
                About
              </Link>
                <Link href="/contact" className="nav-link">
                Contact
              </Link>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex-1 relative overflow-x-clip">{children}</main>
      </body>
    </html>
  );
}
