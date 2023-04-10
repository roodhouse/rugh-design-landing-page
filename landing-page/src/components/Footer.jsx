import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest, FaYoutube} from 'react-icons/fa'
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className='w-full h-full pt-60'>
        <div className='block items-center bg-[#676766] w-full h-full'>
        <div className='pt-9 flex justify-center'>
            <div className='mb-9 w-[50%] flex justify-evenly'>
                <a href='https://www.instagram.com/rugh.design/' target='_blank'><FaInstagram size={30} fill={"white"}/></a>
                <a href='https://www.facebook.com/lauraerugh/' target='_blank'><FaFacebook size={30} fill={"white"}/></a>
                <a href='https://www.pinterest.com/lauraerugh/' target='_blank'><FaPinterest size={30} fill={"white"}/></a>
                <a href='https://www.youtube.com/channel/UC8k4gmYFHznUWCgvqHMbupA' target='_blank'><FaYoutube size={30} fill={"white"}/></a>
                <a href='mailto: laura@rughdesign.com' target='_blank'><CiMail size={30} fill={"white"}/></a>
            </div>
        </div>
        <div className='bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200'>
        © 2023 Copyright: Rugh Design | Design by <a className='text-neutral-800 dark:text-white' href='https://roodhouse.github.io/' target='_blank'>roodhouse</a>
        </div>
        </div>
    </div>
  )
}

export default Footer