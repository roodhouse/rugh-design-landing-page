import React, {useState} from 'react' 
import {Gallery} from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import '../lightboxstyles.css'
import { images, CustomImage} from '../images'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Laura from '../assets/laura-again.jpg'
// import 'yet-another-react-lightbox/dist/styles.css'
import { Routes, Route } from 'react-router-dom';

const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

function Portfolio() {

    const [index, setIndex] = useState(-1);
    const handleClick = (index: number, item: CustomImage) => setIndex(index);

  return (
    <div name='home' className='w-full h-[calc(100vh+150px)]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='flex flex-col sm:flex-row justify-center'>
                <div className='flex flex-col items-start'>
                    <h1 className='text-4xl sm:text-7xl font-bold text-[#E5C1C1] border-b-4 border-[#676766]'>Portfolio</h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#676766]'>Explore my work.</h2>
                    <p className='text-[#676766] py-4 max-w-[700px]'>Check out some of my work below. Be sure to reach out if you are in need of a <a className='underline decoration-[#E5C1C1] decoration-8 hover:decoration-[#676766]' href='https://www.rughdesign.com/product-category/color-consultation/'>color consultation</a> or <a className='underline decoration-[#E5C1C1] decoration-8 hover:decoration-[#676766]' href='https://www.rughdesign.com/product-category/edesign/'>eDesign</a>.</p>
                    <div>
                        <Link to="gallery" smooth={true} duration={500}>
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

    <div name='gallery'>
        <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
    </div>
  )
}

export default Portfolio