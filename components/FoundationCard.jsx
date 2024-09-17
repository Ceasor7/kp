"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const FoundationCard = ({ name, description, link, imgPath }) => {
  return (
    <div>
      <div className="h-[400px]">
        <div>
          <div className=" flex flex-col justify-center items-center text-center">
            <Image
              src={imgPath}
              alt={name}
              className=" border border-gray-200 p-1 shadow-2xl rounded-md dark:border-secondary"
              width={150}
              height={100}
            />
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <div className=" text-center">{description}</div>
        </div>
        <div className="flex justify-center items-center">
          <Button>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoundationCard;
