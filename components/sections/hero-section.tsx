"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, TrendingUp, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/20" />
      
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 opacity-20 blur-3xl" />
      <div className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-orange-300 to-yellow-400 opacity-30 blur-2xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mx-auto mb-6 flex w-fit items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 dark:bg-orange-900/20 dark:text-orange-300">
            <Zap className="mr-2 h-4 w-4" />
            AI-Powered Amazon Optimization
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            Boost Your Amazon Sales with{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Listing Optimization
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Generate high-converting product titles, bullet points, and keywords in seconds. 
            Get SEO scores and optimization suggestions to dominate Amazon search results.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="min-w-[200px] text-lg" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px] text-lg" asChild>
              <Link href="#features">
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                4.9/5 from 2,000+ sellers
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Average 40% sales increase
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm dark:border-orange-800 dark:bg-gray-800/50">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                  <Target className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="mb-2 font-semibold">AI Title Generation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Create compelling product titles optimized for Amazon&apos;s algorithm
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm dark:border-orange-800 dark:bg-gray-800/50">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                  <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="mb-2 font-semibold">SEO Score Analysis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Get instant SEO scores and actionable optimization suggestions
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm dark:border-orange-800 dark:bg-gray-800/50">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                  <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="mb-2 font-semibold">Keyword Research</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Discover high-volume, low-competition keywords for your niche
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
