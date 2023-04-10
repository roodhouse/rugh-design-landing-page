import React, {useState} from 'react' 
import {Gallery} from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import '../lightboxstyles.css'
import { images, CustomImage} from '../images'
// import 'yet-another-react-lightbox/dist/styles.css'
import PortOne from '../assets/port-one.png'
import PortTwo from '../assets/port-two.png'
import PortThree from '../assets/port-three.png'
import PortFour from '../assets/port-four.png'
import PortFive from '../assets/port-five.png'
import PortSix from '../assets/port-six.png'

const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

function Work() {

    const [index, setIndex] = useState(-1);
    const handleClick = (index: number, item: CustomImage) => setIndex(index);

    // <div>
    //   <Gallery
    //     images={images}
    //     onClick={handleClick}
    //     enableImageSelection={false}
    //   />
    //   <Lightbox
    //     slides={slides}
    //     open={index >= 0}
    //     index={index}
    //     close={() => setIndex(-1)}
    //   />
    // </div>
    
  return (
    <div name='work' className='w-full h-full'>
        <div className='max-w-[1000px] mx-auto p-4 pt-60 sm:pt-0 flex flex-col sm:flex-row justify-center w-full h-full'>
            <div className='max-w-[100%] text-center sm:text-right flex flex-col items-center sm:items-end'>
                <p className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1] pt-4 sm:pt-0'>Portfolio</p>
                <p className='py-4'>Check out some of my work.</p>
                <div className='flex flex-col sm:flex-row flex-wrap gap-1 items-center sm:justify-center pb-4'>
                    <img className='max-w-[100%] sm:max-w-[25%] h-fit border-2 border-[#E5C1C1]' src={PortOne} alt="Agreeable-Gray SW 7029 with Cityscape SW 7067 and Extra White SW 7006" />
                    <img className='max-w-[100%] sm:max-w-[25%] h-fit border-2 border-[#E5C1C1]' src={PortTwo} alt="Sherwin-Williams Balanced Beige SW 7037 in open space" />
                    <img className='max-w-[100%] sm:max-w-[25%] h-fit border-2 border-[#E5C1C1]' src={PortThree} alt="Open layout kitchen with Amazing Gray SW 7044 cabinets and White Duck SW 7010 walls" />
                    <img className='max-w-[100%] sm:max-w-[25%] h-fit border-2 border-[#E5C1C1]' src={PortFour} alt="Balanced Beige Kitchen walls with Creamy Cabinets" />
                    <img className='max-w-[100%] sm:max-w-[25%] h-fit border-2 border-[#E5C1C1]' src={PortFive} alt="Shoji White on exterior" />
                    <img className='max-w-[100%] sm:max-w-[25%] h-fit border-2 border-[#E5C1C1]' src={PortSix} alt="Front porch" />
                </div>
                <div className='flex flex-row justify-center w-full'>
                <a className='text-[#676766] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white' href='https://www.rughdesign.com/portfolio/'>View More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work