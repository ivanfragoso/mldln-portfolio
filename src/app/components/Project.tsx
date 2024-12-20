import Image from "next/image";

interface TagProps {
  text: string;
  margin: string;
}

interface ProjectProps {
  number: string; // it contains a zero before
  title: string;
  image: string;
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
    <div className="flex flex-col items-center gap-[16px] z-10">
      <div className="text-center relative">
        <h2 className="text-5xl font-editorialNew italic">({number})</h2>
        <h2 className="text-5xl text-primary uppercase -mt-4 font-blurweb">
          {title}
        </h2>
      </div>
      <div className="relative cursor-pointer" onClick={imageClick}>
        <div className="absolute flex items-center justify-center w-full h-full bg-secondary/20 opacity-0 hover:opacity-100">
          <span className="text-base text-white uppercase font-blurweb">( View project )</span>
        </div>
        <Image src={image} alt={title} width={410} height={333} priority />
      </div>
      <div className="w-full text-lg">
        <div className="flex justify-between">
          {firstLineTags.map((tag, index) => (
            <span key={`left-${index}`} className={`font-blurweb uppercase ${tag.margin}`}>
              {tag.text}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          {secondLineTags.map((tag, index) => (
            <span key={`right-${index}`} className={`font-blurweb uppercase ${tag.margin}`}>
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}