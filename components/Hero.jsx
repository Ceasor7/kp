import { Send } from "lucide-react";
import Link from "next/link";
import Socials from "./Socials";
import { Button } from "./ui/button";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="py-12 lg:pt-10">
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 w-full">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]">
              International Relations | Theatre enthusiast
            </div>
            <h1 className="text-4xl font-bold mb-2">Kevin Kimani Kahuro</h1>
            <p className="subtitle max-w-[490px] mb-6">
              Kevin Kimani Kahuro possesses a diverse skill set that includes
              expertise in International Cultural Relations, strong management
              skills encompassing technical and conceptual abilities, financial
              acumen, and management proficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative z-0 flex justify-center items-center">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="relative w-72 h-32 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-70 rounded-xl blur-lg"></div>
              </div>

              <Image
                src="/kev.jpeg"
                alt="kevin kimani"
                width={300}
                height={100}
                className="relative z-10 rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce">
          <RiArrowDownSLine className=" text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
