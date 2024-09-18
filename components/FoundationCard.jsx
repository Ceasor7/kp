import React from "react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";

const FoundationCard = ({ foundation }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[280px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 lg:bg-work_projects_bg_light lg:dark:bg-work_projects_bg_dark lg:bg-[110%] lg:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={foundation.image}
            width={227}
            height={230}
            alt="project image"
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <h4 className="h4 mb-1">{foundation.name}</h4>
        <p className="text-muted-foreground">{foundation.description}</p>
      </div>
    </Card>
  );
};

export default FoundationCard;
