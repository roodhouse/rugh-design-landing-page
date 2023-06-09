import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Laura from '../../../assets/laura-again.jpg';
import { Helmet } from 'react-helmet-async';

function Home() {
    
  return (
    <>
    <Helmet>
      <title>Color Review</title>
      <meta description='Color review and blog from Laura Rugh with Rugh Design.'/>
    </Helmet>
    <div name="home" className="w-full h-full pt-44 lg:pt-60">
      {/* container */}
      <div className="flex flex-col h-full">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#E5C1C1] border-b-4 border-[#676766] whitespace-nowrap">
                Color Review
              </h1>
              <h2 className="text-4xl lg:text-7xl font-bold text-[#676766]">
                Discover your color
              </h2>
              <p className="text-[#676766] py-4 max-w-[700px]">
                Read my color reviews and transform your space
              </p>
              <div>
                <ScrollLink to="posts" smooth={true} duration={500} offset={400}>
                  <button className="text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white">
                    Explore
                    <span className="group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-3" />
                    </span>
                  </button>
                </ScrollLink>
              </div>
            </div>
            <div className="flex flex-row justify-center lg:justify-normal lg:ml-[5%] h-[100%] w-[100%] lg:h-[75%] order-first lg:order-last pb-4 lg:pb-0">
              <img
                className="rounded-full md:h-[100%]"
                src={Laura}
                alt="Laura Rugh"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home



