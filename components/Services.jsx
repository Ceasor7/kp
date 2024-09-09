import React from "react";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum tenetur mollitia itaque odio laborum id iste in aliquid tempore, natus est accusantium esse eos nulla nostrum, animi libero alias!",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum tenetur mollitia itaque odio laborum id iste in aliquid tempore, natus est accusantium esse eos nulla nostrum, animi libero alias!",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Web Deployment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum tenetur mollitia itaque odio laborum id iste in aliquid tempore, natus est accusantium esse eos nulla nostrum, animi libero alias!",
  },
];

const Services = () => {
  return (
    <div className=" mb-12 lg:mb-36">
      <div className=" container mx-auto">
        <h2 className=" section-title mb-12 lg:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className=" grid lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[350px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className=" w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className=" text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
