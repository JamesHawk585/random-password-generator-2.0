import { useState } from "react";
import "./App.css";
import Checkbox from "@mui/material/Checkbox";
import Slider from '@mui/material/Slider';

function App() {
  const [count, setCount] = useState(0);
  const [randomPassword, setRandomPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);
  const [lowerCaseToggle, setLowerCaseToggle] = useState(true)
  const [upperCaseToggle, setUpperCaseToggle] = useState(true)
  const [numbersToggle, setNumbersToggle] = useState(true)
  const [specialCharactersToggle, setSpecialCharactersToggle] = useState(true)

  const selectedPasswordLength = 10;

  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numbers = "0123456789".split("");
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?".split("");

  const potentialPasswordCharacters = [
    ...lowerCase,
    ...upperCase,
    ...numbers,
    ...specialCharacters,
  ];

  const generateRandomPassword = () => {
    const passwordArray = [];
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * potentialPasswordCharacters.length);
      passwordArray.push(potentialPasswordCharacters[randomNumber]);
    }
    console.log("passwordArray: ", passwordArray.join(""));
    setRandomPassword(passwordArray.join(""));
    return passwordArray.join("");
  };

  const handleClick = () => {
    generateRandomPassword();
  };

  return (
    <>
      <h1>{randomPassword}</h1>
      <button onClick={handleClick}>Generate Password</button>
      <h3>Lower Case</h3>
      <Checkbox />
      <h3>Uppercase</h3>
      <Checkbox />
      <h3>Numbers</h3>
      <Checkbox />
      <h3>Special Characters</h3>
      <Checkbox />
      <h3>Desired Password Length</h3>
      <Slider/>
    </>
  );
}

export default App;
