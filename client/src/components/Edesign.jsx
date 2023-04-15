import React from 'react'
import EdesignIcon from '../assets/edesign.png'
import { Element } from 'react-scroll'

function Edesign() {
  return (
    <div id='edesign' name='edesign' className='w-full h-screen'>
      <Element name='myScrollToElement'></Element>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col sm:flex-row sm:justify-center items-center w-full h-full pt-60 sm:pt-0'>
            <div className='max-w-[100] sm:max-w-[50%] text-center sm:text-left flex flex-col items-center sm:items-start'>
                <p className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>eDesign</p>
                <p className='py-4'>Are you struggling with making selections and color choices for your home that you are building or renovating? Your choice of selections are vital to a cohesive design and color flow within your home. My eDesign package for your new build or renovation takes the guesswork out of making the right selections.</p>
                <a className='text-[#676766] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white' href='https://www.rughdesign.com/product/new-build-edesign/'>Hire me!</a>
            </div>
            <div className='max-w-[50%] order-first sm:order-last'>
                <img className='ml-[0%] sm:ml-[10%] max-w-[100%] sm:max-w-[90%]' src={EdesignIcon} alt="eDesign" />
            </div>
        </div>
    </div>
  )
}

export default Edesign