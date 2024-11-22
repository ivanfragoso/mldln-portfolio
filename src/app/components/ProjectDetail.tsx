import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";

interface ProjectDetailProps {
  sliderItems: { type: string; src: string }[];
  description: string;
  backClick: () => void;
  nextProjectClick: () => void;
}

export default function ProjectDetail({
  backClick,
  nextProjectClick,
  sliderItems,
  description,
}: ProjectDetailProps) {
  const [mutedStates, setMutedStates] = useState<boolean[]>(sliderItems.map(() => true));
  const [playingIndex, setPlayingIndex] = useState<number | null>(
    sliderItems[0]?.type === "video" ? 0 : null
  );

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    lazyLoad: "ondemand" as const,

    beforeChange: () => {
      setPlayingIndex(null);
    },
    afterChange: (index: number) => {
      if (sliderItems[index]?.type === "video") {
        setPlayingIndex(index);
      }
    },
  };

  const handleToggleMute = (index: number) => {
    setMutedStates((states) => {
      const newStates = [...states];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className="h-full flex flex-col justify-center items-center project-detail__container">
      <div className="flex justify-between w-full pb-[21px]">
        <button
          className="text-[20px] font-editorialNew italic cursor-pointer leading-3"
          onClick={backClick}
        >
          (home)
        </button>
        <button
          className="text-[20px] font-editorialNew italic cursor-pointer"
          onClick={nextProjectClick}
        >
          (next project)
        </button>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[543px] mr-[80px] h-[774px]">
          <Slider {...settings}>
            {sliderItems.map((item, index) => (
              <div key={index}>
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt="test"
                    width={800}
                    height={0}
                    className="h-full object-cover"
                  />
                ) : item.type === "video" || item.type === "video_no_sound" ? (
                  <div className="relative h-full flex flex-col justify-end items-end">
                    <ReactPlayer
                      url={item.src}
                      width="100%"
                      height="100%"
                      playing={playingIndex === index}
                      muted={mutedStates[index]}
                      loop
                      controls={false}
                    />
                    {item.type !== "video_no_sound" && (
                      <Image
                        src={
                          mutedStates[index]
                            ? "/resources/icon_without_sound.png"
                            : "/resources/icon_with_sound.png"
                        }
                        alt="Mute/Unmute"
                        className="cursor-pointer mt-2"
                        width={40}
                        height={40}
                        onClick={() => handleToggleMute(index)}
                        loading="lazy"
                      />
                    )}
                  </div>
                ) : null}
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-[640px] h-[774px]" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </section>
  );
}
