import { Send } from "lucide-react";
import Link from "next/link";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import Socials from "./Socials";
import { Button } from "./ui/button";
import Badge from "./Badge";
import KevImg from "./KevImg";

const Hero = () => {
  return (
    <section className=" py-12 lg:py-24 lg:h-[550px] lg:pt-10">
      <div className=" container mx-auto flex justify-center items-center">
        <div className=" grid grid-cols-1 mx-auto max-w-full lg:grid-cols-2 gap-x-48">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto md:mx-0 text-center md:text-left">
            <div className=" text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]">
              International Relations | Theatre enthusiast
            </div>
            <h1 className="h1 mb-2">Kevin Kimani Kahuro</h1>
            <p className="subtitle max-w-[490x] mx-auto md:mx-0">
              Kevin Kimani Kahuro possesses a diverse skill set that includes
              expertise in International Cultural Relations, strong management
              skills encompassing technical and conceptual abilities, financial
              acumen, and management proficiency. With strategic planning,
              leadership, and marketing skills, Kevin excels in fostering
              cultural exchange, problem-solving, and motivating teams while
              demonstrating excellent communication and ICT competency.
            </p>
            <div className="flex flex-col gap-y-3 sm:flex-row gap-x-3 mx-auto lg:mx-0 mb-6">
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
              containerStyles="flex gap-x-6 mx-auto lg:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className=" flex lg:max-w-[500px] relative">
            {/*<Badge
                containerStyles="absolute top-[12%] -left-[3rem]" 
                icon={<RiBriefcase4Fill />} 
                endCountNum={3} 
                badgeText='Years of Experience' 
                />*/}
            <Badge
              containerStyles="absolute text-black top-[55%] -left-[7rem]"
              icon={<RiTodoFill />}
              endCountNum={22}
              endCountText="k"
              badgeText="Initiated Projects"
            />
            {/*<Badge
                containerStyles="absolute text-black top-[55%] -right-[7rem]"
                icon={<RiTeamFill />}
                endCountNum={20}
                endCountText="k"
                badgeText="Finished projects"
              /> */}
            <div className=" hidden lg:flex bg-hero_shape2_light bg dark:bg-hero_shape2_dark w-[700px] h-[700px] sm:w-[500px] sm:h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <KevImg
              containerStyles=" w-[370px] h-[340px] lg:w-[420px] lg:h-[310px]  md:w-[200px] md:h-[600px] "
              imgSrc="/kevnew.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
