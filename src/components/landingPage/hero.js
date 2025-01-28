import React from 'react';
import { IoRocketOutline } from "react-icons/io5";

function Hero() {
    return (
        <div className="mt-20 flex flex-col items-center justify-center px-4">
            <p className="text-5xl font-bold text-center leading-relaxed sm:text-6xl mt-2">
                Manage tenants, bills and much more...
            </p>
            <p className="text-5xl font-bold text-center leading-relaxed sm:text-6xl mt-7">
                Everything, in one place!
            </p>
            <p className="text-center leading-7 text-sm sm:text-base mt-9">
                Jupitar, a world-class SaaS platform to help building owners/operators manage their rental spaces.
            </p>
            <button className="mt-9 bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition flex items-center text-sm sm:text-base">
                Get Started for Free <IoRocketOutline className="ml-2 h-4 w-4" />
            </button>
        </div>
    );
}

export default Hero;
