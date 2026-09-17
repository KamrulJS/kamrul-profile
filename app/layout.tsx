import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Kamrul Islam — Application Developer",
  description: "Official portfolio of Kamrul Islam, Web Developer crafting high-quality digital experiences with Shopify, WordPress, React, and modern front-end technologies.",
  keywords: ["Kamrul Islam", "Kamrul Web Developer", "Kamrul eCommerce Expert", "Application Developer", "React.js Developer", "Front-end Developer", "React Native Developer", "Web Developer", "Shopify Expert", "Shopify Marketing", "Shopify Developer", "WordPress Developer", "Front-End Developer", "Shopify Conversion Rate Optimization", "eCommerce Expert", "Amazon Marketing", "Etsy Marketing","Elementor Pro"],
  openGraph: {
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kamrul Islam — Application Developer",
      },
    ],
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
