import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface ProjectDetailProps {
  sliderItems: { type: 'image', src: string }[] | { type: 'video', src: string }[]
  description: string
  backClick: () => void;
}

export default function ProjectDetail({ backClick, sliderItems, description }: ProjectDetailProps) {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots !bottom-4',
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="h-full">
      <h3 className="italic float-right mr-6 text-lg mt-5 cursor-pointer" onClick={backClick}>Back</h3>
      <div className="h-full flex items-center">
        <div className="w-[800px] h-full relative">
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
                    priority
                  />
                ) : item.type === 'video' ? (
                  <video
                    key={index}
                    src={item.src}
                    width={800}
                    style={{ height: '100vh' }}
                    autoPlay
                    muted
                    loop
                  />
                ) : null}
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-[640px]">
          {<div dangerouslySetInnerHTML={{ __html: description }} />}
        </div>
      </div>
    </section>
  );
}
