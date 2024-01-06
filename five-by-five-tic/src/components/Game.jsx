import React, { useEffect, useState } from "react";
import Rabbit from "./Rabbit";
import Snake from "./Snake";
import themesong from "./themesong.mp3";
import { GoGoal } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
export default function Game(props) {
  const [one, setone] = useState("");
  const [two, settwo] = useState("");
  const [three, setthree] = useState("");
  const [four, setfour] = useState("");
  const [five, setfive] = useState("");
  const [six, setsix] = useState("");
  const [seven, setseven] = useState("");
  const [eight, seteight] = useState("");
  const [nine, setnine] = useState("");
  const [ten, setten] = useState("");
  const [eleven, seteleven] = useState("");
  const [twelve, settwelve] = useState("");
  const [thirteen, setthirteen] = useState("");
  const [fourteen, setfourteen] = useState("");
  const [fifteen, setfifteen] = useState("");
  const [sixteen, setsixteen] = useState("");
  const [seventeen, setseventeen] = useState("");
  const [eightteen, seteightteen] = useState("");
  const [ninteen, setninteen] = useState("");
  const [twenty, settwenty] = useState("");
  const [twentyone, settwentyone] = useState("");
  const [twentytwo, settwentytwo] = useState("");
  const [twentythree, settwentythree] = useState("");
  const [twentyfour, settwentyfour] = useState("");
  const [twentyfive, settwentyfive] = useState("");
  const [score, setscore] = useState(0);
  const [showlevel, setshowlevel] = useState("BORN");
  const [life, setlife] = useState(3);
  let [level, setlevel] = useState(1000);
  const arrayofsetters = new Array();
  arrayofsetters.push(setone);
  arrayofsetters.push(settwo);
  arrayofsetters.push(setthree);
  arrayofsetters.push(setfour);
  arrayofsetters.push(setfive);
  arrayofsetters.push(setsix);
  arrayofsetters.push(setseven);
  arrayofsetters.push(seteight);
  arrayofsetters.push(setnine);
  arrayofsetters.push(setten);
  arrayofsetters.push(seteleven);
  arrayofsetters.push(settwelve);
  arrayofsetters.push(setthirteen);
  arrayofsetters.push(setfourteen);
  arrayofsetters.push(setfifteen);
  arrayofsetters.push(setsixteen);
  arrayofsetters.push(setseventeen);
  arrayofsetters.push(seteightteen);
  arrayofsetters.push(setninteen);
  arrayofsetters.push(settwenty);
  arrayofsetters.push(settwentyone);
  arrayofsetters.push(settwentytwo);
  arrayofsetters.push(settwentythree);
  arrayofsetters.push(settwentyfour);
  arrayofsetters.push(settwentyfive);

  function findLevel() {
    if (score > 15) {
      setlevel(750);
      setshowlevel("ADULT");
    } else if (score > 12) {
      setlevel(800);
      setshowlevel("TWENTIES");
    } else if (score > 8) {
      setlevel(950);
      setshowlevel("TEENAGER");
    } else if (score > 3) {
      setlevel(1000);
      setshowlevel("MILK TEETHS");
    }
  }
  useEffect(() => {
    setTimeout(() => {
      clear();
      snakePositionSetter();
      selectingRandomBoxesforRabbit();
      props.gamesetscore(score);
      findLevel();
    }, [1000]);
  }, [Math.round(new Date().getTime() / level)]);

  const clear = () => {
    arrayofsetters.forEach((i) => {
      i("");
    });
  };
  const snakePositionSetter = () => {
    let numberofsnakes = 5;
    if (score > 15) {
      numberofsnakes += 12;
    } else if (score > 12) {
      numberofsnakes += 10;
    } else if (score > 8) {
      numberofsnakes += 7;
    } else if (score > 3) {
      numberofsnakes += 3;
    }
    try {
      for (var i = 0; i < numberofsnakes; i++) {
        let temp = Math.round(Math.random() * 100) % 26;
        arrayofsetters[temp](
          <Snake setcurrentlife={setlife} currentlife={life}></Snake>
        );
      }
    } catch (error) {
      console.log("shitty javascript again doing bullshit ! ");
    }
  };

  const selectingRandomBoxesforRabbit = () => {
    try {
      var rabbit = Math.round(Math.random() * 100) % 26;
      let friendOrGirl = Math.round(Math.random() * 100) % 26;
      let rabbitfunction = arrayofsetters[rabbit];
      rabbitfunction(
        <Rabbit
          female={false}
          currentscore={score}
          setcurrentscore={setscore}
        ></Rabbit>
      );
      let ffunction = arrayofsetters[friendOrGirl];
      if (score > 8)
        ffunction(
          <Rabbit
            female={true}
            currentscore={score}
            setcurrentscore={setscore}
          ></Rabbit>
        );
    } catch (e) {
      console.log(
        "Please ignore me I am due to shitty Javascript useless type check"
      );
    }
  };

  return (
    <div className="h-screen  bg-gray-800">
      <audio className="hidden" controls loop autoPlay src={themesong}></audio>
      <div className="flex justify-evenly pt-4">
        <h1 className="font-mono font-semibold text-3xl text-teal-600 my-auto">
          LIFE. OF BUNNY
        </h1>
      </div>
      <div className="flex justify-evenly">
        <div className="flex justify-evenly w-[95%] h-[70%] lg:w-[45%] ">
          <div className="flex justify-evenly border-4 border-double border-green-600 rounded-l-2xl  text-white text-center px-6 bg-gray-900 py-4 my-6 font-mono ">
            <GoGoal className="text-purple-600 text-xl my-auto"></GoGoal> :
            <h1>{score}</h1>
          </div>
          <h1 className="bg-gray-900 border-4 rounded-lg border-double border-red-600  text-white text-center  px-6 py-4 my-6 font-mono font-semibold">
            {showlevel}
          </h1>
          <h1 className="bg-gray-900 flex justify-evenly border-4 border-double border-green-600 rounded-r-2xl text-white text-center  px-6 py-4 my-6 font-mono ">
            <FaHeart className="my-auto text-red-500 text-xl"></FaHeart> :{life}
          </h1>
        </div>
      </div>
      <div className="flex justify-evenly pt-4">
        <h1 className="font-mono font-semibold text-3xl text-teal-600 my-auto"></h1>
      </div>
      <div className="h-[90%] flex justify-evenly">
        <div className="w-[95%] h-[70%] lg:w-[45%] lg:h-[70%] rounded-xl overflow-hidden border-2 border-teal-600">
          <div className="h-[20%] flex justify-evenly bg-green">
            <button className="w-[20%]    border-2 border-teal-600 ">
              {one}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {two}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {three}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {four}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {five}
            </button>
          </div>
          <div className="h-[20%] flex justify-evenly bg-green">
            <button className="w-[20%]    border-2 border-teal-600">
              {six}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {seven}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {eight}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {" "}
              {nine}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {ten}
            </button>
          </div>
          <div className="h-[20%] flex justify-evenly bg-green">
            <button className="w-[20%]    border-2 border-teal-600">
              {eleven}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {twelve}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {thirteen}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {fourteen}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {fifteen}
            </button>
          </div>
          <div className="h-[20%] flex justify-evenly bg-green">
            <button className="w-[20%]    border-2 border-teal-600">
              {sixteen}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {seventeen}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {eightteen}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {ninteen}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {twenty}
            </button>
          </div>
          <div className="h-[20%] flex justify-evenly bg-green">
            <button className="w-[20%]    border-2 border-teal-600">
              {twentyone}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {twentytwo}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {twentythree}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {twentyfour}
            </button>
            <button className="w-[20%]    border-2 border-teal-600">
              {twentyfive}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
