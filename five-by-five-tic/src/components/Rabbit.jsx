import React, { useEffect } from "react";
import { GiRabbitHead } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Rabbit(props) {
  const [blue, setblue] = useState(false);
  const navigate = useNavigate();
  /*
  every 1 sec will set either blue or pink.
  */
  useEffect(() => {
    setTimeout(() => {
      makeRabbitBlueOrRed();
    }, [1000]);
  }, []);

  /*
  when time in millis is even then blue if not then pink.
  */
  function makeRabbitBlueOrRed() {
    if (Math.round(Date.now()) % 2 == 0) {
      setblue(true);
    } else {
      setblue(false);
    }
  }

  return (
    <div
      className="w-full h-full "
      onClick={() => {
        if (props.female) {
          if (blue) {
            props.setcurrentscore(props.currentscore + 2);
          } else {
            props.setcurrentscore(props.currentscore - 2);
            if (props.currentscore - 2 <= 0) {
              navigate("/scoreboard");
            }
          }
        } else {
          props.setcurrentscore(props.currentscore + 1);
        }
      }}
    >
      <GiRabbitHead
        className={`${props.female ? "text-pink-800" : "text-teal-600"} ${
          blue ? "text-purple-600" : ""
        } w-[90%] h-[90%] mx-auto my-auto`}
      />
    </div>
  );
}
