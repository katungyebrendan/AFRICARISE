import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vet Clinic",
  description: "Veterinary care: checkups, vaccinations, surgery, and emergency care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="border-b border-foreground/10">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Happy Tails Veterinary Clinic
            </Link>
            <nav className="flex flex-wrap items-center gap-4 text-sm font-medium sm:justify-end sm:gap-6">
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
              <Link
                href="/appointment"
                className="hover:underline underline-offset-4"
              >
                Appointment
              </Link>
              <Link
                href="/services"
                className="hover:underline underline-offset-4"
              >
                Services
              </Link>
              <Link href="/about" className="hover:underline underline-offset-4">
                About
              </Link>
              <Link
                href="/contact"
                className="hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
