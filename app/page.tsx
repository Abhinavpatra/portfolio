"use client";
import { IconCloud } from "@/components/skillssphere";
import Image from "next/image";
import TechStackBtn from "@/components/skillschips";
import { Card } from "@/components/projectsCard";
import { Snippet } from "@nextui-org/snippet";
import GithubContributions from "@/components/githubcontri";

const slugs = [
  "tailwindcss",
  "mysql",
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "mongodb",
  "linux",
  "python",
  "c",
  "cplusplus",
  "visualstudiocode",
  "figma",
  "postman",
];

// these are for telling the card component what tech stack is used in the project

// const anitaroArr = ["Next.js", "Typescript", "TailwindCSS", "NextUI"];
// const secBrainarr = ["React", "Typescript", "TailwindCSS", "MongoDB"];
// const chitchat = ["React", "Typescript", "WebSockets"];
// const astroquestarr = ["React", "Javascript"];
// const pawpalarr = ["React", "Javascript", "MongoDB"];
// const bggonearr = ["Next.js", "Typescript", "TailwindCSS", "MagicUI"];
// const solwallarr = ["React", "Typescript", "TailwindCSS", "ShadcnUI"];
// const ensoarr = ["Next.js", "Typescript", "TailwindCSS", "WebSocket"];

export default function Home() {
  return (
    <div className="flex justify-center font-sans bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <div className=" w-[370px]  sm:w-[900px] min-h-screen ">
        <div className="sm:pt-16 sm:pl-[84px]  items-center flex  ">
          <div className="pl-3 pr-5 sm:pr-7 sm:pl-0 ">
          </div>
          <div className="">
            <p className="pt-2 text-4xl font-bold sm:pt-0">Hi, I'm Abhinav</p>
            <p className="pt-2 pr-2 sm:pr-0">
            </p>
            <Snippet
              className="mt-1 collapse sm:visible"
              tooltipProps={{
                content: "Copy and run this on your terminal",
                placement: "right",
              }}
              size="sm"
            >
              npx patra
            </Snippet>
          </div>
        </div>
        <p className="pl-3 sm:pt-10 sm:ml-[70px]  text-xl font-bold ">About</p>
        <p className=" pl-3 pr-3 sm:ml-[70px] sm:pr-0 sm:w-[780px] text-justify text-neutral-500 dark:text-neutral-400">
          I’m a 21-year-old CS student. I am not sure yet as to how i feel about building things, but i am sure that i like breaking things, and knowing that i am better than someone, looking for oppurtunies where I can prove it, or where I can get closer to making it absolute.
          bit of a bored sue, who used to 🏃‍♂️‍➡️run for long, then started to to 🏊‍♀️swim for long and now i 👨‍💻code for long. 
          
        </p>
        <p className=" text-xl pl-3 font-bold mt-10 flex pb-2 sm:ml-[70px] ">
          Skills
        </p>
        <div className="flex justify-center h-72 sm:ml-8">
          <div className=" rounded-md flex justify-between sm:ml-0 sm:mr-0 ml-3 mr-3  pr-6 w-[770px] border dark:border-zinc-800 ">
            <div className="hidden grid-cols-3 gap-3 pb-3 pl-5 mt-5 sm:grid">
              <TechStackBtn name="Typecript" icon=" bg-blue-200" />
              <TechStackBtn name="React" icon="bg-cyan-300" />
              <TechStackBtn name="Next.js" icon="bg-white" />
              <TechStackBtn name="MongoDB" icon="bg-green-600" />
              <TechStackBtn name="PostgreSQL" icon="bg-blue-500" />
              <TechStackBtn name="JavaScript" icon="bg-yellow-300" />
              {/* <TechStackBtn name="Flask" icon="bg-white" /> */}
              {/* <TechStackBtn name="Python" icon="bg-green-400" /> */}
              <TechStackBtn name="Java" icon="bg-orange-500" />
              <TechStackBtn name="C" icon=" bg-red-200" />
              <TechStackBtn name="C++" icon="bg-red-400" />
              <TechStackBtn name="Node.js" icon="bg-teal-600" />
              <TechStackBtn name="Express.js" icon="bg-emerald-300" />
              <TechStackBtn name="TailwindCSS" icon="bg-cyan-500" />
              <TechStackBtn name="Git" icon="bg-gray-700" />
              <TechStackBtn name="Docker" icon="bg-blue-400" />
              <TechStackBtn name="Kubernetes" icon="bg-blue-600" />
              {/* <TechStackBtn name="Python" icon="bg-green-400" /> */}
              

            </div>

            <div className="ml-16 sm:ml-0">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full mt-8">
          <div className="overflow-hidden max-w-7xl">
            <GithubContributions />
          </div>
        </div>
        <div>
          <p className="flex justify-center mt-8 text-2xl font-bold ">
            Projects
          </p>
          <p className="flex justify-center pt-2 text-2xl font-bold tracking-wider sm:text-4xl">
            Check out my latest work
          </p>
          <p className="flex justify-center pt-2 pl-3 pr-3 text-lg font-bold sm:text-xl sm:pl-0 sm:pr-0 text-neutral-400">
            I've worked on a variety of projects, here are some that I like.
          </p>
          <div className="flex justify-center sm:pl-7 pt-7">
            <div className="grid grid-cols-1 gap-3 pb-5 dark:border-neutral-700 border-b-1 sm:grid-cols-2">              
              {/* <Card
                src={"/astroquest.png"}
                projectTitle="AstroQuest"
                description="A fun web app that lets you explore the solar system with detailed planet info, smooth space animations, and a bot to help guide you on your cosmic journey"
                toolsUsed={astroquestarr}
                projLink="https://astroquest.netlify.app/"
              /> */}              
            </div>
          </div>
        </div>
        <p className="flex justify-center pt-4 dark:border-neutral-700">
          Made by Abhinav
        </p>
      </div>
    </div>
  );
}
