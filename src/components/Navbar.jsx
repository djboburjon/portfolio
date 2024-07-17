import React, { useState } from "react";
import Logo from "../assets/logo_bd-white.png";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Resume from "../assets/resume/Boburbek.pdf";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [activeLink, setActiveLink] = useState("home");
  const handleSubmit = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50 shadow-md">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex md:gap-4">
          <li
            className={
              activeLink === "home"
                ? "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-1"
                : "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-0 hover:before:transition-all hover:before:scale-x-[1]"
            }
          >
            <Link
              to="home"
              onClick={() => {
                handleSubmit("home");
              }}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li
            className={
              activeLink === "about"
                ? "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-1"
                : "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-0 hover:before:transition-all hover:before:scale-x-[1]"
            }
          >
            <Link
              to="about"
              onClick={() => {
                handleSubmit("about");
              }}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className={
              activeLink === "skills"
                ? "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-1"
                : "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-0 hover:before:transition-all hover:before:scale-x-[1]"
            }>
            <Link to="skills" onClick={() => {
                handleSubmit("skills");
              }} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className={
              activeLink === "work"
                ? "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-1"
                : "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-0 hover:before:transition-all hover:before:scale-x-[1]"
            }>
            <Link to="work" onClick={() => {
                handleSubmit("work");
              }} smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className={
              activeLink === "contact"
                ? "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-1"
                : "relative before:content-[ ] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-pink-600 before:transition-all before:duration-300 before:origin-left before:scale-x-0 hover:before:transition-all hover:before:scale-x-[1]"
            }>
            <Link to="contact" onClick={() => {
                handleSubmit("contact");
              }} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburge */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/boburbek-dadajonov-6383a2246/?locale=en_US"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/djboburjon"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=djboburdev@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
