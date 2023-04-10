import React from 'react'
import Wheel from '../assets/color-wheel-new.png'
import Reviews from '../assets/color-review-new.png'

function Review() {
  return (
    <div className='w-full h-fit sm:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col sm:flex-row justify-normal sm:justify-center w-full h-full gap-20'>
            <div name='scheme' className='max-w-[100%] sm:max-w-[50%] h-fit flex flex-col items-center sm:rounded-lg sm:bg-white sm:shadow-lg pt-60 sm:pt-0'>
                    <img className="rounded-t-lg w-[75%]" src={Wheel} alt="Color Schemes" />
                <div className="p-6 flex flex-col items-center">
                    <p className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>Color Wheel</p>
                    <p className='py-4'>Color schemes for over 1700 Sherwin-Williams colors.</p>
                    <a className='text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white' href='https://www.rughdesign.com/color-wheel/'>Explore</a>
                </div>
            </div>
            <div name='review' className='max-w-[100%] sm:max-w-[50%] h-fit flex flex-col items-center sm:rounded-lg sm:bg-white sm:shadow-lg pt-60 sm:pt-0'>
                    <img className="rounded-t-lg w-[75%]" src={Reviews} alt="Color Reviews" />
                <div className="p-6 flex flex-col items-center">
                    <p className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>Color Reviews</p>
                    <p className='py-4'>Read my color reviews and transform your space.</p>
                    <a className='text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white' href='https://www.rughdesign.com/review/'>Read more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review