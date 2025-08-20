"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";

const NavBar = ({ activeSection }: { activeSection: string }) => {
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
            <h1 className="text-4xl font-bold font-federant text-accent">Charles Ginger-Eke</h1>
            <h2 className="text-lg font-semibold font-federant text-accent">Front End Engineer</h2>
          </div>
          <p className="text-md text-gray-700 font-federant max-w-[300px] w-full">
            I'm a frontend engineer with a passion for creating beautiful and
            functional websites.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {navItems.map((item, idx) => {
            const isActive = `#${activeSection}` === item.href;
            return (
              <div key={idx} className="flex items-center gap-2 group">
                <div
                  className={`w-10 h-[1px] bg-primary/30 rounded-full group-hover:bg-accent group-hover:w-15 group-hover:h-[2px] transition-all duration-300 ${
                    isActive ? "bg-accent w-15 h-[2px]" : "bg-accent"
                  }`}
                ></div>
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.substring(1))}
                  className={`cursor-pointer hover:text-accent transition-colors duration-300 group-hover:font-semibold ${
                    isActive ? "text-accent font-semibold" : "text-black/50"
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