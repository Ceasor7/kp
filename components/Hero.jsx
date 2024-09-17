import { Send } from 'lucide-react';
import Link from 'next/link';
import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from 'react-icons/ri';
import Socials from './Socials';
import { Button } from './ui/button';
import Badge from "./Badge"
import KevImg from './KevImg';

const Hero = () => {
  return (
    <section className=" py-12 lg:py-24 h-[84vh] lg:pt-10">
      <div className=" container mx-auto">
        <div className=" flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto md:mx-0 text-center md:text-left">
            <div className=" text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]">
              International Relations | Theatre enthusiast
            </div>
            <h1 className="h1 mb-2">Kevin Kimani Kahuro</h1>
            <p className="subtitle max-w-[490x] mx-auto md:mx-0">
              Kevin Kimani Kahuro is a professional, top performing and goal-oriented theatre manager and lecturer with excellent skills in strategic planning, partnerships and resource mobilization.
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

                <div className=' hidden lg:flex relative'>
                {/*<Badge
                containerStyles="absolute top-[12%] -left-[3rem]" 
                icon={<RiBriefcase4Fill />} 
                endCountNum={3} 
                badgeText='Years of Experience' 
                />*/}
                <Badge 
                containerStyles="absolute text-black top-[65%] -left-[3rem]" 
                icon={<RiTodoFill />} 
                endCountNum={22} 
                /*endCountText="k"*/
                badgeText='Initiated Projects' 
                />
                <Badge 
                containerStyles="absolute text-black top-[55%] -right-[7rem]" 
                icon={<RiTeamFill />} 
                endCountNum={20} 
              /*endCountText="k"*/
                badgeText='Finished projects' 
                />
                    <div className=' bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                    <KevImg containerStyles=" w-[420px] h-[320px] " imgSrc="/kevnew.png" />
                </div>
            </div>
            <div className=' hidden lg:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce' >
                <RiArrowDownSLine className=' text-3xl text-primary' />
            </div>
        </div>
    </section>
  );
};

export default Hero;
