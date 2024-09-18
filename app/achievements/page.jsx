"use client";
import React, { useState } from "react";
import FoundationCard from "../../components/FoundationCard";
import Modal from "../../components/Modal";

const foundationData = [
  {
    image: "/work/kitfest.png",
    name: "Kenya International Theatre Festival",
    description:
      "Founded and successfully organized the Kenya International Theatre Festival from 2016 – 2021. The first and only theatre festival in Kenya currently in its 9th edition.",
  },
  {
    image: "/work/kta.png",
    name: "Kenya Theatre Awards ",
    description:
      "Founded and successfully organized and hosted the Kenya Theatre Awards for three years.",
  },

  {
    image: "/work/ietm.png",
    name: "IETM Africa’s representative",
    description:
      "Appointed as Global Connector and Africa’s representative by the IETM International network for contemporary performing arts Global Connectors 2023.",
  },

  {
    image: "/work/kcc.png",
    name: "Secured Funding for KCC",
    description:
      "Successfully secured the first ever non-government funding for Kenya Cultural Centre from Heva Fund’s ignite culture in 2023.",
  },

  {
    image: "/work/fest.png",
    name: "Selected for MYSTERY 45 Atelier Elefsina 2023 ",
    description:
      "Selected for the MYSTERY 45 Atelier Elefsina 2023 in Elefsina, Greece, from 21-27 June 2023",
  },

  {
    image: "/work/kcc70.png",
    name: "Spearheaded KCC@70 Celebrations ",
    description:
      "Spearheaded the first ever anniversary celebration of The Kenya Cultural Centre in the year 2022, marking seventy (70) years (KCC@70)",
  },

  {
    image: "/work/kcc.png",
    name: "organized the first-ever Performing Arts conference",
    description:
      "Successfully organized the first-ever Performing Arts conference at Kenya Cultural Centre in February 2022 just under eight months after my engagement.",
  },
  {
    image: "/work/kitfest.png",
    name: "Spearheaded Partnerships KITFest & KCC",
    description:
      "Spearheaded Partnerships with Government and Private sector in the planning and running of the KITFEST and Kenya Cultural Centre programs.",
  },
  {
    image: "/work/nimpa.png",
    name: "Founding Principal NIMPA",
    description:
      "Founding Principal of Nairobi Institute of Music and Performing Arts.",
  },
];

const Page = () => {
  return (
    <div className="container mx-auto min-h-screen py-16">
      <h2 className="section-title my-8 md:mb-16 text-center mx-auto">
        My Achievements
      </h2>
      <p className=" subtitle text-center mx-auto lg:mx-0">
        The Achievements page showcases the significant milestones and accolades
        earned throughout my professional journey as an individual. It
        highlights successful international cultural initiatives, partnerships
        forged with global institutions, and recognition received for
        outstanding leadership in cultural diplomacy. This page features project
        descriptions, awards, and media coverage that underscore their expertise
        in cross-cultural relations, strategic management, and impact on global
        cultural policies.
      </p>
      <div className="text-lg lg:mt-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {foundationData.map((foundation, index) => (
          <FoundationCard key={index} foundation={foundation} />
        ))}
      </div>
    </div>
  );
};

export default Page;
