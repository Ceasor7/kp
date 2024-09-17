import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import { Badge } from "../@/components/ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className=" relative w-full h-[280px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 lg:bg-work_projects_bg_light lg:dark:bg-work_projects_bg_dark lg:bg-[110%] lg:bg-no-repeat overflow-hidden ">
          <Image
            className=" absolute bottom-0 shadow-2xl"
            src={project.image}
            width={227}
            height={230}
            alt="project image"
            priority
          />
          <div className=" flex gap-x-5" >
            <Link href={project.link} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"><Link2Icon className=" text-black dark:text-white" /></Link>
            <Link href={project.github} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"><GitHubLogoIcon className=" text-black dark:text-white" /></Link>
          </div>
        </div>
      </CardHeader>
      <div className=" h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-5 left-5">
          {project.category}
        </Badge>
        <h4 className=" h4 mb-1">{project.name}</h4>
        <p className=" text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
