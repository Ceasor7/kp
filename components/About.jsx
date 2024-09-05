import React from 'react'
import KevImg from './KevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../@/components/ui/tabs"
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react'


const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Ryan Davis",
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+254 725 296014",
    },
    {
        icon: <MailIcon size={20} />,
        text: "kevin@kitfest.co.ke",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on 10 Mar, 1989",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Master on theatre and Film | Kenyatta University",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Kiambu county, Kiambu",
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'example University',
                qualification: 'Bachelor of Theatre and Film',
                years: '2015 - 2018',
            },
            {
                university: 'Another University',
                qualification: 'Bachelor of Theatre and Film',
                years: '2015 - 2018',
            },
            {
                university: 'Another 2 University',
                qualification: 'Bachelor of Theatre and Film',
                years: '2015 - 2018',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Kenya International Theatre Festival Trust',
                qualification: 'Bachelor of Theatre and Film',
                years: '2015 - 2018',
            },
            {
                company: 'Kenya cultural Center',
                qualification: 'Bachelor of Theatre and Film',
                years: '2015 - 2018',
            },
            {
                company: 'Kenya National Theatre',
                qualification: 'Bachelor of Theatre and Film',
                years: '2015 - 2018',
            },
            
        ]
    },
]

const skillData =[
    {
        title: 'skills',
        data: [
            {
                name: 'International Relations'
            },
            {
                name: 'International Relations'
            },
            {
                name: 'International Relations'
            },
            {
                name: 'International Relations'
            },
            {
                name: 'International Relations'
            },
            {
                name: 'International Relations'
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/figma.svg'
            },
            {
                imgPath: '/about/notion.svg'
            },
            {
                imgPath: '/about/wordpress.svg'
            }            
        ]
    },
]


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }

  return (
    <div className=' lg:h-[860px] pb-12 lg:py-24'>
        <div className=' container mx-auto'>
            <h2 className=' section-title mb-8 md:mb-16 text-center mx-auto'>About Me</h2>
            <div className=' flex flex-col lg:flex-row'>
                <div className=' hidden lg:flex flex-1 relative'>
                    <KevImg
                    containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/developer.png"
                     />
                </div>
                <div className=' flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border lg:rounded-full dark:border-none">
                            <TabsTrigger className="rounded-full w-[162px] lg:w-auto px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px]" value="personal">Personal Info</TabsTrigger>
                            <TabsTrigger className="rounded-full w-[162px] lg:w-auto px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px]" value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger className="rounded-full w-[162px] lg:w-auto px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px]" value="skills">Skills</TabsTrigger>
                        </TabsList>
                        <div className='text-lg mt-12 lg:mt-8'>
                            <TabsContent value="personal">
                                <div className=' text-center lg:text-left'>
                                    <h3 className=' h3 mb-4'>Unmatched Service quality for over 10 years</h3>
                                    <p className=' subtitle max-w-xl mx-auto lg:mx-0'>I speacialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experience</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="qualifications">Qualifications Info</TabsContent>
                            <TabsContent value="skills">skills info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About