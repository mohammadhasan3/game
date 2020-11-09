import {
  TitleHeader,
  ExplanationText,
  WinnerText,
  LoserText,
  KeepGoing,
  LogoImage,
} from "./styles";
import NumberBar from "./components/NumberBar";
import { useState } from "react";
import "./App.css";
import devilsmile from "./devilsmile.png";
import devilcry from "./devilcry.png";
import lose from "./lose.png";

const correctAnswer = Math.floor(Math.random() * 101);

function App() {
  //My random number between 0-100
  // let correctAnswer = 30;
  const [query, setQuery] = useState(null);
  const [numberOfAttempts, setNumberOfAttempts] = useState(6);

  let statusMessage;
  if (numberOfAttempts <= 0) {
    statusMessage = (
      <>
        <LoserText>
          Mwahahaha the correct answer was {correctAnswer}. Your soul is mine
          now >:D
        </LoserText>
        <LogoImage src={lose}></LogoImage>
      </>
    );
  } else {
    if (+query === correctAnswer) {
      statusMessage = (
        <>
          <WinnerText>You are eternally blessed with luck</WinnerText>
          <LogoImage src={devilcry}></LogoImage>
        </>
      );
    } else {
      // statusMessage = (
      // <KeepGoing>
      //   Keep on trying... You have {numberOfAttempts} attempts left
      // </KeepGoing>
      // );
      if (Math.abs(+query - correctAnswer) >= 50) {
        console.log(correctAnswer);
        statusMessage = (
          <>
            <LoserText>
              Keep this up and your soul is inevitably mines...
            </LoserText>
            <KeepGoing>
              Keep on trying... You have {numberOfAttempts} attempts left
            </KeepGoing>
            <LogoImage src={devilsmile}></LogoImage>
          </>
        );
      } else {
        if (
          Math.abs(+query - correctAnswer) >= 20 &&
          Math.abs(+query - correctAnswer) <= 50
        ) {
          console.log(correctAnswer);
          statusMessage = (
            <>
              <LoserText>
                Too far away, you will still lose... I hope....
              </LoserText>
              <KeepGoing>
                Keep on trying... You have {numberOfAttempts} attempts left
              </KeepGoing>
              <LogoImage src={devilsmile}></LogoImage>
            </>
          );
        } else {
          if (
            Math.abs(+query - correctAnswer) >= 5 &&
            Math.abs(+query - correctAnswer) < 20
          ) {
            console.log(correctAnswer);
            statusMessage = (
              <>
                <LoserText>
                  You're getting close to a life full of luck.. I don't like
                  this
                </LoserText>
                <KeepGoing>
                  Keep on trying... You have {numberOfAttempts} attempts left
                </KeepGoing>
                <LogoImage src={devilsmile}></LogoImage>
              </>
            );
          } else {
            console.log(correctAnswer);
            statusMessage = (
              <>
                <LoserText>Please stop guessing... ;-;</LoserText>
                <KeepGoing>
                  Keep on trying... you have {numberOfAttempts} left
                </KeepGoing>
                <LogoImage src={devilsmile}></LogoImage>
              </>
            );
          }
        }
      }
    }
  }

  const submitAttempt = (query) => {
    if (numberOfAttempts > 0) {
      if (+query === correctAnswer) {
        setNumberOfAttempts(numberOfAttempts - 1);
      } else {
        setNumberOfAttempts(numberOfAttempts - 1);
      }
    } else {
    }

    setQuery(query);
  };

  return (
    <div>
      <TitleHeader>Welcome to the magical guessing game</TitleHeader>

      <ExplanationText>
        Legend has it that the guesser of the correct number is blessed with
        infinite luck for the rest of their lives... However, fail and your soul
        belongs to the devil himself... Are you up for this gamble?
      </ExplanationText>
      <NumberBar submitAttempt={submitAttempt}></NumberBar>

      {statusMessage}
    </div>
  );
}

export default App;
