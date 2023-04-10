import React from 'react'
import Interior from '../assets/interior-color-consultation.png'

function Consult() {
  return (
    <div name='consult' className='w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col sm:flex-row justify-center w-full h-full'>
            <div className='max-w-[100%] sm:max-w-[50%] text-center sm:text-left flex flex-col items-center sm:items-start'>
                <p className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>Color Consultation</p>
                <p className='py-4'>Hire me to be your color consultant! By assessing the current undertones in your home, I can find the color or color palette that will make the biggest impact on your space.</p>
                <a className='text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white' href='https://www.rughdesign.com/product/interior-color-consultation/'>Hire me!</a>
            </div>
            <div className='max-w-[100%] sm:max-w-[50%] order-first sm:order-last pb-4 sm:pb-0'>
                <img className='mx-[0%] sm:mx-[25%] max-w-[100%] sm:max-w-[50%] md:max-w-[75%]' src={Interior} alt="Interior Color Consultation" />
            </div>
        </div>
    </div>
  )
}

export default Consult