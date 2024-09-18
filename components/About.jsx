import React from "react";
import KevImg from "./KevImg";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Kevin Kimani",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+254 725 296014",
  },
  {
    icon: <MailIcon size={20} />,
    text: "kevinkimani76@gmail.com",
  },
  {
    icon: <MailIcon size={20} />,
    text: "kevin@kenyaculturalcentre.go.ke",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Mar, 1989",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on theatre and Film | Kenyatta University",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Kiambu county, Kiambu",
  },
];

const qualificationData = [
  {
    title: "education 2004 - 2018",
    data: [
      {
        university: "Kenyatta University",
        qualification: "Masters in Film and Theatre Arts",
        years: "2014 - 2018",
      },
      {
        university: "Kenyatta University",
        qualification: "	Bachelor of Arts – Theatre Arts and Film Technology",
        years: "2009 - 2013",
      },
      {
        university: "Komothai Boys High School",
        qualification: "Kenya Certificate of Secondary Education ( B+)",
        years: "2004 – 2007",
      },
    ],
  },
  {
    title: "education 2018 - upto date",
    data: [
      {
        university: "Kenyatta University",
        qualification: "PhD in Arts Management",
        years: "2022 – to date",
      },
      {
        university: " Kenya School of Government",
        qualification: "Senior Management Course",
        years: "January 2023 – April 2023",
      },
      {
        university: "Kenya Institute of Management",
        qualification: "Certificate in Strategic Management and Leadership",
        years: "2019 - 2020",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "♦ International Cultural Relations - I possess strong skills in International Cultural Relations, including the ability to navigate cultural differences, develop cross-cultural communication strategies, and build relationships with individuals and organizations from diverse cultural backgrounds.",
      },
      {
        name: "♦ Management Skills - Adequate capacity to perform executive duties in an organization while avoiding crisis situations and promptly solving problems when they occur. These skills include; ",
      },
      {
        name: "1. Conceptual Skills",
      },
      {
        name: "2. Interpersonal Skills",
      },
      {
        name: "3 Theatre management skills",
      },
      {
        name: "4 Marketing skills",
      },
      {
        name: "5 Strategic planning skills",
      },
      {
        name: "♦ Supervision and Leadership",
      },
      {
        name: "♦ Communications and Interpersonal skills",
      },
      {
        name: "♦ ICT Competency - Proficient in Mac & windows environment, competent in Microsoft Office Application suite, the internet and emails",
      },
      {
        name: "♦ Driving skills - I possess strong driving skills with a proven track record of safe and efficient operation of vehicles",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <div className=" lg:h-[860px] mt-16 sm:mt-0 pb-12 lg:py-24">
      <div className=" container mx-auto">
        <h2 className=" section-title mb-8 md:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className=" flex flex-col lg:flex-row">
          <div className=" flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid justify-center lg:grid-cols-3 lg:max-w-[1024px] lg:border lg:rounded-full dark:border-none">
                <TabsTrigger
                  className="rounded-full w-[162px] lg:w-auto px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:text-black data-[state=active]:shadow-sm h-[48px]"
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-full w-[162px] lg:w-auto px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:text-black data-[state=active]:shadow-sm h-[48px]"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-full w-[162px] lg:w-auto px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white dark:data-[state=active]:text-black data-[state=active]:shadow-sm h-[48px]"
                  value="skills"
                >
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 lg:mt-8">
                <TabsContent value="personal">
                  <div className=" text-center lg:text-left">
                    <p className=" subtitle max-w-5xl mx-auto lg:mx-0">
                      Kevin Kimani Kahuro is a skilled expert in International
                      Cultural Relations, management, strategic planning, and
                      marketing, with a strong background in cultural exchange
                      and leadership. He holds a Bachelor&apos;s and
                      Master&apos;s degree in Film and Theatre Arts, is pursuing
                      a PhD in Arts Management, and currently serves as Programs
                      and Business Development Manager at the Kenya Cultural
                      Centre, as well as Secretary General of the African
                      Theatre Union. He is the founder of several arts
                      initiatives, including the Kenya International Theatre
                      Festival and Kenya Theatre Awards, and is involved in
                      various prestigious organizations such as IETM, the Arts
                      Society of Kenya, and the Kenya Music Festival.
                    </p>
                    <div className=" grid lg:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className=" flex items-center gap-x-4 mx-auto lg:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className=" flex flex-col gap-y-2">
                      <div className=" text-primary">Language Skills</div>
                      <div className=" border-b border-border"></div>
                      <div>English, Swahili & Kikuyu</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className=" h3 mb-8 text-center lg:text-left">
                      My Academic Journey
                    </h3>
                    <div className=" grid md:grid-cols-2 gap-y-8">
                      <div className=" flex flex-col gap-y-6">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className=" capitalize font-medium">
                            {
                              getData(
                                qualificationData,
                                "education 2018 - upto date"
                              ).title
                            }
                          </h4>
                        </div>
                        <div className=" flex flex-col gap-y-8">
                          {getData(
                            qualificationData,
                            "education 2018 - upto date"
                          ).data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className=" flex gap-x-8 group" key={index}>
                                <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className=" font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className=" text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className=" text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className=" flex flex-col gap-y-6">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className=" capitalize font-medium">
                            {
                              getData(
                                qualificationData,
                                "education 2004 - 2018"
                              ).title
                            }
                          </h4>
                        </div>
                        <div className=" flex flex-col gap-y-8">
                          {getData(
                            qualificationData,
                            "education 2004 - 2018"
                          ).data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className=" flex gap-x-8 group" key={index}>
                                <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className=" font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className=" text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className=" text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className=" text-center lg:text-left">
                    <h3 className=" h3 mb-8">What i Use everyday</h3>
                    <div className=" mb-16">
                      <h4 className=" text-xl font-semibold mb-2">Skills</h4>
                      <div className=" border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className=" text-center lg:text-left mx-auto lg:mx-0"
                              >
                                <div className=" font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
