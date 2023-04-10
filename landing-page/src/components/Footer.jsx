import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest} from 'react-icons/fa'
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <div className='w-full h-full'>
        <div className='block items-center bg-[#676766] w-full h-full'>
        <div className='pt-9 flex justify-center'>
            <div className='mb-9 w-[50%] flex justify-evenly'>
                <a href='#' className=''><FaInstagram size={30} fill={"white"}/></a>
                <a href='#' className=''><FaFacebook size={30} fill={"white"}/></a>
                <a href='#' className=''><FaPinterest size={30} fill={"white"}/></a>
                <a href='#' className=''><CiMail size={30} fill={"white"}/></a>
            </div>
        </div>
        <div className='bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200'>
        © 2023 Copyright: Rugh Design | Design by <a className='text-neutral-800 dark:text-white' href='https://roodhouse.github.io/'>roodhouse</a>
        </div>
        </div>
    </div>
  )
}

export default Footer


// <!--Footer container-->
// <footer class="bg-neutral-200 text-center text-white dark:bg-neutral-600">
//   <div class="container pt-9">
//     <div class="mb-9 flex justify-center">
//       <a href="#!" class="mr-9 text-neutral-800 dark:text-neutral-200">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           class="h-4 w-4"
//           fill="currentColor"
//           viewBox="0 0 24 24">
//           <path
//             d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//         </svg>
//       </a>

//     </div>
//   </div>

//   <!--Copyright section-->
//   <div
//     class="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
//     © 2023 Copyright:
//     <a
//       class="text-neutral-800 dark:text-neutral-400"
//       href="https://tailwind-elements.com/"
//       >Tailwind Elements</a
//     >
//   </div>
// </footer>