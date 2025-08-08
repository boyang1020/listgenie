"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Amazon Seller",
    company: "HomeDecor Plus",
    image: "/api/placeholder/64/64",
    rating: 5,
    content: "ListGenie transformed my Amazon business! My sales increased by 60% in just 3 months. The AI-powered keyword suggestions are incredibly accurate and the SEO scores help me optimize every listing perfectly.",
    revenue: "$2.3M annual revenue"
  },
  {
    name: "Marcus Rodriguez",
    role: "E-commerce Manager",
    company: "TechGadgets Pro",
    image: "/api/placeholder/64/64",
    rating: 5,
    content: "The bulk processing feature saved me countless hours. I can now optimize 100+ listings in minutes instead of days. The competitor analysis feature gave me insights I never would have discovered on my own.",
    revenue: "300% ROI increase"
  },
  {
    name: "Emily Watson",
    role: "Brand Owner",
    company: "Wellness & Beauty Co.",
    image: "/api/placeholder/64/64",
    rating: 5,
    content: "As a new Amazon seller, ListGenie made listing optimization so much easier. The A+ content suggestions and image optimization tips helped me create professional listings that convert amazingly well.",
    revenue: "From $0 to $500K in 8 months"
  },
  {
    name: "David Park",
    role: "Amazon Agency Owner",
    company: "Growth Scale Solutions",
    image: "/api/placeholder/64/64",
    rating: 5,
    content: "We use ListGenie for all our clients. The white-label solution and API access make it perfect for our agency. Our clients see an average 45% increase in organic rankings within 30 days.",
    revenue: "Serving 50+ clients"
  },
  {
    name: "Lisa Thompson",
    role: "Private Label Seller",
    company: "Organic Kitchen",
    image: "/api/placeholder/64/64",
    rating: 5,
    content: "The real-time optimization feature is a game-changer. ListGenie automatically adjusts my listings based on Amazon's algorithm changes. I've maintained top 3 rankings for my main products for 6 months straight.",
    revenue: "Top 3 rankings maintained"
  },
  {
    name: "James Anderson",
    role: "FBA Seller",
    company: "Sports Equipment Hub",
    image: "/api/placeholder/64/64",
    rating: 5,
    content: "The multi-marketplace support helped me expand to 5 different Amazon regions seamlessly. Each marketplace has localized keywords and optimization suggestions. My international sales grew by 200%.",
    revenue: "200% international growth"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Loved by Amazon Sellers Worldwide
          </h2>
          <p className="mb-16 text-xl text-gray-600 dark:text-gray-300">
            Join thousands of successful sellers who have transformed their Amazon business with ListGenie.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-2 border-gray-200 transition-all duration-300 hover:border-primary hover:shadow-lg dark:border-gray-700 dark:hover:border-primary">
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="mb-4 h-8 w-8 text-primary/40" />
                
                {/* Rating */}
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="mb-6 text-gray-700 dark:text-gray-300">
                  "{testimonial.content}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Achievement badge */}
                <div className="mt-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/20 dark:text-green-300">
                  {testimonial.revenue}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">2,000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Active Sellers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">$50M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">45%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Avg. Sales Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
