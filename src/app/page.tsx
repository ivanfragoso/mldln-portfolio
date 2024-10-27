"use client"

import { useState } from "react";
import Project from "@/app/components/Project";
import { projects } from "./data/projects";
import ProjectDetail from "@/app/components/ProjectDetail";

export default function Home() {
  const [animateBg, setAnimateBg] = useState(false);

  return (
    <main className="h-screen w-full">
      <div className={`h-full flex ${animateBg ? "bounce" : "bounce-out"} bg-background`}>
        <div className="w-[800px] h-full sticky top-0">
          <div className="absolute top-0 left-0 right-0 mt-[70px] ml-[25px]">
            <h1 className="text-6xl text-primary font-editorial">López de la Nieta</h1>
            <h2 className="text-6xl text-low uppercase -mt-5">Graphic Designer</h2>
            <h3 className="text-5xl text-low uppercase">Specializing in Branding & Visual Identity</h3>
          </div>
          <video
            src="/home_video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[640px] ml-auto h-full overflow-y-scroll">
          <h3 className="float-right mr-6 text-lg font-editorial mt-5">Work</h3>
          <div className="flex flex-col gap-[80px] px-[115px] mt-16">
            {projects.map((project) => (
              <Project key={project.number} {...project} imageClick={() => setAnimateBg((animateBg) => !animateBg)}/>
            ))}
          </div>
        </div>
      </div>
      { animateBg && <ProjectDetail backClick={() => setAnimateBg((animateBg) => !animateBg)} /> }
    </main>
  );
}
