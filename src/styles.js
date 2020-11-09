import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import styled from "styled-components";

export const TitleHeader = styled.h1`
  text-align: center;
  color: orangered;
`;

export const ExplanationText = styled.p`
  text-align: center;
  color: black;
`;

export const NumberBarStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const WinnerText = styled.h4`
  text-align: center;
  color: #4169e1;
`;

export const LoserText = styled.h4`
  text-align: center;
  color: crimson;
`;

export const NumberButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: green;
  color: white;
  margin-left: 45%;
`;

export const KeepGoing = styled.h4`
  text-align: center;
  color: lime;
`;

export const LogoImage = styled.img`
  display: block;
  margin-left: calc(50% - 100px);
  margin-right: 20px;
  height: 200px;
`;
