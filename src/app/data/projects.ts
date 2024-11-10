import RogeDescription from "./project_descriptions/RogeDescription";
import LeSilleDescription from "./project_descriptions/LeSilleDescription";
import GorgiDescription from "./project_descriptions/GorgiDescription";
import La111Description from "./project_descriptions/La111Description";
import CigarrettesDescription from "./project_descriptions/CigarrettesDescription";
import AetheriaDescription from "./project_descriptions/AetheriaDescription";

export const projects = [
    {
        number: "01",
        title: "Roge's Bakery",
        image: "/roge/roge_cover.jpg",
        firstLineTags: [
            { text: "Brand Identity - Branding", margin: "m-0" },
            { text: "Posters", margin: "m-0" }
        ],
        secondLineTags: [
            { text: "Art Direction", margin: "ml-[7px]" },
            { text: "Methodology", margin: "mr-[19px]" }
        ],
        sliderItems: [
            { type: 'video', src: '/roge/slider/roge_1.mp4' },
            { type: 'video', src: '/roge/slider/roge_2.mp4' },
            { type: 'image', src: '/roge/slider/roge_3.jpg' },
            { type: 'image', src: '/roge/slider/roge_4.jpg' },
            { type: 'image', src: '/roge/slider/roge_5.jpg' },
            { type: 'image', src: '/roge/slider/roge_6.jpg' },
            { type: 'image', src: '/roge/slider/roge_7.jpg' },
            { type: 'image', src: '/roge/slider/roge_8.jpg' },
            { type: 'image', src: '/roge/slider/roge_9.jpg' },
            { type: 'image', src: '/roge/slider/roge_10.jpg' }
        ],
        description: RogeDescription
    },
    {
        number: "02",
        title: "LeSille",
        image: "/le_sille/le_sille_cover.jpg",
        firstLineTags: [
            { text: "Card Game - Educative", margin: "m-0" },
            { text: "Illustration", margin: "m-0" }
        ],
        secondLineTags: [
            { text: "Packaging", margin: "m-0" },
            { text: "History of Interiorism", margin: "mr-[15px]" }
        ],
        sliderItems: [
            { type: 'image', src: '/le_sille/slider/le_sille_1.jpg' },
            { type: 'image', src: '/le_sille/slider/le_sille_2.jpg' },
            { type: 'image', src: '/le_sille/slider/le_sille_3.jpg' },
            { type: 'image', src: '/le_sille/slider/le_sille_4.jpg' },
            { type: 'image', src: '/le_sille/slider/le_sille_5.jpg' },
            { type: 'image', src: '/le_sille/slider/le_sille_6.jpg' },
        ],
        description: LeSilleDescription
    },
    {
        number: "03",
        title: "Gorgi",
        image: "/gorgi/gorgi_cover.jpg",
        firstLineTags: [
            { text: "Wine Label", margin: "m-0" },
            { text: "Illustration", margin: "mr-[44px]" }
        ],
        secondLineTags: [
            { text: "Art Direction", margin: "ml-[12px]" },
            { text: "Brand Identity", margin: "m-0" }
        ],
        sliderItems: [
            { type: 'image', src: '/gorgi/slider/gorgi_1.jpg' },
            { type: 'image', src: '/gorgi/slider/gorgi_2.jpg' },
            { type: 'image', src: '/gorgi/slider/gorgi_3.jpg' },
            { type: 'image', src: '/gorgi/slider/gorgi_4.jpg' },
            { type: 'image', src: '/gorgi/slider/gorgi_5.jpg' },
        ],
        description: GorgiDescription
    },
    {
        number: "04",
        title: "La 111",
        image: "/la111/la111_cover.jpg",
        firstLineTags: [
            { text: "Brand Identity", margin: "m-0" },
            { text: "Social Media", margin: "m-0" }
        ],
        secondLineTags: [
            { text: "Art Direction", margin: "ml-[63px]" },
            { text: "UX/UI Design", margin: "mr-[30px]" }
        ],
        sliderItems: [
            { type: 'image', src: '/la111/slider/la111_1.jpg' },
            { type: 'image', src: '/la111/slider/la111_2.jpg' },
            { type: 'image', src: '/la111/slider/la111_3.jpg' },
            { type: 'image', src: '/la111/slider/la111_4.jpg' },
            { type: 'image', src: '/la111/slider/la111_5.jpg' },
        ],
        description: La111Description
    },
    {
        number: "05",
        title: "Cigarrettes",
        image: "/cigarrettes/cigarrettes_cover.jpg",
        firstLineTags: [
            { text: "Rotoscoping", margin: "m-0" },
            { text: "Audiovisual", margin: "mr-[39px]" }
        ],
        secondLineTags: [
            { text: "Teaser Videoclip", margin: "ml-[13px]" },
            { text: "Methods", margin: "mr-[30px]" }
        ],
        sliderItems: [
            { type: 'image', src: '/cigarrettes/slider/cigarrettes_1.jpg' },
            { type: 'video', src: '/cigarrettes/slider/cigarrettes_2.mp4' },
            { type: 'video_no_sound', src: '/cigarrettes/slider/cigarrettes_3.mp4' },
            { type: 'image', src: '/cigarrettes/slider/cigarrettes_4.jpg' },
            { type: 'video_no_sound', src: '/cigarrettes/slider/cigarrettes_5.mp4' },
        ],
        description: CigarrettesDescription
    },
    {
        number: "06",
        title: "Aetheria",
        image: "/aetheria/aetheria_cover.jpg",
        firstLineTags: [
            { text: "Packaging", margin: "ml-[23px]" },
            { text: "Brand Identity", margin: "m-0" }
        ],
        secondLineTags: [
            { text: "Material Experimentation", margin: "m-0" },
            { text: "Dystopia", margin: "mr-[24px]" }
        ],
        sliderItems: [
            { type: 'image', src: '/aetheria/slider/aetheria_1.jpg' },
            { type: 'image', src: '/aetheria/slider/aetheria_2.jpg' },
            { type: 'image', src: '/aetheria/slider/aetheria_3.jpg' },
            { type: 'image', src: '/aetheria/slider/aetheria_4.jpg' },
            { type: 'image', src: '/aetheria/slider/aetheria_5.jpg' },
            { type: 'image', src: '/aetheria/slider/aetheria_6.jpg' },
            { type: 'image', src: '/aetheria/slider/aetheria_7.jpg' },
            { type: 'image', src: '/aetheria/slider/aetheria_8.jpg' },
        ],
        description: AetheriaDescription
    }
]