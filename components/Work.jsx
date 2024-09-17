"use client";
import React from "react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

const projectData = [
  {
    image: "/work/3.png",
    category: "react JS",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react JS",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react JS",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS ",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS ",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS ",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS ",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS ",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS ",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS ",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <div className=" relative mb-12 lg:mb-48">
      <div className=" container mx-auto">
        <div className="max-w-[350px] mx-auto lg:mx-0 text-center lg:text-left mb-12 lg:h-[400px] flex flex-col justify-center items-center lg:items-start">
          <h2 className=" section-title mb-4">Work History</h2>
          <p className="subtitle mb-8">
            Each position listed reflects my career progression, skills
            development, and contributions to the organizations you've worked
            for.
          </p>
          <Link href="/projects">
            <Button>View More</Button>
          </Link>
        </div>
        <div className=" lg:max-w-[800px] lg:absolute right-0 top-0">
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
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Work;
