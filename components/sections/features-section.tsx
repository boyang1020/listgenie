"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  FileText, 
  BarChart3, 
  Image, 
  RefreshCw, 
  Users,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "AI-Powered Keyword Research",
    description: "Discover high-volume, low-competition keywords specific to your product niche using advanced AI algorithms.",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    icon: FileText,
    title: "Smart Title Generation",
    description: "Create compelling, SEO-optimized product titles that comply with Amazon's guidelines and boost visibility.",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30"
  },
  {
    icon: BarChart3,
    title: "SEO Score Analysis",
    description: "Get instant SEO scores for your listings with detailed breakdowns and actionable improvement suggestions.",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/30"
  },
  {
    icon: Image,
    title: "Image Optimization Tips",
    description: "Receive AI-powered suggestions for your product images to maximize click-through rates and conversions.",
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-100 dark:bg-pink-900/30"
  },
  {
    icon: RefreshCw,
    title: "Real-time Optimization",
    description: "Continuously monitor and optimize your listings based on performance data and algorithm changes.",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-100 dark:bg-orange-900/30"
  },
  {
    icon: Users,
    title: "Competitor Analysis",
    description: "Analyze top-performing competitors to understand what makes their listings successful and apply those insights.",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-100 dark:bg-indigo-900/30"
  },
  {
    icon: Zap,
    title: "Bulk Processing",
    description: "Optimize hundreds of listings at once with our powerful bulk processing tools. Save time and scale efficiently.",
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-yellow-100 dark:bg-yellow-900/30"
  },
  {
    icon: Target,
    title: "A+ Content Suggestions",
    description: "Generate engaging A+ content ideas and layouts that showcase your product benefits and increase conversions.",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30"
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Track your listing performance over time with detailed analytics and insights into ranking improvements.",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-100 dark:bg-cyan-900/30"
  },
  {
    icon: Shield,
    title: "Amazon Policy Compliance",
    description: "Ensure your listings comply with Amazon's ever-changing policies and guidelines to avoid suspensions.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30"
  },
  {
    icon: Clock,
    title: "Automated Scheduling",
    description: "Schedule listing updates and optimizations during peak traffic hours for maximum impact.",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-100 dark:bg-violet-900/30"
  },
  {
    icon: Globe,
    title: "Multi-Marketplace Support",
    description: "Optimize listings across multiple Amazon marketplaces worldwide with localized keyword research.",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-100 dark:bg-teal-900/30"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Dominate Amazon
          </h2>
          <p className="mb-16 text-xl text-gray-600 dark:text-gray-300">
            Our comprehensive suite of AI-powered tools helps Amazon sellers optimize their listings, 
            boost rankings, and increase sales with data-driven insights.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden border-2 border-gray-200 transition-all duration-300 hover:border-primary hover:shadow-lg dark:border-gray-700 dark:hover:border-primary">
              <CardHeader>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bg} transition-all duration-300 group-hover:scale-110`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Ready to Transform Your Amazon Business?
            </h3>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Join thousands of successful Amazon sellers who have boosted their sales with ListGenie.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Shield className="h-4 w-4 text-green-500" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Clock className="h-4 w-4 text-green-500" />
                Setup in under 5 minutes
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Users className="h-4 w-4 text-green-500" />
                No credit card required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
