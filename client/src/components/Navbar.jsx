import React, {useState} from 'react'
import Logo from '../assets/RD.svg'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link as NewLink } from "react-router-dom"
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[150px] flex justify-between items-center px-4 bg-white z-10'>
        {/* logo */}
        <div onClick={()=> scroll.scrollToTop()}>
            <img className='pt-14' src={Logo} alt="Rugh Design" />
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li><a href='#'><Link to="home" smooth={true} duration={1000}><NewLink to='/'>Home</NewLink></Link></a></li>
            <li className="relative" data-te-dropdown-ref>
                <a
                    className="flex items-center whitespace-nowrap motion-reduce:transition-none"
                    href="#"
                    type="button"
                    id="dropdownMenuButton2"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Color
                        <span className="ml-2 w-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd" />
                            </svg>
                        </span>
                </a>
                <ul
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-clip-padding text-left text-base shadow-lg bg-[#676766] [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton2"
                    data-te-dropdown-menu-ref>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="/"
                            data-te-dropdown-item-ref>
                            <Link to="consult" smooth={true} duration={1000} offset={-250}><NewLink to='/'>Color Consultation</NewLink></Link>
                        </a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref>
                            <Link to="samples" smooth={true} duration={1000} offset={-250}><NewLink to='/'>Color Samples</NewLink></Link>
                        </a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref>
                            <Link to="scheme" smooth={true} duration={1000} offset={-250}><NewLink to='/'>Color Schemes</NewLink></Link>
                        </a>
                    </li>
                    <li>
                        <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref>
                            <Link to="review" smooth={true} duration={1000} offset={-250}><NewLink to='/'>Color Review</NewLink></Link>
                        </a>
                    </li>
                </ul>
            </li>
            <li><Link to="edesign" smooth={true} duration={1000}><NewLink to='/'>eDesign</NewLink></Link></li>
            <li><Link to="work" smooth={true} duration={1000} offset={-250}><NewLink to='/'>Portfolio</NewLink></Link></li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className={!nav ? 'md:hidden z-10 text-[#676766]' : 'md:hidden z-10 text-white'}>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#676766] text-white'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}><NewLink to='/'>Home</NewLink></Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="consult" smooth={true} duration={500}><NewLink to='/'>Color Consultation</NewLink></Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="samples" smooth={true} duration={500} ><NewLink to='/'>Color Samples</NewLink></Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="scheme" smooth={true} duration={500} ><NewLink to='/'>Color Schemes</NewLink></Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="review" smooth={true} duration={500} ><NewLink to='/'>Color Review</NewLink></Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="edesign" smooth={true} duration={500}><NewLink to='/'>eDesign</NewLink></Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500} ><NewLink to='/'>Portfolio</NewLink></Link></li>
        </ul>
    </div>
  )
}

export default Navbar