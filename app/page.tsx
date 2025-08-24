import Cursor from "@/components/cursor";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ClientPage from "@/components/client-page";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full flex flex-col gap-10 ">
      <section className="mx-2 flex gap-10 md:items-center lg:hidden">
        <div className="flex flex-col gap-10 lg:hidden px-5 py-5 sm:px-5 sm:py-5 md:px-10 md:py-20 lg:px-0 lg:py-0 ">
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
          <div className="flex items-center gap-5">
            <FaGithub className="text-2xl " />
            <FaLinkedin className="text-2xl" />
          </div>
        </div>
        <div className=" h-30 relative group w-50 md:w-50 mx-5">
          <div className="border-2 max-w-[200px] max-h-[200px] w-full  border-accent overflow-hidden group-hover:-translate-x-1 transition-all duration-500 cursor-pointer">
            {/* <div className="absolute inset-0 bg-accent/30 group-hover:bg-transparent transition-all duration-500"></div> */}
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
      </section>
      <Cursor />
      <section id="about" className="flex flex-col gap-10 text-[15px] py-20">
        <h2 className="backdrop-blur-sm text-2xl font-bold text-accent font-federant sticky -top-5 py-2 px-5 lg:hidden">
          About
        </h2>
        <div className="flex flex-col gap-10 px-5 py-5 sm:px-5  md:px-10 lg:px-0 lg:py-0">
          <p className="text-md text-primary w-full">
            I'm a developer who loves building accessible, high-quality
            interfaces where design meets engineering. I enjoy turning ideas
            into user experiences that are both visually refined and technically
            sound, with a focus on usability and performance.
          </p>
          <p className="text-md text-primary">
            Currently, I'm a Front-End Developer at{" "}
            <a
              href="https://tenece.com"
              target="_blank"
              className="text-accent font-semibold hover:text-accent/80 font-federant"
            >
              Tenece
            </a>
            , where I focus on building and maintaining the school management
            platform used by universities. I work on developing features that
            support students, lecturers, faculty deans, and administrators,
            ensuring the platform runs smoothly for academic and administrative
            needs. My role also includes improving workflows like student fee
            payments and overall usability to create a seamless experience for
            all users.
          </p>
          <p className="text-md text-primary">
            In the past, i have worked a variety of projects, I've had the
            opportunity to contribute to early-stage start-ups, working on
            projects that span digital marketing and automation. At{" "}
            <a
              href="https://fuiziondot.com"
              target="_blank"
              className="text-accent font-semibold hover:text-accent/80 font-federant"
            >
              Fuiziondot
            </a>
            , an SEO-focused company, I developed landing pages to support
            client acquisition, while at{" "}
            <a
              href="https://www.serlzo.com/"
              target="_blank"
              className="text-accent font-semibold hover:text-accent/80 font-federant"
            >
              Selzo
            </a>
            , an automation platform, I worked on features that helped users
            generate and manage leads. Beyond client work, I also built{" "}
            <a
              href="https://serene-ivory.vercel.app/"
              target="_blank"
              className="text-accent font-semibold hover:text-accent/80 font-federant"
            >
              Serene
            </a>
            , a personal project aimed at supporting mental health, designed to
            help individuals struggling with depression and addiction find
            community and support, inspired by the principles of Alcoholics
            Anonymous.
          </p>
          <p className="text-md text-primary text-[15px]">
            In my spare time, I enjoy reading good books, watching movies,. I
            also enjoy learning new technologies and building personal projects
            to improve my skills.
          </p>
        </div>
      </section>
      <ClientPage />
    </main>
  );
}
