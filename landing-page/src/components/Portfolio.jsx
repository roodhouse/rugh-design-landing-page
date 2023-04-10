import React, {useState} from 'react'
import {Gallery} from 'react-grid-gallery'
import Lightbox from 'yet-another-react-lightbox'
import '../lightboxstyles.css'
import { images, CustomImage} from '../images'
// import 'yet-another-react-lightbox/dist/styles.css'

const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

function Portfolio() {

    const [index, setIndex] = useState(-1);
    const handleClick = (index: number, item: CustomImage) => setIndex(index);
    
  return (
    <div>
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
  )
}

export default Portfolio