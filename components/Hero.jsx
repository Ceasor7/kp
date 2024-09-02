import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import {
    RiTeamFill,
    RiBriefcase4Fill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri"
import KevImg from './KevImg'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
  return (
    <section className=' py-12 md:py-24 h-[84vh] md:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className=' container mx-auto'>
            <div className=' flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto md:mx-0 text-center md:text-left'>
                    <div className=' text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                    <h1 className='h1 mb-4'>Hello, my name is Ryan Davis</h1>
                    <p className='subtitle max-w-[490x] mx-auto md:mx-0'>Brief description with insights into myself, my vocational journey, and what i engage in proffessionally</p>
                    <div className='flex flex-col gap-y-3 sm:flex-row gap-x-3 mx-auto lg:mx-0 mb-12'>
                        <Link href='/contact'>
                            <Button className="gap-x-2">Contact me <Send size={18} /></Button>
                        </Link>
                        <Button variant='secondary' className='gap-x-2'>
                            Download CV
                        </Button>
                    </div>
                    <Socials
                    containerStyles='flex gap-x-6 mx-auto lg:mx-0'
                    iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                     />
                </div>

                <div className=' hidden md:flex relative'>
                    <div className=' bg-hero_shape2_light'></div>
                </div>
            </div>
            <div className=' hidden sm:flex absolute left-2/4 bottom-44 md:bottom-12 animate-bounce' >
                <RiArrowDownSLine className=' text-3xl text-primary' />
            </div>
        </div>
    </section>
  )
}

export default Hero