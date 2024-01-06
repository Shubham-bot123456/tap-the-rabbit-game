import React from "react";
import { GiSnakeBite } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import snakeaudio from "./snakebiteaudio.mp3";
export default function Snake(props) {
  const navigate = useNavigate();
  function endGameBasedOnLife() {
    props.setcurrentlife(props.currentlife - 1);
    if (props.currentlife == 1) {
      navigate("/scoreboard");
    }
  }
  return (
    <div className="w-full h-full " onClick={() => endGameBasedOnLife()}>
      <GiSnakeBite className="text-teal-600 w-[90%] h-[90%] mx-auto my-auto" />
    </div>
  );
}
