import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <div className=" py-24 bg-tertiary dark:bg-secondary/40">
      <div className=" container mx-auto">
        <div className=" flex flex-col items-center">
          <h2 className=" h2 max-w-xl text-center mb-8">
            {" "}
            I&apos;m excited to connect with you. Whether you have a question,
            collaboration idea, or just want to say hello, feel free to reach
            out. Looking forward to hearing from you!
          </h2>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
