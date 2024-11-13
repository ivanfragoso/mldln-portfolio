import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRef, useState } from "react";

interface ProjectDetailProps {
  sliderItems: { type: string, src: string }[]
  description: string
  backClick: () => void;
}

export default function ProjectDetail({ backClick, sliderItems, description }: ProjectDetailProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [mutedStates, setMutedStates] = useState<boolean[]>(sliderItems.map(() => true));

  const settings = {
    dots: true,
    dotsClass: 'slick-dots !bottom-4',
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    lazyLoad: 'ondemand' as const
  }

  const handleToggleMute = (index: number) => {
    const newMutedStates = [...mutedStates];
    newMutedStates[index] = !newMutedStates[index];
    setMutedStates(newMutedStates);
  
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.muted = newMutedStates[index];
    }
  } 

  const setVideoRef = (element: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = element;
  };

  return (
    <section className="h-full">
      <h3 className="absolute right-0 top-0 mt-5 mr-6 text-lg font-editorialNew italic cursor-pointer" onClick={backClick}>(more)</h3>
      <div className="h-full flex">
        <div className="w-[640px] h-full relative">
          <Slider {...settings}>
            {sliderItems.map((item, index) => (
              <div key={index} className="h-full">
                {item.type === 'image' ? (
                  <Image
                    key={index}
                    src={item.src}
                    alt="test"
                    width={800}
                    height={0}
                    style={{ height: '100vh', objectFit: 'cover' }}
                  />
                ) : item.type === 'video' || item.type === 'video_no_sound' ? (
                  <div className="relative h-screen flex flex-col justify-center gap-2 items-end">
                    <video
                      ref={(el) => setVideoRef(el, index)}
                      src={item.src}
                      width="100%"
                      height={0}
                      style={{ height: "auto" }}
                      autoPlay
                      muted={mutedStates[index]}
                      loop
                    />
                    {item.type != 'video_no_sound' && (
                      <Image
                        src={mutedStates[index] ? "/resources/icon_without_sound.png" : "/resources/icon_with_sound.png"}
                        alt="Mute/Unmute"
                        className="cursor-pointer"
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
        {<div className="w-[640px] py-5 px-[30px]" dangerouslySetInnerHTML={{ __html: description }} />}
      </div>
    </section>
  );
}
