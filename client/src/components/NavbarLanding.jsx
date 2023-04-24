import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/RD.svg';
import {FaBars, FaTimes} from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { Link, animateScroll as scroll } from 'react-scroll'

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // color menu item state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleColor = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed w-full h-[150px] flex justify-between items-center px-4 bg-white z-10">
      {/* logo */}
      <div onClick={() => scroll.scrollToTop()}>
        <img src={Logo} alt="Rugh Design" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Button
            sx={{
              padding: 0,
              fontFamily: "Raleway",
              color: "#000000",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "normal",
              "&:hover": { backgroundColor: "rgba(229, 193, 193, 0.19)" },
            }}
          >
            <Link to="home" smooth={true} duration={1000}>
              Home
            </Link>
          </Button>
        </li>
        <li>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleColor}
            sx={{
              padding: 0,
              fontFamily: "Raleway",
              color: "#000000",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "normal",
              "&:hover": { backgroundColor: "rgba(229, 193, 193, 0.19)" },
            }}
          >
            Color
            <span className="ml-2">
              <AiOutlineDown />
            </span>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                fontFamily: "Raleway",
                color: "#000000",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "normal",
                "&:hover": { backgroundColor: "rgba(229, 193, 193, 0.19)" },
              }}
            >
              <Link to="consult" smooth={true} duration={1000} offset={-250}>
                Color Consultation
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                fontFamily: "Raleway",
                color: "#000000",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "normal",
                "&:hover": { backgroundColor: "rgba(229, 193, 193, 0.19)" },
              }}
            >
              <Link to="samples" smooth={true} duration={1000} offset={-250}>
                Color Samples
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                fontFamily: "Raleway",
                color: "#000000",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "normal",
                "&:hover": { backgroundColor: "rgba(229, 193, 193, 0.19)" },
              }}
            >
              <Link to="scheme" smooth={true} duration={1000} offset={-250}>
                Color Wheel
              </Link>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                fontFamily: "Raleway",
                color: "#000000",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "normal",
                "&:hover": { backgroundColor: "rgba(229, 193, 193, 0.19)" },
              }}
            >
              <Link to="review" smooth={true} duration={1000} offset={-250}>
                Color Review
              </Link>
            </MenuItem>
          </Menu>
        </li>
        <li>
          <Button
            sx={{
              padding: 0,
              fontFamily: "Raleway",
              color: "#000000",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "normal",
              "&:hover": { backgroundColor: "rgba(229, 193, 193, 0.19)" },
            }}
          >
            <Link to="edesign" smooth={true} duration={1000}>
              eDesign
            </Link>
          </Button>
        </li>
        <li>
          <Button
            sx={{
              padding: 0,
              fontFamily: "Raleway",
              color: "#000000",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "normal",
              "&:hover": { backgroundColor: "rgba(229, 193, 193, 0.19)" },
            }}
          >
            <Link to="work" smooth={true} duration={1000} offset={-250}>
              Portfolio
            </Link>
          </Button>
        </li>
      </ul>

      {/* hamburger */}
      <div
        onClick={handleClick}
        className={
          !nav ? "md:hidden z-10 text-[#676766]" : "md:hidden z-10 text-white"
        }
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "landscape:hidden absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#676766] text-white"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="consult" smooth={true} duration={500}>
            Color Consultation
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="samples" smooth={true} duration={500}>
            Color Samples
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="scheme" smooth={true} duration={500}>
            Color Schemes
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="review" smooth={true} duration={500}>
            Color Review
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="edesign" smooth={true} duration={500}>
            eDesign
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
      </ul>
      {/* landscape only menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "portrait:hidden absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#676766] text-white"
        }
      >
        <li className="py-1.5 text-2xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-1.5 text-2xl">
          <Link onClick={handleClick} to="consult" smooth={true} duration={500}>
            Color Consultation
          </Link>
        </li>
        <li className="py-1.5 text-2xl">
          <Link onClick={handleClick} to="samples" smooth={true} duration={500}>
            Color Samples
          </Link>
        </li>
        <li className="py-1.5 text-2xl">
          <Link onClick={handleClick} to="scheme" smooth={true} duration={500}>
            Color Schemes
          </Link>
        </li>
        <li className="py-1.5 text-2xl">
          <Link onClick={handleClick} to="review" smooth={true} duration={500}>
            Color Review
          </Link>
        </li>
        <li className="py-1.5 text-2xl">
          <Link onClick={handleClick} to="edesign" smooth={true} duration={500}>
            eDesign
          </Link>
        </li>
        <li className="py-1.5 text-2xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar