import * as React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, colors } from '../../../assets/colors';

function ColorNav() {

    const { id } = useParams();
    const color = getColor(id);
    
    // Handle hover on color nav buttons
    const [prevIsHovering, setPrevIsHovering] = useState(false);
    const [nextIsHovering, setNextIsHovering] = useState(false);

    const handlePrevMouseOver = () => {
        setPrevIsHovering(true);
    }

    const handlePrevMouseOut = () => {
        setPrevIsHovering(false);
    }

    const handleNextMouseOver = () => {
        setNextIsHovering(true);
    }

    const handleNextMouseOut = () => {
        setNextIsHovering(false);
    }

  // variables for thePreviousColor and theNextColor functions
  let myIndex = colors.findIndex((colorid) => colorid === color);
  let nextIndex = myIndex + 1;
  let prevIndex = myIndex - 1;

  // function to go to the previous color on the color wheel
  function thePreviousColor() {
    if (myIndex === 0) {
      let prevColor = myIndex;
      let notColor = colors[myIndex].name
      return [prevColor, notColor]
    } else {
      let prevColor = colors[prevIndex].id;
      let realColor = colors[prevIndex].name;
      return [prevColor, realColor]
    }
  }

  // function to go to the next color on the color wheel
  function theNextColor() {
    if (myIndex === 1730) {
      let nextColor = myIndex;
      let notColor = colors[myIndex].name
      return [nextColor, notColor]
    } else {
      let nextColor = colors[nextIndex].id;
      let realColor = colors[nextIndex].name;
      return [nextColor, realColor];
    }
  }

  return (
    <div className="max-w-[1000px] w-full flex flex-col md:flex-row justify-around mx-auto pt-10">
      <div className="w-full md:w-[200px] text-center whitespace-nowrap">
        <Link
          onMouseOver={handlePrevMouseOver}
          onMouseOut={handlePrevMouseOut}
          to={`../color-wheel/${thePreviousColor()[0]}`}
        >
          {prevIsHovering && (
            <div
              className={
                thePreviousColor()[0] === 0
                  ? "hidden"
                  : "hover:text-ellipsis hover:whitespace-nowrap hover:overflow-hidden block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"
              }
            >
              {thePreviousColor()[1]}
            </div>
          )}
          {!prevIsHovering && (
            <div
              className={
                thePreviousColor()[0] === 0
                  ? "hidden"
                  : "block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"
              }
            >
              Previous Color
            </div>
          )}
        </Link>
      </div>
      <div className="w-full md:w-[200px] text-center">
        <Link to={`../color-wheel`}>
          <div className="block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white">
            Back to color wheel
          </div>
        </Link>
      </div>
      <div className="w-full md:w-[200px] text-center whitespace-nowrap">
        <Link
          onMouseOver={handleNextMouseOver}
          onMouseOut={handleNextMouseOut}
          to={`../color-wheel/${theNextColor()[0]}`}
        >
          {nextIsHovering && (
            <div
              className={
                theNextColor()[0] === 1730
                  ? "hidden"
                  : "hover:text-ellipsis hover:whitespace-nowrap hover:overflow-hidden block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"
              }
            >
              {theNextColor()[1]}
            </div>
          )}
          {!nextIsHovering && (
            <div
              className={
                theNextColor()[0] === 1730
                  ? "hidden"
                  : "block bg-white text-[#676766] border-2 px-6 py-3 hover:bg-[#E5C1C1] hover:border-[#E5C1C1] hover:text-white"
              }
            >
              Next Color
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default ColorNav