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
}

export default function Project({
  number,
  title,
  image,
  firstLineTags,
  secondLineTags,
}: ProjectProps) {
  return (
    <div className="flex flex-col items-center gap-9 cursor-pointer">
      <div className="text-center relative">
        <h2 className="text-5xl font-editorial">({number})</h2>
        <h2 className="text-5xl text-primary font-bold uppercase -mt-5">
          {title}
        </h2>
      </div>
      <Image src={image} alt={title} priority />
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
