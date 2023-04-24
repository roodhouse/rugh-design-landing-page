import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, colors } from '../../../assets/colors';
import { Link as ScrollLink } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';
import ColorTabs from './ColorTabs';
import ColorNav from './ColorNav';
import Services from './Services';
import { Helmet } from 'react-helmet-async';

function Color() {
  const { id } = useParams();
  const color = getColor(id);

  return (
    <>
    <Helmet>
      <title>{color.name}</title>
      <meta name='description' content={`Color schemes and coordinating colors for Sherwin-Williams ${color.name} ${color.code}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${color.name} coordinating colors and color schemes` } />
      <meta property="og:description" content={`Color schemes and coordinating colors for Sherwin-Williams ${color.name} ${color.code}`} />
      <meta property="og:url" content={`https://rugh.design/color-wheel/${color.id}`} />
      <meta property="og:site_name" content="Rugh Design" />
      <meta property="article:publisher" content="https://www.facebook.com/lauraerugh" />
      <meta property="og:updated_time" content="2023-04-22T18:24:15+00:00" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${color.name} coordinating colors and color schemes`} />
      <meta name="twitter:description" content={`Color schemes and coordinating colors for Sherwin-Williams ${color.name} ${color.code}`} />
      <meta name="twitter:label1" content="Time to read" />
      <meta name="twitter:data1" content="Less than a minute" />
    </Helmet>
    <div className="w-full h-full">
      {/* container */}
      <div className="flex flex-col mb-40">
        <div className="max-w-[1000px] sm:pt-40 mt-60 mb-40 sm:mt-40 mx-auto px-8 flex flex-col justify-center w-full ">
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="flex flex-col items-center sm:items-start min-w-[53.6%]">
              <h1 className="text-5xl sm:text-7xl  text-center sm:text-left font-bold text-[#E5C1C1] underline decoration-[#676766] decoration-4">
                {color.name}
              </h1>
              <h2 className="text-4xl sm:text-7xl font-bold text-[#676766]">
                {color.code}
              </h2>
              <p className="text-[#676766] text-center py-4 max-w-[700px]">
                Color family: {color.family} | LRV: {color.lrv} |{" "}
                {color.peel ? (
                  <a
                    className="underline decoration-[#E5C1C1] decoration-8 hover:decoration-[#676766]"
                    href={color.peel}
                  >
                    Peel+Stick
                  </a>
                ) : (
                  ""
                )}
              </p>
              <div>
                <ScrollLink
                  to="scheme"
                  smooth={true}
                  duration={500}
                  offset={150}
                >
                  <button className="text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white">
                    Explore
                    <span className="group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-3" />
                    </span>
                  </button>
                </ScrollLink>
              </div>
            </div>
            <div className="flex flex-row justify-center sm:block sm:ml-[5%] h-[100%] w-[100%] md:h-[75%] order-first sm:order-last pb-4 sm:pb-0">
              <div
                className="rounded-full md:h-[100%] w-[50%] sm:w-full pt-[50%] sm:pt-[100%]"
                style={{ backgroundColor: color.hex }}
                alt="Laura Rugh"
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
      <div
        name="scheme"
        style={{ backgroundColor: color.hex }}
        className="w-full h-full mx-auto px-8 pb-60 pt-60"
      >
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full mt-48">
          <div className="py-10">
            <h2 className="text-5xl text-center sm:text-left">{color.name}</h2>
            <p className='text-center sm:text-left'>color schemes</p>
          </div>
          {/* scheme container */}
          <div>
            <ColorTabs />
          </div>
        {/* color navigation */}
        <ColorNav />
        </div>
      </div>
      {/* service section */}
      <Services />
    </div>
    </>
  );
}

export default Color