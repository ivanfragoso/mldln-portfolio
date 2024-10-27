import Image, { StaticImageData } from "next/image";

interface TagProps {
  text: string;
  margin: string;
}

interface ProjectProps {
  number: string; // it contains a zero before
  title: string;
  image: StaticImageData;
  firstLineTags: TagProps[];
  secondLineTags: TagProps[];
  imageClick: () => void;
}

export default function Project({
  number,
  title,
  image,
  firstLineTags,
  secondLineTags,
  imageClick
}: ProjectProps) {
  return (
    <div className="flex flex-col items-center gap-[16px]">
      <div className="text-center relative">
        <h2 className="text-5xl font-editorial">({number})</h2>
        <h2 className="text-5xl text-primary font-bold uppercase -mt-4">
          {title}
        </h2>
      </div>
      <div className="relative cursor-pointer">
        <div className="absolute flex items-center justify-center w-full h-full bg-secondary/20 opacity-0 hover:opacity-100">
          <span className="text-base text-white uppercase" onClick={imageClick}>( View project )</span>
        </div>
        <Image src={image} alt={title} width={410} priority />
      </div>
      <div className="w-full text-lg">
        <div className="flex justify-between">
          {firstLineTags.map((tag, index) => (
            <span key={`left-${index}`} className={`uppercase ${tag.margin}`}>
              {tag.text}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          {secondLineTags.map((tag, index) => (
            <span key={`right-${index}`} className={`uppercase ${tag.margin}`}>
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}





    /*}
    <div
      className={`absolute top-0 w-full h-full bg-white z-10 ${
        animateBg ? "bg-animate-in" : "bg-animate-out"
      }`}
    >
      <h3 className="float-right mr-6 text-lg font-editorial mt-5 cursor-pointer" onClick={handleClick}>Back</h3>
    </div>
    */