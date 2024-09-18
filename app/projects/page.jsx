"use client";
import React, { useState } from "react";
import Workmodal from "../../components/Workmodal";
import ProjectCard from "../../components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    duties: {
      intro:
        "During the development of this project, the following duties were performed:",
      list: [
        "Designed and developed the frontend using React.",
        "Integrated the backend API with the frontend.",
        "Ensured responsiveness across devices.",
        "Implemented authentication and authorization.",
        "Handled deployment and post-deployment monitoring.",
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

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalDuties, setModalDuties] = useState({ intro: "", list: [] });

  const handleLinkClick = (duties) => {
    setModalDuties(duties);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 lg:mb-16 text-center mx-auto">
          My Work History
        </h2>
        <p className=" subtitle text-center mx-auto lg:mx-0">
          The Work History page offers a comprehensive view of my career path,
          illustrating a broad range of experiences across cultural management,
          project leadership, and financial oversight. Each role is detailed
          with key responsibilities such as leading international teams,
          managing cross-border cultural exchange programs, and ensuring the
          successful execution of large-scale cultural projects. The page
          reflects my management proficiency, from conceptualizing initiatives
          to overseeing financial strategies and driving sustainable cultural
          growth.
        </p>
        <div className="text-lg lg:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onLinkClick={() => handleLinkClick(project.duties)}
            />
          ))}
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

export default Page;
