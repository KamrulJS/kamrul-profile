import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Kamrul Islam — Web, Shopify & WordPress Developer",
  description: "Official portfolio of Kamrul Islam, Web Developer crafting high-quality digital experiences with Shopify, WordPress, React, and modern front-end technologies.",
  keywords: ["Kamrul Islam", "Web Developer", "Shopify Developer", "WordPress Developer", "Front-End Developer", "React.js", "WooCommerce", "Elementor Pro", "PageFly", "GemPages", "TailwindCSS", "GSAP"],
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
