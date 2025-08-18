"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Set initial active section based on current hash
    const hash = window.location.hash;
    if (hash) {
      setActiveSection(hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navItems = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#projects",
    },
  ];

  return (
    <nav className="w-full min-h-[90vh] flex flex-col justify-between sticky top-20 xl:pb-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Charles Ginger-Eke</h1>
            <h2 className="text-lg font-semibold">Front End Engineer</h2>
          </div>
          <p className="text-md text-gray-700  max-w-[300px] w-full">
            I'm a frontend engineer with a passion for creating beautiful and
            functional websites.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.href;
            return (
              <div key={idx} className="flex items-center gap-2 group">
                <div
                  className={`w-10 h-[1px] bg-primary/30 rounded-full group-hover:bg-primary group-hover:w-15 group-hover:h-[2px] transition-all duration-300 ${
                    isActive ? "bg-black w-15 h-[2px]" : ""
                  }`}
                ></div>
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.substring(1))}
                  className={`cursor-pointer hover:text-primary transition-colors duration-300 group-hover:font-semibold ${
                    isActive ? "text-primary font-semibold" : "text-black/50"
                  }`}
                >
                  {item.label}
                </a>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <FaGithub className="text-2xl " />
        <FaLinkedin className="text-2xl" />
      </div>
    </nav>
  );
};

export default NavBar;
