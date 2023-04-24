import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getColor, getColors } from '../../../assets/colors';

function TriadColor() {

    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

  return (
    <>
      {/* triad color container */}
      <div className="flex flex-row flex-wrap gap-3 sm:gap-0 sm:gap-y-3 justify-evenly">
        <Link to={`../color-wheel/${color.triadOne.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.triadOne.hex }}
          >
            <span
              className={
                color.triadOne.light
                  ? "text-black text-center px-px"
                  : "text-white text-center px-px"
              }
            >
              {color.triadOne.name} {color.triadOne.code}
            </span>
          </div>
        </Link>
        <Link to={`../color-wheel/${color.triadTwo.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.triadTwo.hex }}
          >
            <span
              className={
                color.triadTwo.light
                  ? "text-black text-center px-px"
                  : "text-white text-center px-px"
              }
            >
              {color.triadTwo.name} {color.triadTwo.code}
            </span>
          </div>
        </Link>
        <Link to={`../color-wheel/${color.triadThree.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.triadThree.hex }}
          >
            <span
              className={
                color.triadThree.light
                  ? "text-black text-center px-px"
                  : "text-white text-center px-px"
              }
            >
              {color.triadThree.name} {color.triadThree.code}
            </span>
          </div>
        </Link>
        <Link to={`../color-wheel/${color.triadFour.id}`}>
          <div
            className="w-44 h-44 border-2 border-black border-solid flex flex-row justify-center items-end"
            style={{ backgroundColor: color.triadFour.hex }}
          >
            <span
              className={
                color.triadFour.light
                  ? "text-black text-center px-px"
                  : "text-white text-center px-px"
              }
            >
              {color.triadFour.name} {color.triadFour.code}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default TriadColor