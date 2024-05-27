import React from "react";
import BuildCon from "../assets/projects/buildcon.png";
import HomeSmart from "../assets/projects/homeSmart.png";
import ElectronicShop from "../assets/projects/electronicShop.png";
import Mixel from "../assets/projects/mixel.png";
import News from "../assets/projects/news.png";
import Rolling from "../assets/projects/rolling.png"

function Work() {
  return (
    <div name="work" className="w-full md:h-screen pb-32 text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${BuildCon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center lg:items-center items-end mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="lg:opacity-0 lg:group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                Supports Tailwind CSS
              </span>
              <div className="lg:pt-8 pt-6 text-center">
                <a href="https://buildcon-ten.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/djboburjon/buildcon" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ElectronicShop})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center lg:items-center items-end mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="lg:opacity-0 lg:group-hover:opacity-100">
              <span className="text-2xl font-bold lg:text-white text-gray-700 tracking-wide">
                Website formed Bootstrap
              </span>
              <div className="lg:pt-8 pt-6 text-center">
                <a href="https://electronic-product-shop.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/djboburjon/electronic-shop" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${HomeSmart})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center lg:items-center items-end mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="lg:opacity-0 lg:group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="lg:pt-8 pt-6 text-center">
                <a href="https://vite-homestart.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/djboburjon/tailwind_vite" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Mixel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center lg:items-center items-end mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="lg:opacity-0 lg:group-hover:opacity-100">
              <span className="text-2xl font-bold lg:text-white text-gray-700 tracking-wide">
                React JS Application
              </span>
              <div className="lg:pt-8 pt-6 text-center">
                <a href="https://mixel-uz.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/djboburjon/mixel.uz" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${News})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center lg:items-center items-end mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="lg:opacity-0 lg:group-hover:opacity-100">
              <span className="text-2xl font-bold lg:text-white text-gray-700 tracking-wide">
                An Information Website
              </span>
              <div className="lg:pt-8 pt-6 text-center">
                <a href="https://namanganliklar24-news.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/djboburjon/namanganliklar24" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Rolling})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center lg:items-center items-end mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="lg:opacity-0 lg:group-hover:opacity-100">
              <span className="text-2xl font-bold lg:text-white text-gray-700 tracking-wide">
                Supports Tailwind CSS
              </span>
              <div className="lg:pt-8 pt-6 text-center">
                <a href="https://tailwind-rolling.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/djboburjon/tailwind_rolling" target="_blank">
                  <button className="text-center rounded-lg px-3 py-1 lg:px-4 lg:py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
