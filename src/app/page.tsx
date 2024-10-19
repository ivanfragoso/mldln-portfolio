import Project from "./components/project";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <main className="flex h-screen w-full">
      <div className="w-3/5 h-full sticky top-0">
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
      <div className="w-2/5 ml-auto h-full overflow-y-scroll">
        <h3 className="float-right mr-6 text-lg font-editorial mt-5">Work</h3>
        <div className="flex flex-col gap-[100px] px-16 mt-16">
          {projects.map((project) => (
            <Project key={project.number} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
