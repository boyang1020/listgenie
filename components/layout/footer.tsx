"use client";

import Link from "next/link";
import { Zap, Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link className="flex items-center space-x-2 mb-4" href="/">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">ListGenie</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              AI-powered Amazon listing optimization platform helping sellers boost their rankings and sales with intelligent keyword research, SEO analysis, and automated optimization.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="mailto:hello@listgenie.com" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              © 2025 ListGenie. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
