"use client";

import { useState } from "react";
import Project from "@/app/components/Project";
import { projects } from "./data/projects";
import ProjectDetail from "@/app/components/ProjectDetail";
import Footer from "./components/Footer";
import AboutDialog from "./components/AboutDialog";

export default function Home() {
  const [animateBg, setAnimateBg] = useState(false);
  const [animateAbout, setAnimateAbout] = useState(false); // Initially set to false
  const [isAboutVisible, setIsAboutVisible] = useState(false); // Control visibility separately
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleToggleAbout = () => {
    if (isAboutVisible) {
      setAnimateAbout(false);
      setTimeout(() => setIsAboutVisible(false), 700);
    } else {
      setIsAboutVisible(true);
      setAnimateAbout(true);
    }
  };

  const handleNextProjectClick = () => {
    setAnimateBg((animateBg) => !animateBg);
    setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setTimeout(() => setAnimateBg((animateBg) => !animateBg), 500);
  };

  return (
    <main className="h-screen w-full relative">
      <div className={`h-full flex ${animateBg ? "bounce" : "bounce-out"} bg-background z-20`}>
        <div className="w-[712px] h-full sticky top-0 z-30">
          <a href="mailto:marta.00.design@gmail.com" className="text-[15px] text-background font-blurweb absolute top-8 left-8 right-0 z-10">marta.00.design@gmail.com</a>
          <div className="absolute bottom-0 left-0 right-0 mb-[50px] ml-[25px] z-10 cursor-pointer" onClick={handleToggleAbout}>
            <h1 className="text-6xl text-primary font-editorialNew italic">López de la Nieta</h1>
            <h2 className="text-6xl text-background uppercase -mt-5 font-blurweb">Graphic Designer</h2>
            <h3 className="text-5xl text-background uppercase font-blurweb">Specializing in Branding <br></br>& Visual Identity</h3>
          </div>
          <video
            src="https://videos.martalopezdelanieta.com/home_video.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[568px] ml-auto h-full overflow-y-scroll z-30">
          <div className="flex flex-col gap-[80px] px-[80px] mt-16 mb-[190px]">
            {projects.map((project, idx) => (
              <Project key={project.number} {...project} imageClick={() => { setAnimateBg((animateBg) => !animateBg); setSelectedProjectIndex(idx)}} />
            ))} 
          </div>
          <Footer onNameClick={handleToggleAbout}/>
        </div>
      </div>

      {isAboutVisible && (
          <AboutDialog showAbout={animateAbout} onClickOutside={handleToggleAbout}/>
      )}

      {animateBg && (
        <ProjectDetail
          sliderItems={projects[selectedProjectIndex].sliderItems}
          backClick={() => setAnimateBg((animateBg) => !animateBg)}
          nextProjectClick={handleNextProjectClick}
          description={projects[selectedProjectIndex].description}
        />
      )}
    </main>
  );
}
