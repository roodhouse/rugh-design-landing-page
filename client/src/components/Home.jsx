import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Laura from '../assets/laura-round.png'

function Home() {
  return (
    <div name='home' className='w-full h-[calc(100vh+150px)]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='flex flex-col sm:flex-row justify-center'>
                <div>
                    <p className='text-[#676766]'>Hey Y'all! My name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#E5C1C1]'>Laura Rugh</h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#676766]'>I'm a Color Consultant.</h2>
                    <p className='text-[#676766] py-4 max-w-[700px]'>I have a passion for design, color and helping people find the perfect paint for their spaces. Enjoy and let me know how I can help!</p>
                    <div>
                        <Link to="consult" smooth={true} duration={500} offset={-250}>
                        <button className='text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white'>Learn More
                            <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>
                <div className='ml-[5%] w-[100%] h-[100%] md:h-[75%] order-first sm:order-last pb-4 sm:pb-0'>
                    <img className='rounded-full md:h-[100%]' src={Laura} alt="Laura Rugh" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home