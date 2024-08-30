import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;











/**** Coding Exercise 20 ****/
/* import React from "react";

import "./index.css";

// don't change the Component name "App"
export default function App() {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <h2>You're logged in!</h2>
      <p>Welcome to your user profile!</p>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
} */
