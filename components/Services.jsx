import React from "react";
import { Telescope, Handshake, Key, Lightbulb } from "lucide-react";
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
    icon: <Key size={72} strokeWidth={0.8} />,
    title: "Power of Passion",
    description:
      "My most powerful weapon is passion. It provides the ignition I require to succeed. When I believe in something with a passionate heart, I do whatever it takes to make it a reality. ",
  },
  {
    icon: <Handshake size={72} strokeWidth={0.8} />,
    title: "Integrity",
    description:
      "I’m founded and governed by strong moral principles of; sincerity, scrupulousness, honor and rectitude. ",
  },
  {
    icon: <Telescope size={72} strokeWidth={0.8} />,
    title: "Visionary",
    description:
      "I demonstrate the ability to transport myself in to the future in my mind, create clarity on what it looks like, feels like, and acts like, and then, come back to today, translate the vision into reality.",
  },
  {
    icon: <Lightbulb size={72} strokeWidth={0.8} />,
    title: "Creativity",
    description:
      "Innovative and original approaches towards addressing and handling issues.",
  },
];

const Services = () => {
  return (
    <div className=" mb-12 lg:mb-36">
      <div className=" container mx-auto">
        <h2 className=" section-title mb-12 lg:mb-24 text-center mx-auto">
          My Attributes
        </h2>
        <div className=" grid lg:grid-cols-2 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-4">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[400px] flex flex-col pt-16 pb-10 justify-center items-center relative"
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
