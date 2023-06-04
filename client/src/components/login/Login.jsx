import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";
import 'animate.css';

// todo: refactor token code to work in the correct places
//       logout functionality
//       two way authinticate 
//       flash of screen when unauthorized

// Create random string for secret
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$!+-%^*&';

function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result
}


const jwt = require('jsonwebtoken');
const secret = generateString(99);
const expiration = '2h';

var bcrypt = require('bcryptjs');

function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: {errors} } = useForm({defaultValues: {
        username: '',
        password: '',
    }});

    const onError = () => {

        console.log('wrong')
        navigate("/");
    }

    const handleEmpty = () => {
        if(errors.password && !errors.username) {
            document.getElementById('password').classList.add('animate__animated', 'animate__headShake');
            document.getElementById('emptyPassword').innerHTML = errors.password.message;
            
        } else if (errors.username && !errors.password) {
            document.getElementById('username').classList.add('animate__animated', 'animate__headShake');
            document.getElementById('emptyUsername').innerHTML = errors.username.message;
        }

        else if(errors.username && errors.password) {
            document.getElementById('subscribeFormDiv').classList.add('animate__animated', 'animate__headShake');
            document.getElementById('emptyUsername').innerHTML = errors.username.message;
            document.getElementById('emptyPassword').innerHTML = errors.password.message;
        }

        else {
            return;
        }
    }
    
  return (
    <div id='loginDiv' className='w-full p-2 pt-44 border border-solid border-[#676766] rounded-md xl:w-[75%]'>
        <div id='loginHeadingDiv' className='text-center'>
            <h3 className='text-4xl text-[#676766] font-bold inline border-b-4 border-[#E5C1C1]'>Login</h3>
        </div>
        <div id='subscribeTextDiv' className='text-center py-4'>
            <p>greatness awaits</p>
        </div>
        <form onSubmit={handleSubmit( async (data) => {
            const response = await fetch(`http://localhost:5002/reg/${data.username}`);
            const theUser = await response.json();
        
            let password =  data.password;
            let hash = theUser.password;

            // compare the user entered password to the hashed password in database
            if (bcrypt.compareSync(password, hash)) {
                console.log('the same and logged in baby')
            
                const user = {
                    username: data.username,
                    role: theUser.role || 'standard'
                }

                function signToken({ username, role }) {
                    const payload = { username, role };
                    const test = jwt.sign({ data: payload }, secret, { expiresIn: expiration });
            
                    localStorage.setItem('token', test);
                    return test;
                  }
                
                  signToken(user)
                  if(theUser.role === 'admin'){
                    navigate('/dashboard') 
                  } else {
                    navigate('/')
                  }     

            } else {
                onError();
            }

           

        })}>
        <div id="subscribeFormDiv" className='flex flex-col items-center px-5'>
            <div id="username" className='w-full flex flex-col'>
                <input 
                    type="text" 
                    {...register('username', {required: 'A user name is required'})}
                    placeholder='user name' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2 order-2'
                    />
                <p id="emptyUsername">{handleEmpty()}</p>
            </div>
            <div id="password" className='w-full flex flex-col'>
                <input 
                    type="password" 
                    {...register('password', {required: 'A password is required', minLength: {value: 2, message: 'Min length is 2'}})}
                    placeholder='password' 
                    className='w-full border border-[#676766] border-solid p-2 mb-2 order-2'
                    />
                <p id="emptyPassword">{handleEmpty()}</p>
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