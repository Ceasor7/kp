'use client'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../@/components/ui/tabs'
import ProjectCard from '../../components/ProjectCard'

const projectData = [
  {
    image: "/work/3.png",
    category: "react JS",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react JS",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react JS",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS ",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Page = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category;
  });

  return (
    <div className=' min-h-screen pt-12'>
      <div className=' container mx-auto'>
        <h2 className=' section-title mb-8 lg:mb-16 text-center mx-auto'>My Projects</h2>
        <Tabs defaultValue={category} className=' mb-24 lg:mb-48'>
          <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border lg:rounded-full dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index} // Adding the missing key prop
                  onClick={() => setCategory(category)}
                  value={category}
                  className="rounded-full w-[162px] capitalize lg:w-auto px-3 py-1.5 inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm h-[48px]"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className=' text-lg lg:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Page; // Use the corrected uppercase component name
