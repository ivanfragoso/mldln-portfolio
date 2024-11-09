"use client"

import { useState } from "react";
import Project from "@/app/components/Project";
import { projects } from "./data/projects";
import ProjectDetail from "@/app/components/ProjectDetail";
import Footer from "./components/Footer";

export default function Home() {
  const [animateBg, setAnimateBg] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <main className="h-screen w-full">
      <div className={`h-full flex ${animateBg ? "bounce" : "bounce-out"} bg-background z-20`}>
        <div className="w-[712px] h-full sticky top-0">
          <div className="absolute bottom-0 left-0 right-0 mb-[50px] ml-[25px]">
            <h1 className="text-6xl text-primary font-editorialNew italic">López de la Nieta</h1>
              <h2 className="text-6xl text-low uppercase -mt-5 font-blurweb">Graphic Designer</h2>
              <h3 className="text-5xl text-low uppercase font-blurweb">Specializing in Branding & Visual Identity</h3>
          </div>
          <video
            src="/home_video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[568px] ml-auto h-full overflow-y-scroll z-30">
          <h3 className="float-right mr-6 text-lg mt-5 font-editorialNew italic">Work</h3>
          <div className="flex flex-col gap-[80px] px-[80px] mt-16 mb-[190px]">
            {projects.map((project, idx) => (
              <Project key={project.number} {...project} imageClick={() => { setAnimateBg((animateBg) => !animateBg); setSelectedProjectIndex(idx)}} />
            ))}
          </div>
          <Footer />
        </div>
      </div>
      { animateBg && <ProjectDetail backClick={() => setAnimateBg((animateBg) => !animateBg)} /> }

      {animateBg && (
        <ProjectDetail
          sliderItems={projects[selectedProjectIndex].sliderItems}
          backClick={() => setAnimateBg((animateBg) => !animateBg)}
          description={projects[selectedProjectIndex].description}
        />
      )}
    </main>
  );
}
