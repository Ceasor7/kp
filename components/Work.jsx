"use client";
import React, { useState } from "react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";
import Workmodal from "./Workmodal";

const projectData = [
  {
    image: "/work/kitfest.png",
    name: "Kenya International Theatre Festival ",
    description:
      "Founded and successfully organized the Kenya International Theatre Festival from 2016 – 2021. ",
    link: "/",
    duties: {
      intro:
        "Founded and successfully organized the Kenya International Theatre Festival from 2016 – 2021. The first and only theatre festival in Kenya currently in its 9th edition.",
      list: [],
    },
  },
  {
    image: "/work/kta.png",
    name: "Kenya Theatre Awards ",
    description:
      "Founded and successfully organized and hosted the Kenya Theatre Awards for three years.",
    link: "/",
    duties: {
      intro:
        "Founded and successfully organized and hosted the Kenya Theatre Awards for three years.",
      list: [],
    },
  },

  {
    image: "/work/ietm.png",
    name: "IETM Africa’s Representative ",
    description:
      "Appointed as Global Connector and Africa’s representative by the IETM International network for contemporary performing arts Global Connectors 2023.",
    link: "/",
    duties: {
      intro:
        "Appointed as Global Connector and Africa’s representative by the IETM International network for contemporary performing arts Global Connectors 2023.",
      list: [],
    },
  },

  {
    image: "/work/1.png",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    duties: {
      intro: "The project responsibilities included the following tasks:",
      list: [
        "Created a custom design system using Tailwind CSS.",
        "Built reusable components for the project.",
        "Connected the application with external APIs.",
        "Optimized images and content for faster loading times.",
        "Monitored app performance after deployment.",
      ],
    },
  },

  {
    image: "/work/1.png",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    duties: {
      intro: "The project responsibilities included the following tasks:",
      list: [
        "Created a custom design system using Tailwind CSS.",
        "Built reusable components for the project.",
        "Connected the application with external APIs.",
        "Optimized images and content for faster loading times.",
        "Monitored app performance after deployment.",
      ],
    },
  },

  {
    image: "/work/1.png",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    duties: {
      intro: "The project responsibilities included the following tasks:",
      list: [
        "Created a custom design system using Tailwind CSS.",
        "Built reusable components for the project.",
        "Connected the application with external APIs.",
        "Optimized images and content for faster loading times.",
        "Monitored app performance after deployment.",
      ],
    },
  },

  {
    image: "/work/1.png",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    duties: {
      intro: "The project responsibilities included the following tasks:",
      list: [
        "Created a custom design system using Tailwind CSS.",
        "Built reusable components for the project.",
        "Connected the application with external APIs.",
        "Optimized images and content for faster loading times.",
        "Monitored app performance after deployment.",
      ],
    },
  },

  {
    image: "/work/1.png",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    duties: {
      intro: "The project responsibilities included the following tasks:",
      list: [
        "Created a custom design system using Tailwind CSS.",
        "Built reusable components for the project.",
        "Connected the application with external APIs.",
        "Optimized images and content for faster loading times.",
        "Monitored app performance after deployment.",
      ],
    },
  },
];

const Work = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalDuties, setModalDuties] = useState({ intro: "", list: [] });

  const handleLinkClick = (duties) => {
    setModalDuties(duties);
    setModalOpen(true);
  };

  return (
    <div className=" relative mb-12 lg:mb-48">
      <div className=" container mx-auto">
        <div className="max-w-[350px] mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:h-[450px] flex flex-col justify-center items-center lg:items-start">
          <h2 className=" section-title mb-4">Work History</h2>
          <p className="subtitle mb-8">
            Each position listed reflects my career progression, skills
            development, and contributions to the organizations i&apos;ve worked
            for.
          </p>
          <Link href="/projects">
            <Button>View More</Button>
          </Link>
        </div>
        <div className=" lg:max-w-[900px] lg:absolute right-64 top-0">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  project={project}
                  onLinkClick={() => handleLinkClick(project.duties)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {isModalOpen && (
          <Workmodal onClose={() => setModalOpen(false)}>
            <h3 className="text-xl font-semibold mb-4">Duties</h3>
            <p>{modalDuties.intro}</p>
            <ul className="list-disc pl-5 mt-2">
              {modalDuties.list.map((duty, idx) => (
                <li key={idx}>{duty}</li>
              ))}
            </ul>
          </Workmodal>
        )}
      </div>
    </div>
  );
};

export default Work;
