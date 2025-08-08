import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ListGenie - Amazon Listing Optimization SaaS",
  description:
    "AI-powered Amazon listing optimization platform. Generate product titles, bullet points, keywords, and get SEO scores to boost your Amazon sales.",
  keywords: [
    "Amazon listing optimization",
    "Amazon SEO",
    "Product listing",
    "Amazon seller tools",
    "E-commerce optimization",
    "Amazon keywords",
    "Product titles",
    "Amazon PPC",
    "Listing optimization software",
    "Amazon seller central",
  ],
  openGraph: {
    type: "website",
    siteName: "ListGenie",
    locale: "en_US",
    url: "https://listgenie.com",
    title: "ListGenie - Amazon Listing Optimization SaaS",
    description:
      "AI-powered Amazon listing optimization platform. Generate product titles, bullet points, keywords, and get SEO scores to boost your Amazon sales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ListGenie - Amazon Listing Optimization Platform",
      },
    ],
  },
  authors: [
    {
      name: "ListGenie Team",
      url: "https://listgenie.com",
    },
  ],
  creator: "ListGenie",
  publisher: "ListGenie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://listgenie.com",
  },
  category: "technology",
  classification: "Business Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
