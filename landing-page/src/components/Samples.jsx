import React from 'react'
import PeelOne from '../assets/peel-one.png'
import PeelTwo from '../assets/peel-two.png'
import PeelThree from '../assets/peel-three.png'
import PeelFour from '../assets/peel-four.png'

function Samples() {
  return (
    <div name='samples' className='w-full h-screen'>
        <div className='max-w-[1000px] mx-auto pt-60 pb-4 px-4 sm:p-4 flex flex-col sm:flex-row justify-center w-full h-full'>
            <div className='max-w-[100%] sm:max-w-[50%]'>
                <div className='flex flex-row flex-wrap gap-1 justify-center sm:justify-normal'>
                    <img className='max-w-[45%] border-2 border-[#E5C1C1]' src={PeelOne} alt="Peel and Stick paint sample" />
                    <img className='max-w-[45%] border-2 border-[#E5C1C1]' src={PeelTwo} alt="Peel and Stick paint sample" />
                    <img className='max-w-[45%] border-2 border-[#E5C1C1]' src={PeelThree} alt="Peel and Stick paint sample" />
                    <img className='max-w-[45%] border-2 border-[#E5C1C1]' src={PeelFour} alt="Peel and Stick paint sample" />
                </div>
            </div>
            <div className='max-w-[100%] sm:max-w-[50%] text-center sm:text-right flex flex-col items-center sm:items-end'>
                <p className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1] pt-4 sm:pt-0'>Color Samples</p>
                <p className='py-4'>Our 12" x 12" peel and stick paint samples are painted with 2 coats of Sherwin-Williams or Benjamin Moore paint in a satin finish.</p>
                <p className='py-4'>See the true paint color on your walls while saving time, money and effort.</p>
                {/* <p className='py-4'>Compare colors instantly to make the best choice for your space.</p> */}
                <a className='text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white' href='https://www.rughdesign.com/product-category/paint-samples/?orderby=popularity'>Find your color!</a>
            </div>
        </div>
    </div>
  )
}

export default Samples