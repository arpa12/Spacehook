import React from 'react';
import { IoRocketOutline } from "react-icons/io5";

function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <p className="text-5xl font-bold text-center leading-relaxed sm:text-6xl mt-2">
                Manage tenants, bills and much more...
            </p>
            <p className="text-5xl font-bold text-center leading-relaxed sm:text-6xl mt-7">
                Everything, in one place!
            </p>
            <p className="text-center leading-7 text-sm sm:text-base mt-9">
                Jupiter, a world-class SaaS platform to help building owners/operators manage their rental spaces.
            </p>
            <a href="/signUp" className=" bg-black text-white px-6 py-2 my-5 rounded-lg font-medium hover:bg-gray-700 transition flex items-center justify-center">
                Get Started for Free <IoRocketOutline className="ml-2" />
            </a>
        </div>
    );
}

export default Hero;
