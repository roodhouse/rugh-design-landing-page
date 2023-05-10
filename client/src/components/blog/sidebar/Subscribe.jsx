import React from 'react'

function Subscribe() {
  return (
    <div id='subscribeDiv' className='w-full p-2 border border-solid border-[#676766] rounded-md'>
        <div id='subscribeHeadingDiv' className='text-center'>
            <h3 className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>Subscribe</h3>
        </div>
        <div id='subscribeTextDiv' className='text-center py-4'>
            <p>subscribe to my newsletter</p>
        </div>
        <div id="subscribeFormDiv" className='flex flex-col items-center'>
            <div id="firstName">
                <input type="text" name='firstName' placeholder='First Name' className='border border-[#676766] border-solid p-2 mb-2'/>
            </div>
            <div id="lastName">
                <input type="text" name='lastName' placeholder='Last Name' className='border border-[#676766] border-solid p-2 mb-2'/>
            </div>
            <div id="email">
                <input type="email" name="email" placeholder='email' className='border border-[#676766] border-solid p-2 mb-2'/>
            </div>
            <div id="subSubmit">
                <input type="submit" name="submit" className='inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-[100%] font-medium lowercase leading-normal text-[#676766] shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]' />
            </div>
        </div>
    </div>
  )
}

export default Subscribe