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
    text: "kevin@kitfest.co.ke",
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
    title: "education",
    data: [
      {
        university: "example University",
        qualification: "Bachelor of Theatre and Film",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Bachelor of Theatre and Film",
        years: "2015 - 2018",
      },
      {
        university: "Another 2 University",
        qualification: "Bachelor of Theatre and Film",
        years: "2015 - 2018",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Kenya International Theatre Festival Trust",
        role: "Intern Software engineer",
        years: "2015 - 2018",
      },
      {
        company: "Kenya cultural Center",
        role: "Junior Software engineer",
        years: "2015 - 2018",
      },
      {
        company: "Kenya National Theatre",
        role: "Senior software engineer",
        years: "2015 - 2018",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "International Relations",
      },
      {
        name: "International Relations",
      },
      {
        name: "International Relations",
      },
      {
        name: "International Relations",
      },
      {
        name: "International Relations",
      },
      {
        name: "International Relations",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
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
          <div className=" hidden lg:flex flex-1 relative">
            <KevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[400px] h-[400px] bg-no-repeat relative"
              imgSrc="/kevnew.png"
            />
          </div>
          <div className=" flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border lg:rounded-full dark:border-none">
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
                    <h3 className=" h3 mb-4">
                      Unmatched Service quality for over 10 years
                    </h3>
                    <p className=" subtitle max-w-xl mx-auto lg:mx-0">
                      I speacialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience
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
                      <div>English, French, Spanish, Italian</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className=" h3 mb-8 text-center lg:text-left">
                      My Awesome Journey
                    </h3>
                    <div className=" grid md:grid-cols-2 gap-y-8">
                      <div className=" flex flex-col gap-y-6">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className=" capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className=" flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  className=" flex gap-x-8 group"
                                  key={index}
                                >
                                  <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className=" text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className=" text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className=" flex flex-col gap-y-6">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className=" capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className=" flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className=" flex gap-x-8 group"
                                  key={index}
                                >
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
                            }
                          )}
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
                                className=" w-2/4 text-center lg:text-left mx-auto lg:mx-0"
                              >
                                <div className=" font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className=" text-xl font-semibold mb-2 lg:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className=" flex gap-x-8 justify-center lg:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt="Tools i use"
                                priority
                              />
                            </div>
                          );
                        })}
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
