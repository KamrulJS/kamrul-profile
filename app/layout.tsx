import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Kamrul Islam — Web Application Developer & eCommerce Expert",

  description:
    "Kamrul Islam is a Web Application Developer and eCommerce Expert specializing in React, Next.js, Node.js, Shopify, WordPress, and modern full-stack web development. Explore his portfolio, projects, and digital experiences.",

  keywords: [
    "Kamrul Islam",
    "Kamrul Islam Developer",
    "Kamrul Web Developer",
    "Web Application Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Shopify Developer",
    "Shopify Expert",
    "WordPress Developer",
    "eCommerce Developer",
    "eCommerce Expert",
    "MERN Developer",
    "Product Designer",
    "Web Developer Portfolio",
  ],

  authors: [
    {
      name: "Kamrul Islam",
    },
  ],

  creator: "Kamrul Islam",

  openGraph: {
    title: "Kamrul Islam — Web Application Developer & eCommerce Expert",

    description:
      "Portfolio of Kamrul Islam, a Web Application Developer and eCommerce Expert specializing in React, Next.js, Node.js, Shopify, WordPress, and modern digital experiences.",

    type: "website",

    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kamrul Islam — Web Application Developer & eCommerce Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kamrul Islam — Web Application Developer & eCommerce Expert",
    description:
      "Web Application Developer and eCommerce Expert specializing in React, Next.js, Node.js, Shopify, WordPress, and modern web technologies.",
    images: ["/images/hero-bg.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="site-root">
      <body className="site-body">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
