import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rabbit from "./components/Rabbit";
import Footer from "./components/Footer";
import Scoreboard from "./components/Scoreboard";
import { useState } from "react";
import LandingScreen from "./components/LandlingScreen";
import themesong from "./components/themesong.mp3";
function App() {
  const [score, setscore] = useState(0);
  const [time, settime] = useState(100);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            element={<Game gamesetscore={setscore} gametime={time} />}
            path="/game"
          ></Route>
          <Route
            element={<Scoreboard finalscore={score} />}
            path="/scoreboard"
          ></Route>
          <Route
            element={<LandingScreen setgametime={settime} />}
            path="/"
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
