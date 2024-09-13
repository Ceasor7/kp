'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam? Aliquid similique et hic voluptate officiis, temporibus deserunt soluta vero explicabo!',
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam? Aliquid similique et hic voluptate officiis, temporibus deserunt soluta vero explicabo!',
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam? Aliquid similique et hic voluptate officiis, temporibus deserunt soluta vero explicabo!',
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam? Aliquid similique et hic voluptate officiis, temporibus deserunt soluta vero explicabo!',
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam? Aliquid similique et hic voluptate officiis, temporibus deserunt soluta vero explicabo!',
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam? Aliquid similique et hic voluptate officiis, temporibus deserunt soluta vero explicabo!',
    },
]


const Reviews = () => {
  return (
      <div className=' mb-12 lg:mb-32'> 
          <div className=' container mx-auto'>
              <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
              <Swiper
                  slidesPerView={1}
                  breakpoints={{
                      640: { slidesPerView: 2 },
                      1400: {slidesPerView: 3},
                  }}
                  spaceBetween={30}
                  modules={[Pagination]}
                  pagination={{
                      clickable: true
                  }}

              >
                  {reviewsData.map((person, index) => {
                      return (
                          <SwiperSlide key={index}
                              
                          >
                              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[250px]">
                                  <CardHeader className=" p-0 mb-10">
                                      <div className=' flex items-center gap-x-4'>
                                          <Image
                                              src={person.avatar}
                                              width={70}
                                              height={70}
                                              alt='Client picture'
                                              priority />
                                          <div className=' flex flex-col'>
                                              <CardTitle>{person.name}</CardTitle>
                                              <p>{person.job}</p>
                                          </div>
                                      </div>
                                  </CardHeader>
                                  <CardDescription className=" text-lg text-muted-foreground">
                                      {person.review}
                                  </CardDescription>
                      </Card>
                          </SwiperSlide>
                      )
                  })}
          </Swiper>
          </div>
      </div>
  )
}

export default Reviews