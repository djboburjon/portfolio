import React from "react";
import 'animate.css';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import Resume from "../assets/resume/resume.pdf";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] animate__animated animate__fadeInTopLeft">
          Boburbek Dadajonov
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a <span className="animate__animated animate__pulse inline-block animate__delay-1s">Frontend Developer.</span> 
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive web application.
        </p>
        <div className="lg:hidden flex">
          <ul className="flex items-center gap-5 mb-4">
            <li className="w-10 h-10 rounded-[50%] overflow-hidden flex justify-center items-center bg-blue-600 transition-all hover:shadow-md hover:shadow-blue-600">
              <a
                className="text-gray-300"
                href="https://www.linkedin.com/in/boburbek-dadajonov-6383a2246/?locale=en_US"
                target="_blank"
              >
                <FaLinkedin size={25} />
              </a>
            </li>
            <li className="w-10 h-10 rounded-[50%] overflow-hidden flex justify-center items-center bg-[#333333] transition-all hover:shadow-md hover:shadow-[#333333]">
              <a
                className="text-gray-300"
                href="https://github.com/djboburjon"
                target="_blank"
              >
                <FaGithub size={25} />
              </a>
            </li>
            <li className="w-10 h-10 rounded-[50%] overflow-hidden flex justify-center items-center bg-[#6fc2b0] transition-all hover:shadow-md hover:shadow-[#6fc2b0]">
              <a
                className="text-gray-300"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=djboburdev@gmail.com"
                target="_blank"
              >
                <HiOutlineMail size={25} />
              </a>
            </li>
            <li className="w-10 h-10 rounded-[50%] overflow-hidden flex justify-center items-center bg-[#565f69] transition-all hover:shadow-md hover:shadow-[#565f69]">
              <a className="text-gray-300" href={Resume} download>
                <BsFillPersonLinesFill size={25} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2  hover:bg-pink-600 hover:border-pink-600 duration-300">
            <Link
              to="work"
              className="flex items-center"
              smooth={true}
              duration={1000}
            >
              View Work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
