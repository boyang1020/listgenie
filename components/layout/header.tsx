"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="hidden font-bold sm:inline-block text-xl">
                ListGenie
              </span>
            </div>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              className="transition-colors hover:text-primary"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="transition-colors hover:text-primary"
              href="#pricing"
            >
              Pricing
            </Link>
            <Link
              className="transition-colors hover:text-primary"
              href="#testimonials"
            >
              Reviews
            </Link>
            <Link
              className="transition-colors hover:text-primary"
              href="/docs"
            >
              Docs
            </Link>
          </nav>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle Menu</span>
        </button>

        {/* Mobile logo */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="flex items-center space-x-2 md:hidden" href="/">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">ListGenie</span>
            </Link>
          </div>
          <nav className="flex items-center">
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden border-t">
          <nav className="flex flex-col space-y-3 py-4">
            <Link
              className="font-medium transition-colors hover:text-primary"
              href="#features"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              className="font-medium transition-colors hover:text-primary"
              href="#pricing"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              className="font-medium transition-colors hover:text-primary"
              href="#testimonials"
              onClick={toggleMenu}
            >
              Reviews
            </Link>
            <Link
              className="font-medium transition-colors hover:text-primary"
              href="/docs"
              onClick={toggleMenu}
            >
              Docs
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
