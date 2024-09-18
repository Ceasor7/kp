import React from "react";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  { path: "https://www.facebook.com/kevo.kim1/", name: <RiFacebookBoxFill /> },
  {
    path: "https://www.linkedin.com/in/kevin-kimani-kahuro-61944370",
    name: <RiLinkedinFill />,
  },
  { path: "/", name: <RiYoutubeFill /> },
  { path: "https://x.com/KahuroKimani", name: <RiTwitterXFill /> },
  { path: "https://www.instagram.com/kevinkahuro/", name: <RiInstagramFill /> },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
