import React from "react";
import { Link } from "react-router-dom";

export default function Scoreboard(props) {
  return (
    <div className="bg-gray-800 h-screen flex justify-evenly">
      <div className="border-2 rounded-xl border-dashed border-red-500 my-auto py-6 px-4 text-white font-mono font-semibold text-center">
        {" "}
        <h1 className="text-2xl">Goals you achieved</h1>
        <h2 className="text-6xl mb-4">{props.finalscore}</h2>
        <Link
          to="/"
          className="px-4 py-2  font-mono bg-teal-600 rounded-xl font-semibold"
        >
          SPAWN AGAIN
        </Link>
      </div>
    </div>
  );
}
