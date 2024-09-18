import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import FoundersScrollCard from "./FoundersScrollCard";
import "./CSS/embla.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 20;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const foundationFormed = [
  {
    name: "Creative Arts Leadership Institute",
    imgPath: "/logos/cali.svg",
  },
  {
    name: "Kenya Theatre Awards",
    imgPath: "/logos/kta.png",
  },
  {
    name: "Performing Arts Conference",
    imgPath: "/logos/kcc.png",
  },
  {
    name: "Kenyatta University Drama Club and its participation in the Kenya National Drama Festival.",
    imgPath: "/logos/kenyatta.png",
  },
  {
    name: "Kenya International Theatre Festival.",
    imgPath: "/logos/kitfest.svg",
  },
  {
    name: "Theatre Arts Conference.",
    imgPath: "/logos/cali.svg",
  },
  {
    name: "Founding member, Filamu International Student Festival.",
    imgPath: "/logos/cali.svg",
  },
  {
    name: "Journal of East African Theatre.",
    imgPath: "/logos/cali.svg",
  },
  {
    name: "Theatre in Africa conference",
    imgPath: "/logos/cali.svg",
  },
  {
    name: "Founding member Theatre Arts Practitioners Society of Kenya (TAPS).",
    imgPath: "/logos/cali.svg",
  },
  {
    name: "Founding member African Theatre Union (ATU).",
    imgPath: "/logos/cali.svg",
  },
  {
    name: "Founding member Film Lecturers and Trainers Association of Kenya (FLeTA – Ke). ",
    imgPath: "/logos/cali.svg",
  },
];

const FoundersScroll = () => {
  return (
    <div>
      <h2 className=" section-title mb-8 md:mb-16 text-center mx-auto">
        Founder Of
      </h2>
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
