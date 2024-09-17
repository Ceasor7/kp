import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import FoundersScrollCard from "./FoundersScrollCard";
import "./CSS/embla.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const foundationFormed = [
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.png",
  },
];

const FoundersScroll = () => {
  return (
    <div>
      <EmblaCarousel
        slides={foundationFormed.map((item, index) => (
          <FoundersScrollCard
            key={index}
            name={item.name}
            imgPath={item.imgPath}
          />
        ))}
        options={OPTIONS}
      />
    </div>
  );
};

export default FoundersScroll;
