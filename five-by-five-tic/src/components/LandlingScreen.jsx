import React from "react";
import { Link } from "react-router-dom";
import { GiRabbitHead } from "react-icons/gi";
export default function LandingScreen() {
  return (
    <div className="bg-gray-800 h-screen flex justify-evenly">
      <div className="border-2 rounded-xl border-dashed border-red-500 my-auto py-10 px-4 text-white font-mono font-semibold text-center">
        {" "}
        <h1 className="text-2xl">LIFE OF BUNNY</h1>
        <h2 className="text-lg">~ Shubham.</h2>
        <GiRabbitHead className="text-teal-600 w-[90%] h-[90%] mx-auto my-5" />
        <Link
          to="/game"
          className="px-8 py-4 font-mono border-2 border-teal-600 rounded-xl text-teal-600 font-semibold"
        >
          START LIFE !
        </Link>
      </div>
    </div>
  );
}
