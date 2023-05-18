import React from 'react';
import Exterior from './Exterior';
import Interior from './Interior';
import NewBuild from './NewBuild';

function SidebarServices() {
  return (
    <>
      <div name="services" className="w-full h-full xl:w-[50%]">
        <div id='sidebarServicesWrapper' className="max-w-[1300px] mx-auto px-4 pt-0 flex flex-col sm:flex-row justify-center w-full h-full">
          <div id='sidebarServicesContainer' className="max-w-[100%] text-center flex flex-col items-center">
           <div id='sidebarServicesHeading' className='pt-10'>
            <h3 className="text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]">
              Hire me
            </h3>
           </div>
           <div id="sidebarServicesText">
            <p className='pt-4'>color consultations and eDesigns.</p>
           </div>
            {/* services container */}
            <div id='servicesSidebar' className="flex flex-col items-center pb-20 pt-10">
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

export default SidebarServices