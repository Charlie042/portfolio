"use client";
import { useState, useEffect, useRef } from "react";
import NavBar from "@/components/nav-bar";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [activeSection, setActiveSection] = useState("about");
  const [isMounted, setIsMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

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

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();

      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [isMounted]);

  return (
    <div className="max-w-[1200px] xl:mx-auto flex gap-10 lg:mx-5">
      <div className="w-full sticky top-0 p-4 hidden lg:block">
        <NavBar activeSection={activeSection} />
      </div>
      <div
        ref={scrollContainerRef}
        className="w-full py-4 overflow-y-auto scrollbar-none"
        style={{ height: "100vh" }}
      >
        {children}
      </div>
    </div>
  );
}
