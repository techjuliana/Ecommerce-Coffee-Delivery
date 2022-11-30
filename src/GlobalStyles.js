import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 body {
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.text};
 }

 h1{
  font-family: 'Baloo 2', cursive;
 }

 button{
  padding:0.7rem;
  border-radius: 0.4rem;
  cursor: pointer;
 }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}
`;
