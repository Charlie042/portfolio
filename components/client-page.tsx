"use client";
import { useEffect, useState } from "react";
import { handleInitialHash, handleResumeView } from "@/lib/utils";
import ExperienceCard from "@/components/experience-card";
import { experienceData, projectsData } from "@/components/data";
import { GoArrowUpRight } from "react-icons/go";
import Projects from "@/components/projects";

export default function ClientPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isEntered, setIsEntered] = useState<number | null>(null);
  const [isHoveredProjects, setIsHoveredProjects] = useState(false);
  const [isEnteredProjects, setIsEnteredProjects] = useState<number | null>(
    null
  );

  useEffect(() => {
    handleInitialHash();
  }, []);

  return (
    <>
      <section
        id="experience"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsEntered(null);
        }}
        className="my-20"
      >
        <h2 className="sticky -top-5 py-2 px-5 backdrop-blur-sm text-2xl font-bold text-accent font-federant lg:hidden">
          Experience
        </h2>
        <div className="flex flex-col gap-10 my-10 px-5 py-5 sm:px-5 sm:py-5 md:px-10 lg:px-0 lg:py-0">
          {experienceData.map((experience, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setIsEntered(idx)}
              onMouseLeave={() => setIsEntered(null)}
              className={`transition-all duration-300  ${
                isHovered && isEntered !== idx ? "opacity-60" : "opacity-100"
              }`}
            >
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
        <button
          onClick={() => handleResumeView("/Charles_Ginger_Eke_CV.pdf")}
          className="flex items-center gap-2 text-sm text-accent font-semibold hover:text-accent/80 group"
        >
          View Full Resume{" "}
          <GoArrowUpRight className="w-3 h-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </section>

      <section
        id="projects"
        onMouseEnter={() => setIsHoveredProjects(true)}
        onMouseLeave={() => {
          setIsHoveredProjects(false);
          setIsEnteredProjects(null);
        }}
        className={`flex flex-col gap-10 h-screen py-20`}
      >
        <h2 className="sticky -top-5 py-2 px-5 backdrop-blur-sm text-2xl font-bold text-accent font-federant lg:hidden">
          Projects
        </h2>
        <div className="text-md text-primary flex flex-col gap-10 px-5 py-5 sm:px-5 sm:py-5 md:px-10 lg:px-0 lg:py-0">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setIsEnteredProjects(idx)}
              onMouseLeave={() => setIsEnteredProjects(null)}
              className={`transition-all duration-300 ${
                isHoveredProjects && isEnteredProjects !== idx
                  ? "opacity-60"
                  : "opacity-100"
              }`}
            >
              <Projects {...project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
