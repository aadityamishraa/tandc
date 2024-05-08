import React, { useState } from "react";
import "./App.css";
import Logo from "./components/homepage/Logo";
import Dashboard from "./components/homepage/Dashboard";
import Questionbox from "./components/homepage/questionbox";
import Answerbox from "./components/homepage/Answerbox";
import send from "../src/assests/sendIcon.svg";
import syncBtn from "../src/assests/syncIcon.svg";
import { Configuration, OpenAIApi } from "openai";

const App = () => {
  const [initialui, setInitialui] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [input, setInput] = useState("");
  const [logoShow, setLogoShow] = useState(false);
  const [showAnswerBox, setShowAnswerBox] = useState(false); // New state to control rendering of answer box

  const handleSendClick = () => {
    setLogoShow(true);
    setInputValue(input);
    setInitialui(false);

    setInput("");

    // Delay showing answer box by 5 seconds
    setTimeout(() => {
      setShowAnswerBox(true);
    }, 5000);
  };

  return (
    <>
      {logoShow && <Logo />}
      {initialui && <Dashboard />}
      {!initialui && (
        <div>
          <Questionbox message={inputValue} />
          {showAnswerBox && <Answerbox></Answerbox>}{" "}
          {/* Render answer box based on showAnswerBox state */}
        </div>
      )}
      <div className="inp-main">
        <input
          type="text"
          placeholder="Write your query here...."
          className="inp"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button className="sendBtn" onClick={handleSendClick}>
          <img src={send} alt="sendImage" className="Sendimg" />
        </button>

        <button className="syncBtn" onClick={() => setInitialui(true)}>
          <img src={syncBtn} alt="sync" className="syncimg" />
        </button>
      </div>
    </>
  );
};

export default App;
