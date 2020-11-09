import { React, useState } from "react";
import { NumberBarStyle, NumberButton } from "../styles";

const NumberBar = (props) => {
  const [number, setNumber] = useState(null);
  return (
    <>
      <NumberBarStyle
        placeholder="Guess a Number!"
        onChange={(event) => setNumber(event.target.value)}
      />
      <NumberButton onClick={() => props.submitAttempt(number)}>
        Submit your Guess
      </NumberButton>
    </>
  );
};

export default NumberBar;
