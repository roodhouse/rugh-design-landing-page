import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Laura from '../assets/laura-round.png';
import Navbar from './NavbarLanding';
import { Helmet } from 'react-helmet-async';
import anime from 'animejs/lib/anime.es.js';
    
// anime({
//     targets:imgOfLaura,
//     keyframes: [
//         {translateY: -40},
//         {translateX: 250},
//         {translateY: 40},
//         {translateX: 0},
//         {translateY: 0}
//       ],
//       duration: 4000,
//       easing: 'easeOutElastic(1, .8)',
//       loop: true
// }) 
 
function Home() {
  return (
    <>
    <Helmet>
        <title>Rugh Design - Clarity in Color, Perfection in Paint.</title>
        <meta
         name="description"
         content="Rugh Design. Austin Texas. Interior designer. Interior design. Color consultations. Paint color consultation. eDesign consultations. Peel and Stick paint samples. Sherwin-Williams color review. Sherwin-Williams color schemes."/>
    </Helmet>
    <Navbar />
    <div name='home' className='w-full h-[calc(100vh+150px)]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='flex flex-col sm:flex-row justify-center'>
                <div>
                    <p className='text-[#676766]'>Hey Y'all! My name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#E5C1C1] lauraName'>
                        <span id="textWrapper" className='text-wrapper'>
                           <span className='letters'>Laura Rugh</span> 
                            </span>
                        
                        </h1>
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
                    <img id='imgOfLaura' className='rounded-full md:h-[100%]' src={Laura} alt="Laura Rugh" />
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Home