"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for new Amazon sellers getting started",
    features: [
      "Up to 10 listings per month",
      "AI-powered title generation",
      "Basic SEO score analysis",
      "Keyword research tool",
      "Email support",
      "Basic performance tracking"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "Ideal for growing Amazon businesses",
    features: [
      "Up to 100 listings per month",
      "Advanced AI optimization",
      "Detailed SEO analysis",
      "Competitor analysis",
      "A+ content suggestions",
      "Image optimization tips",
      "Priority email support",
      "Performance analytics",
      "Bulk processing tools"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For large Amazon sellers and agencies",
    features: [
      "Unlimited listings",
      "White-label solution",
      "Advanced automation",
      "Custom AI training",
      "Multi-marketplace support",
      "Dedicated account manager",
      "Phone & chat support",
      "Custom integrations",
      "Team collaboration tools",
      "Advanced reporting",
      "API access"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mb-16 text-xl text-gray-600 dark:text-gray-300">
            Start with a free 14-day trial. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${
                plan.popular 
                  ? 'border-primary shadow-lg ring-2 ring-primary/20 scale-105' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32">
                  <div className="rounded-full bg-gradient-to-r from-orange-500 to-amber-600 px-3 py-1 text-sm font-medium text-white text-center">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200'
                  }`}
                  size="lg"
                  asChild
                >
                  <Link href={plan.cta === "Contact Sales" ? "/contact" : "/signup"}>
                    {plan.cta}
                    {plan.cta !== "Contact Sales" && <Zap className="ml-2 h-4 w-4" />}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              All plans include:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Check className="h-4 w-4 text-green-500" />
                14-day free trial
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Check className="h-4 w-4 text-green-500" />
                Cancel anytime
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Check className="h-4 w-4 text-green-500" />
                No setup fees
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Check className="h-4 w-4 text-green-500" />
                Regular updates
              </div>
            </div>
            
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Need a custom solution? 
              <Link href="/contact" className="ml-1 font-medium text-primary hover:underline">
                Contact our sales team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
