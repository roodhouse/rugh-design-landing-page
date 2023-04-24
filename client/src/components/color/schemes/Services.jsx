import React from 'react';
import Exterior from './Exterior';
import Interior from './Interior';
import NewBuild from './NewBuild';

function Services() {
  return (
    <>
      <div name="services" className="w-full h-full">
        <div className="max-w-[1300px] mx-auto px-4 pt-0 flex flex-col sm:flex-row justify-center w-full h-full">
          <div className="max-w-[100%] text-center sm:text-right flex flex-col items-center sm:items-end">
            <h3 className="text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1] pt-10">
              Hire me
            </h3>
            <p className='pt-4'>Color Consultations and eDesigns.</p>
            {/* services container */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-y-20 items-center sm:justify-evenly pb-20 pt-10">
              <Interior />
              <Exterior />
              <NewBuild />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services