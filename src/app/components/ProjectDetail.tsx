interface ProjectDetailProps {
  backClick: () => void;
}

export default function ProjectDetail({ backClick }: ProjectDetailProps) {
  return (
    <div>
      <h3 className="float-right mr-6 text-lg font-editorial mt-5 cursor-pointer" onClick={backClick}>Back</h3>
    </div>
  );
}