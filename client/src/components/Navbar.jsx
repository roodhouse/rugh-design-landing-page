import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/RD.svg';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link as NewLink } from "react-router-dom";
import { AiOutlineDown } from 'react-icons/ai'



function Navbar() {
  // hamburger state
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
      <div>
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
            <NewLink to="https://rugh.design">Home</NewLink>
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
              <NewLink to="https://www.rughdesign.com/product-category/color-consultation/">
                Color Consultation
              </NewLink>
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
              <NewLink to="https://www.rughdesign.com/product-category/paint-samples/">
                Color Samples
              </NewLink>
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
              <NewLink to="/color-wheel">Color Wheel</NewLink>
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
              <NewLink to="/review">
                Color Reviews
              </NewLink>
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
            <NewLink to="https://www.rughdesign.com/product/new-build-edesign/">
              eDesign
            </NewLink>
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
            <NewLink to="https://rugh.design/portfolio">Portfolio</NewLink>
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
          <NewLink to="https://rugh.design">Home</NewLink>
        </li>
        <li className="py-6 text-4xl">
          <NewLink to="https://www.rughdesign.com/product-category/color-consultation/">
            Color Consultation
          </NewLink>
        </li>
        <li className="py-6 text-4xl">
          <NewLink to="https://www.rughdesign.com/product-category/paint-samples/">
            Color Samples
          </NewLink>
        </li>
        <li className="py-6 text-4xl">
          <NewLink to="/color-wheel">Color Wheel</NewLink>
        </li>
        <li className="py-6 text-4xl">
          <NewLink to="/review">
            Color Review
          </NewLink>
        </li>
        <li className="py-6 text-4xl">
          <NewLink to="https://www.rughdesign.com/product/new-build-edesign/">
            eDesign
          </NewLink>
        </li>
        <li className="py-6 text-4xl">
          <NewLink to="https://rugh.design/portfolio">Portfolio</NewLink>
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
          <NewLink to="/">Home</NewLink>
        </li>
        <li className="py-1.5 text-2xl">
          <NewLink to="https://www.rughdesign.com/product-category/color-consultation/">
            Color Consultation
          </NewLink>
        </li>
        <li className="py-1.5 text-2xl">
          <NewLink to="https://www.rughdesign.com/product-category/paint-samples/">
            Color Samples
          </NewLink>
        </li>
        <li className="py-1.5 text-2xl">
          <NewLink to="/color-wheel">Color Wheel</NewLink>
        </li>
        <li className="py-1.5 text-2xl">
          <NewLink to="/review">
            Color Review
          </NewLink>
        </li>
        <li className="py-1.5 text-2xl">
          <NewLink to="https://www.rughdesign.com/product/new-build-edesign/">
            eDesign
          </NewLink>
        </li>
        <li className="py-1.5 text-2xl">
          <NewLink to="https://rugh.design/portfolio">Portfolio</NewLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar