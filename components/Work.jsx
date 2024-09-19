"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";
import Workmodal from "./Workmodal";
import { X } from "lucide-react";

const projectData = [
  {
    image: "/work/kcc.png",
    name: "Kenya Cultural Centre ",
    description:
      "Manager - Programs and Business Development | June 2023 – To date ",
    duties: {
      intro:
        "Steering the creative production process from beginning to completion and ensuring commercial viability of KCC products",
      list: [
        "Implementing the core mandate of the Centre",
        "Ensuring incubation of creative ideas",
        "Assembling, cataloguing, preserving and managing valuable collections of arts and culture information",
        "Negotiating the acquisition of new collections on cultural heritage",
        "Leading business development activities in established service areas such as cultural consulting, exhibition designs and content development, and in emerging service areas such as the digital",
        "Working with the Management Team to identify strategic opportunities in new geographic areas, sectors or service areas",
        "Liaising with partners, especially cultural and artistic firms on joint proposals and other business development activities",
      ],
    },
  },
  {
    image: "/work/kitft.png",
    name: "Kenya International Theatre Festival Trust ",
    description: "Chairperson  | August 2021 - To Date ",
    duties: {
      intro:
        "Governance and Leadership, Strategic Planning and Development, Financial Oversight and Management",
      list: [
        "Provide strategic leadership to the Board, ensuring effective governance.",
        "Develop and implement the Trust’s vision, mission, and long-term strategy.",
        "Collaborate with the Festival Director to define the Trust's strategic direction.",
        "Oversee strategic plans to achieve the Trust’s objectives.",
        "Ensure sustainable financial management and long-term planning.",
        "Recruit, develop, and support Trustees, ensuring a skilled Board.",
        "Build strong relationships with funders, partners, artists, and community organizations.",
      ],
    },
  },
  {
    image: "/work/kcc.png",
    name: "Kenya Cultural Centre ",
    description:
      "Principal Creative Production Officer  | July 2021 – June 2023 ",
    duties: {
      intro:
        "As a Principal Creative Production Officer, I perform and undertake the following duties and responsibilities",
      list: [
        "Plan, coordinate and implement creative programs for the Kenya Cultural Centre",
        "Mobilize resources to support creative activities of the Centre",
        "Steer the creative production process from beginning to completion and ensure commercial viability of the products by turning story ideas into profitable creative productions",
        "Ensure incubation of creative ideas",
        "Lead all production efforts including hiring, supervising all staff and crew",
        "Coordinate with other theatre personnel to ensure the efficiency of the production process",
        "Liaise between the cast, crew, and director",
      ],
    },
  },
  {
    image: "/work/atu.png",
    name: "Africa Theatre Union(ATU)",
    description:
      "Africa Theatre Union Secretary General  | April 2019 - To Date ",
    duties: {
      intro:
        "As the Secretary General, I perform and undertake the following duties and responsibilities",
      list: [
        "Liaising with the Chair to plan meetings",
        "Receiving agenda items from committee members",
        "Circulating agendas and reports",
        "Checking that agreed actions are carried out.",
        "Keeping up-to-date contact details (i.e. names, addresses and telephone numbers) for the management committee and (where relevant) ordinary members of the organization.",
        "Compiling lists of names and addresses that are useful to the organization, including those of appropriate officials or officers of voluntary organizations.",
        "Keeping a record of the organization’s activities",
      ],
    },
  },
  {
    image: "/work/nimpa.png",
    name: "NIMPA",
    description:
      "Principal and Head of Theatre Arts Department  | September 2018 - To Date ",
    duties: {
      intro:
        "As Principal and Head of Theatre Arts Department, I perform and undertake the following duties and responsibilities",
      list: [
        "Developing a strategic plan for NIMPA, Engaging the staff of NIMPA in devising and agreeing the School's plan, Reviewing the performance of the institution in terms of its objectives as stated in its strategic plan and in its staffing and resource plan.",
        "Act as the secretary of NIMPA Board of Management, Act as the Head of Institution and report to the Board and any other organ of the Board, Staff recruitment matters that fall within the remit of NIMPA.",
        "Ensuring the effective delivery of high-quality teaching and the maintenance of academic standards., Promoting a culture of learning that is directed to student and industry’s needs, and of teaching that is informed by the research interests of NIMPA’s staff",
      ],
    },
  },
  {
    image: "/work/kitfest.png",
    name: "Kenya International Theatre Festival ",
    description: "Festival Director  | January 2013 - July 2021 ",
    duties: {
      intro:
        "As Festival Director, I performed the following duties and responsibilities",
      list: [
        "Define the strategic vision for the Kenya International Theatre Festival as a leading curated multi-­‐disciplinary performing arts festival presenting bold and new performances.",
        "Develop a vision for the Festival to create a dynamic, forward looking and engaging Festival program.",
        "Work with the Board of Trustees to assess the festival strategic plans, identifying opportunities for improvement while keeping all activities in line with the festival’s mission.",
        "Ensure the Festival’s objectives and activities are communicated effectively internally, externally, and to all stakeholders, working with the team to ensure excellent customer service is delivered on a consistent basis",
        "Build, strengthen and consolidate relationships with festival partners.",
      ],
    },
  },
  {
    image: "/work/ku.png",
    name: "Kenyatta University ",
    description:
      "Part-Time Lecturer, Dep of Film & Theatre Arts  | September 2013 - To Date ",
    duties: {
      intro:
        "Theatre and film lecturer tasked with developing course outlines, teaching and examining the following units;",
      list: [
        "Stage Acting",
        "Stage Directing",
        "Stage Craft",
        "Cinematography",
        "Graphics design",
        "Sound in theatre production",
        "Lighting in Theatre Production",
      ],
    },
  },
  {
    image: "/work/filamu.png",
    name: "Filamu Interntional Students Festival ",
    description: "Head Of Operations  | 2009 - 2013 ",
    duties: {
      intro:
        "As Head Of Operations, I performed the following duties and responsibilities",
      list: [
        "Provide support to the Festival Director",
        "Secure and organize films for the Filamu International Student Festival",
        "Help run and promote Festival’s call for Entry to the film community around the world",
        "Help to organize and oversee a pre-selection committee. ",
        "Develop criteria for film selection and create an online survey for pre-screeners to evaluate films",
        "Organize database of filmmakers who have submitted films",
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

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

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
            <div ref={modalRef}>
              <div className=" flex justify-between">
                <h3 className="text-xl font-semibold mb-4">Duties</h3>
                <X
                  size={20}
                  onClick={() => setModalOpen(false)}
                  className=" cursor-pointer"
                />
              </div>

              <p>{modalDuties.intro}</p>
              <ul className="list-disc pl-5 mt-2">
                {modalDuties.list.map((duty, idx) => (
                  <li key={idx}>{duty}</li>
                ))}
              </ul>
            </div>
          </Workmodal>
        )}
      </div>
    </div>
  );
};

export default Work;
