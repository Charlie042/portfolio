"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Federant } from "next/font/google";
import NavBar from "@/components/nav-bar";
import Cursor from "@/components/cursor";
import "./globals.css";
import { useState, useEffect, useRef } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const federant = Federant({
  variable: "--font-federant",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState("about");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const scrollPosition = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;

      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - 100; // a little offset
          const sectionHeight = sectionElement.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${federant.variable} antialiased`}
      >
        <div className="max-w-[1200px] xl:mx-auto flex gap-10 lg:mx-5 ">
          <div className="w-full sticky top-0 p-4 hidden lg:block">
            <NavBar activeSection={activeSection} />
          </div>
          <div ref={scrollContainerRef} className="w-full py-4 overflow-y-auto scrollbar-none" style={{height: "100vh"}}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}