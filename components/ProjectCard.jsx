import React from "react";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const ProjectCard = ({ project, onLinkClick }) => {
  return (
    <Card className="group lg:h-[450px] overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[250px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 lg:bg-work_projects_bg_light lg:dark:bg-work_projects_bg_dark lg:bg-[110%] lg:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={227}
            height={230}
            alt="project image"
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground">{project.description}</p>

        <div className="mt-4">
          <Button onClick={onLinkClick}>View Details</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
