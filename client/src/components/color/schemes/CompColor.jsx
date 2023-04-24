import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../../../assets/colors';

function CompColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
      {/* comp color container */}
      <div className="flex flex-row flex-wrap gap-3 sm:gap-0 sm:gap-y-3 justify-evenly">
        <Link to={`../color-wheel/${color.compOne.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.compOne.hex }}
          >
            <span
              className={
                color.compOne.light
                  ? "text-black text-center px-px"
                  : "text-white text-center px-px"
              }
            >
              {color.compOne.name} {color.compOne.code}
            </span>
          </div>
        </Link>
        <Link to={`../color-wheel/${color.compTwo.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.compTwo.hex }}
          >
            <span
              className={
                color.compTwo.light
                  ? "text-black text-center px-px"
                  : "text-white text-center px-px"
              }
            >
              {color.compTwo.name} {color.compTwo.code}
            </span>
          </div>
        </Link>
        <Link to={`../color-wheel/${color.compThree.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.compThree.hex }}
          >
            <span
              className={
                color.compThree.light
                  ? "text-black text-center px-px"
                  : "text-white text-center px-px"
              }
            >
              {color.compThree.name} {color.compThree.code}
            </span>
          </div>
        </Link>
        <Link to={`../color-wheel/${color.compFour.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.compFour.hex }}
          >
            <span
              className={
                color.compFour.light
                  ? "text-black text-center px-px"
                  : "text-white text-center px-px"
              }
            >
              {color.compFour.name} {color.compFour.code}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CompColor