import React from "react";
import FoundationCard from "../../components/FoundationCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../@/components/ui/tabs";

const foundations = [
  {
    name: "Kenya International Theatre Festival ",
    description:
      "Founded and successfully organized the Kenya International Theatre Festival from 2016 – 2021. The first and only theatre festival in Kenya currently in its 9th edition.",
    link: "https://kitfest.co.ke/",
    imgPath: "/achievements/kitfest.jpeg",
  },
  {
    name: "Kenya Theatre Awards",
    description:
      "Founded and successfully organized and hosted the Kenya Theatre Awards for three years.",
    link: "https://kenyatheatreawards.com/",
    imgPath: "/logos/kta.png",
  },
  {
    name: "Global Connector ",
    description:
      "Appointed as Global Connector and Africa’s representative by the IETM International network for contemporary performing arts Global Connectors 2023.",
    link: "/https://www.cali.institute/",
    imgPath: "/logos/ietm.png",
  },
  {
    name: "Kenya Cultural Center",
    description:
      "Successfully secured the first ever non-government funding for Kenya Cultural Centre from Heva Fund’s ignite culture in 2023",
    link: "/https://www.cali.institute/",
    imgPath: "/logos/kcc.png",
  },
  {
    name: "Atelier Elefsina 2023 ",
    description:
      "Selected for the MYSTERY 45 Atelier Elefsina 2023 in Elefsina, Greece, from 21-27 June 2023",
    link: "https://www.thefestivalacademy.eu/en/activities/atelier/atelier-elefsina-2023/",
    imgPath: "/logos/ae.png",
  },
  {
    name: "Kenya Cultural Center @70",
    description:
      "Spearheaded the first ever anniversary celebration of The Kenya Cultural Centre in the year 2022, marking seventy (70) years (KCC@70)",
    link: "https://www.kenyaculturalcentre.go.ke/70th-anniversary/",
    imgPath: "/logos/kcc70.png",
  },
  {
    name: "Performing Arts conference | KCC",
    description:
      "Successfully organized the first-ever Performing Arts conference at Kenya Cultural Centre in February 2022 just under eight months after my engagement.",
    link: "https://www.kenyaculturalcentre.go.ke/wp-content/uploads/2024/05/2nd-Performing-Arts-Conference-2024-1.pdf",
    imgPath: "/logos/kcc.png",
  },
  {
    name: "Planning and resource mobilization ",
    description:
      "Planning and resource mobilization for the KITFest and hosting Kenya teams and International acts from Ethiopia, Uganda, South Africa, USA, Sweden, Rwanda, Canada, Egypt, Germany, India, Czech Republic, Ghana, Colombia and Switzerland.",
    link: "https://kitfest.co.ke/",
    imgPath: "/logos/kitfest.svg",
  },
  {
    name: "Founding Principal of NIMPA",
    description:
      "Founding Principal of Nairobi Institute of Music and Performing Arts.",
    link: "https://nimpa.ac.ke/",
    imgPath: "/logos/nimpa.jpeg",
  },
];

const Page = () => {
  return (
    <div className=" container mx-auto min-h-screen">
      <h2 className=" section-title my-8 md:mb-16 text-center mx-auto">
        Achievements
      </h2>
      <div className="flex items-center justify-center">
        <Tabs defaultValue="achievements">
          <TabsList className="w-full flex justify-center lg:max-w-[1024px] lg:border lg:rounded-full dark:border-none">
            <TabsTrigger
              className="rounded-full w-[162px] lg:w-[500px] px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:text-black data-[state=active]:shadow-sm h-[48px]"
              value="achievements"
            >
              Achievements
            </TabsTrigger>

            <TabsTrigger
              className="rounded-full w-[162px] lg:w-[500px] px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:text-black data-[state=active]:shadow-sm h-[48px]"
              value="skills"
            >
              Founder
            </TabsTrigger>
          </TabsList>
          <div className=" py-16">
            <TabsContent value="achievements">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {foundations.map((foundation, index) => (
                  <FoundationCard
                    key={index}
                    name={foundation.name}
                    description={foundation.description}
                    link={foundation.link}
                    imgPath={foundation.imgPath}
                  />
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
