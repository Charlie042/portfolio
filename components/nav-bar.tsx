"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";

const NavBar = ({ activeSection }: { activeSection: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setIsMounted(true);
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
            <h1 className="text-4xl font-bold font-federant text-accent">
              Charles Ginger-Eke
            </h1>
            <h2 className="text-lg font-semibold font-federant text-accent">
              Front End Engineer
            </h2>
          </div>
          <p className="text-md text-gray-700 font-federant max-w-[300px] w-full">
            I'm a frontend engineer with a passion for creating beautiful and
            functional websites.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {navItems.map((item, idx) => {
            const isActive = activeSection && `#${activeSection}` === item.href;
            return (
              <div key={idx} className="flex items-center gap-2 group">
                <div
                  className={`w-10 h-[1px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-accent w-15 h-[2px]"
                      : "bg-primary/30 group-hover:bg-accent group-hover:w-15 group-hover:h-[2px]"
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
        {isMounted && isDesktop && (
          <div className=" h-50 relative group w-50">
            <div className="border-2 max-w-[200px] max-h-[200px] w-full  border-accent overflow-hidden group-hover:-translate-x-1 transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-accent/30 group-hover:bg-transparent transition-all duration-500"></div>
              <Image
                src="/profile.png"
                alt="profile"
                width={100}
                height={100}
                priority
                className="object-contain w-full h-full overflow-hidden inset-0 bg-accent group-hover:bg-primary"
              />
            </div>
            {/* <div className="border-2  max-w-[200px] max-h-[200px] w-full h-full border-accent absolute -right-5 top-3 group-hover:translate-y-1 transition-all duration-500 -z-10"></div> */}
          </div>
        )}
      </div>
      <div className="flex items-center gap-5">
        <Link href="https://github.com/Charlie042" target="_blank">
          <FaGithub className="text-2xl hover:text-accent transition-all duration-300" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ginger-eke-charles/"
          target="_blank"
        >
          <FaLinkedin className="text-2xl hover:text-accent transition-all duration-300" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
