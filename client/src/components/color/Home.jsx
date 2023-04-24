import * as React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Laura from '../../assets/laura-again.jpg';
import {getColors} from '../../assets/colors';
import { Helmet } from 'react-helmet-async';

function Home() {
    
    const colors = getColors();

  return (
    <>
    <Helmet>
      <title>Color Wheel</title>
      <meta description='Handpicked color schemes for 1700+ Sherwin-Willaims colors.'/>
    </Helmet>
    <div name="home" className="w-full h-full pt-44 sm:pt-60">
      {/* container */}
      <div className="flex flex-col h-full">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="text-4xl sm:text-7xl font-bold text-[#E5C1C1] border-b-4 border-[#676766] whitespace-nowrap">
                Color Wheel
              </h1>
              <h2 className="text-4xl sm:text-7xl font-bold text-[#676766]">
                1700+ Color Schemes
              </h2>
              <p className="text-[#676766] py-4 max-w-[700px]">
                Explore my handpicked color schemes from over 1700 Sherwin-Williams colors.
              </p>
              <div>
                <ScrollLink to="wheel" smooth={true} duration={500}>
                  <button className="text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white">
                    Explore
                    <span className="group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-3" />
                    </span>
                  </button>
                </ScrollLink>
              </div>
            </div>
            <div className="flex flex-row justify-center sm:justify-normal sm:ml-[5%] h-[100%] w-[100%] md:h-[75%] order-first sm:order-last pb-4 sm:pb-0">
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



