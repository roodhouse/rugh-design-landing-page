import React, { useState } from 'react'

function Subscribe() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(firstName, lastName, email)
        const newSub = {
            firstName: firstName,
            lastName: lastName,
            email: email 
        }
        await fetch('http://localhost:5001/record/sub', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSub)
        })
        .catch(error => {
            window.alert(error);
            return;
        })
        setFirstName('')
        setLastName('')
        setEmail('')
    }
    
  return (
    <div id='subscribeDiv' className='w-full p-2 border border-solid border-[#676766] rounded-md xl:w-[75%]'>
        <div id='subscribeHeadingDiv' className='text-center'>
            <h3 className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>Subscribe</h3>
        </div>
        <div id='subscribeTextDiv' className='text-center py-4'>
            <p>subscribe to my newsletter</p>
        </div>
        <form onSubmit={handleSubmit}>

        <div id="subscribeFormDiv" className='flex flex-col items-center px-5'>
            <div id="firstName" className='w-full'>
                <input 
                    type="text" 
                    name='firstName' 
                    placeholder='First Name' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    />
            </div>
            <div id="lastName" className='w-full'>
                <input 
                    type="text" 
                    name='lastName' 
                    placeholder='Last Name' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    />
            </div>
            <div id="email" className='w-full'>
                <input 
                    type="email" 
                    name="email" 
                    placeholder='email' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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