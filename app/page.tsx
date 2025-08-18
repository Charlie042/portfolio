"use client";
import Image from "next/image";
import { useEffect } from "react";
import { handleInitialHash } from "@/lib/utils";

export default function Home() {
  useEffect(() => {
    handleInitialHash();
  }, []);

  return (
    <main className=" w-full flex flex-col gap-10 overflow-y-auto h-screen">
      <section id="about" className="flex flex-col gap-10">
        <p className="text-md text-gray-700 w-full">
          I'm a frontend developer who loves building accessible, high-quality
          interfaces where design meets engineering. I enjoy turning ideas into
          user experiences that are both visually refined and technically sound,
          with a focus on usability and performance.
        </p>
        <p className="text-md text-gray-700 ">
          Currently, I’m a Front-End Developer at Tenece, where I focus on
          building and maintaining the school management platform used by
          universities. I work on developing features that support students,
          lecturers, faculty deans, and administrators, ensuring the platform
          runs smoothly for academic and administrative needs. My role also
          includes improving workflows like student fee payments and overall
          usability to create a seamless experience for all users.
        </p>
        <p className="text-md text-gray-700 ">
          In the past, i have worked a variety of projects, I’ve had the
          opportunity to contribute to early-stage start-ups, working on
          projects that span digital marketing and automation. At{" "}
          <a
            href="https://fuiziondot.com"
            target="_blank"
            className="text-primary/70 font-semibold hover:text-black"
          >
            Fuiziondot
          </a>
          , an SEO-focused company, I developed landing pages to support client
          acquisition, while at{" "}
          <a
            href="https://www.serlzo.com/"
            target="_blank"
            className="text-primary/70 font-semibold hover:text-black"
          >
            Selzo
          </a>
          , an automation platform, I worked on features that helped users
          generate and manage leads. Beyond client work, I also built{" "}
          <a
            href="https://serene-ivory.vercel.app/"
            target="_blank"
            className="text-primary/70 font-semibold hover:text-black"
          >
            Serene
          </a>
          , a personal project aimed at supporting mental health, designed to
          help individuals struggling with depression and addiction find
          community and support, inspired by the principles of Alcoholics
          Anonymous.
        </p>
        <p>
          In my spare time, I enjoy reading good books, watching movies,. I also
          enjoy learning new technologies and building personal projects to
          improve my skills.
        </p>
      </section>
    </main>
  );
}
