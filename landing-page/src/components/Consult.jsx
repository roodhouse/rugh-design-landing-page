import React from 'react'
import Interior from '../assets/interior-color-consultation.png'

function Consult() {
  return (
    <div name='consult' className='w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-row justify-center w-full h-full'>
            <div className='max-w-[75%]'>
                <p className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>Color Consultation</p>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='max-w-[25%]'>
                <img src={Interior} alt="Interior Color Consultation" />
            </div>
        </div>
    </div>
  )
}

export default Consult