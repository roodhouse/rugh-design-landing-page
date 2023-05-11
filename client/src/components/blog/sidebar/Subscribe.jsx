import React, { useEffect, useState } from 'react'

// todo:
// Connect button to database
// Sets form but doesnt clear input...
function Subscribe() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value}
        })
    }
    
    function HandleClick(e) {
        e.preventDefault()
                const submit = document.getElementById('submit');
                submit.addEventListener('click', (e) => {
                    console.log('click')
                    const newSub = { ...form };
                    console.log(newSub);
                })
                setForm({ firstName: '', lastName: '', email: ''})
    }



  return (
    <div id='subscribeDiv' className='w-full p-2 border border-solid border-[#676766] rounded-md xl:w-[75%]'>
        <div id='subscribeHeadingDiv' className='text-center'>
            <h3 className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>Subscribe</h3>
        </div>
        <div id='subscribeTextDiv' className='text-center py-4'>
            <p>subscribe to my newsletter</p>
        </div>
        <form onSubmit={HandleClick}>

        <div id="subscribeFormDiv" className='flex flex-col items-center px-5'>
            <div id="firstName" className='w-full'>
                <input 
                    type="text" 
                    name='firstName' 
                    placeholder='First Name' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2'
                    onChange={(e) => updateForm({ firstName: e.target.value})}
                    />
            </div>
            <div id="lastName" className='w-full'>
                <input 
                    type="text" 
                    name='lastName' 
                    placeholder='Last Name' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2'
                    onChange={(e) => updateForm({ lastName: e.target.value})}
                    />
            </div>
            <div id="email" className='w-full'>
                <input 
                    type="email" 
                    name="email" 
                    placeholder='email' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2'
                    onChange={(e) => updateForm({ email: e.target.value})}
                    />
            </div>
            <div id="subSubmit" className='w-full'>
                <input id='submit' type="submit" name="submit"  className='w-full
                                                                        cursor-pointer
                                                                        inline-block
                                                                        rounded 
                                                                        bg-neutral-50 
                                                                        px-6 pb-2 pt-2.5 
                                                                        text-[100%] 
                                                                        font-medium lowercase leading-normal text-[#676766] 
                                                                        shadow-[0_4px_9px_-4px_#cbcbcb] 
                                                                        transition duration-150 ease-in-out 
                                                                        hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)]'
                                                                        
                                                               />
            </div>
        </div>
        </form>
    </div>
  )
}

export default Subscribe