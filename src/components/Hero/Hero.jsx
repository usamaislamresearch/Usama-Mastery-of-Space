import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className="bg-black/1 h-full mt-8">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold text-orange-600">
              LET'S EXPLORE THE UNIVERSE WITH USAMA
            </h1>
            <p className="text-orange-400 text-xl" data-aos="fade-down" data-aos-delay="300">
              The universe is all of space and time and their contents. It comprises all of existence, any fundamental interaction, physical process and physical constant, and therefore all forms of energy and matter, and the structures they form, from sub-atomic particles to entire galaxies.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-orange-200 text-black font-semibold px-6 py-1 rounded-md"
            >
              LEARN MORE
            </button>
            <div className="relative z-20 flex mt-6" data-aos="fade-up" data-aos-delay="500">
              <div className="flex gap-x-4">
                <img src="./1.png" alt="planet1" className="w-92 h-64 object-cover" />
                <img src="./2.jpg" alt="planet2" className="w-92 h-64  object-cover" />
                <img src="./3.jpg" alt="planet3" className="w-92 h-64  object-cover" />
                <img src="./4.jpg" alt="planet4" className="w-92 h-64  object-cover" />
              </div>
            </div>

          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-20 z-10"
      />

      <div className="absolute bottom-0 z-10 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
