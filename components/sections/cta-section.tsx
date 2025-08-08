"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-500 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Transform Your Amazon Business?
          </h2>
          <p className="mb-8 text-xl text-orange-100">
            Join thousands of successful Amazon sellers who have boosted their sales with ListGenie. 
            Start your free trial today and see results in 24 hours.
          </p>

          {/* Feature highlights */}
          <div className="mb-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div className="flex items-center gap-2 text-orange-100">
              <Shield className="h-5 w-5" />
              <span className="font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-orange-100">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-orange-100">
              <Zap className="h-5 w-5" />
              <span className="font-medium">No credit card required</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="min-w-[250px] bg-white text-orange-600 hover:bg-orange-50 text-lg font-semibold py-4 px-8"
              asChild
            >
              <Link href="/signup">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-[250px] border-white text-white hover:bg-white hover:text-orange-600 text-lg font-semibold py-4 px-8"
              asChild
            >
              <Link href="/demo">
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-orange-100 text-sm mb-4">
              Trusted by over 2,000 Amazon sellers worldwide
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <div className="text-white font-semibold">
                ⭐⭐⭐⭐⭐ 4.9/5 Rating
              </div>
              <div className="text-white font-semibold">
                🚀 $50M+ Revenue Generated
              </div>
              <div className="text-white font-semibold">
                📈 45% Avg. Sales Increase
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
