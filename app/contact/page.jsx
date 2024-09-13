import React from 'react'
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'
import Form from '../../components/Form'

const page = () => {
  return (
    <div>
      <div className=' container mx-auto'>
        <div className=' grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-6 lg:mb-24'>
          <div className=' flex flex-col justify-center'>
            <div className=' flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className=' w-[30px] h-[2px] bg-primary'></span>
              Say Hello 👋
            </div>
            <h1 className=' h1 max-w-md mb-8'>Let's Work Together</h1>
            <p className=' subtitle max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error hic cumque sint consequatur doloribus eius corrupti perferendis aliquam?</p>
          </div>
          <div className=' hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'>  </div>
        </div>
        <div className=' grid lg:grid-cols-2 mb-24 lg:mb-32'>
          <div className='flex flex-col gap-y-4 lg:gap-y-14 mb-12 lg:mb-24 text-base lg:text-lg'>
            <div className=' flex items-center gap-x-8'>
              <MailIcon size={18} className=' text-primary' />
              <div>kevin@kitfest.co.ke</div>
            </div>
            <div className=' flex items-center gap-x-8'>
              <HomeIcon size={18} className=' text-primary' />
              <div>Kenya cultural Center</div>
            </div>
            <div className=' flex items-center gap-x-8'>
              <PhoneCall size={18} className=' text-primary' />
              <div>+254 725 296 014</div>
            </div>
          </div>
          <form>
            <Form />
          </form>
        </div>
      </div>
    </div>
  )
}

export default page