"use client";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
const Projects = ({
  title,
  company,
  description,
  technologies,
  image,
  link,
}: {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}) => {
  const [isEntered, setIsEntered] = useState<number | null>(null);
  return (
    <Link href={link} target="_blank" className="flex gap-4 lg:justify-between flex-col-reverse lg:flex-row items-center group p-2 hover:bg-[#7c5157]/5 hover:border rounded-md hover:border-accent/50 transition-all duration-75">
      <div className="self-start">
        <Image src={image} alt={title} width={150} height={150} priority className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center gap-1">
            <h2 className="group-hover:text-accent font-federant ">
              {title} @ {company}
            </h2>
            <GoArrowUpRight className="w-3 h-3 group-hover:text-accent font-semibold group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          <p className="text-sm lg:max-w-[30vw]">{description}</p>
        </div>
        <div className="lg:max-w-[27vw] flex flex-wrap gap-2 text-accent font-federant text-xs cursor-pointer ">
          {technologies.map((technology, idx) => (
            <p
              onMouseEnter={() => setIsEntered(idx)}
              onMouseLeave={() => setIsEntered(null)}
              key={idx}
              className={`border rounded-full px-2 py-1 ${
                isEntered === idx ? "bg-accent/15" : "bg-accent/10"
              }`}
            >
              {technology}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Projects;
