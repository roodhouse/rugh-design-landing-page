import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, handleSubmit, setValue, formState: {errors} } = useForm({defaultValues: {
        firstName: '',
        lastName: '',
        email: ''
    }});

    const onError = () => {
        console.log('wrong')
    }
    
  return (
    <div id='loginDiv' className='w-full p-2 pt-44 border border-solid border-[#676766] rounded-md xl:w-[75%]'>
        <div id='loginHeadingDiv' className='text-center'>
            <h3 className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>Login</h3>
        </div>
        <div id='subscribeTextDiv' className='text-center py-4'>
            <p>greatness awaits</p>
        </div>
        <form>
        <div id="subscribeFormDiv" className='flex flex-col items-center px-5'>
            <div id="username" className='w-full flex flex-col'>
                <input 
                    type="text" 
                    {...register('username', {required: 'A user name is required'})}
                    placeholder='user name' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2 order-2'
                    />
                <p>{errors.username?.message}</p>
            </div>
            <div id="password" className='w-full flex flex-col'>
                <input 
                    type="password" 
                    {...register('password', {required: 'A password is required', minLength: {value: 2, message: 'Min length is 2'}})}
                    placeholder='password' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2 order-2'
                    />
                <p>{errors.password?.message}</p>
            </div>
            <div id="logSubmit" className='w-full'>
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
        <div className='p-4 text-sm text-center'><p>If you are not already registered, you may do so <Link className='text-[#e5c1c1] underline' to={'/register'}>here</Link>.</p></div>
    </div>
  )
}

export default Login