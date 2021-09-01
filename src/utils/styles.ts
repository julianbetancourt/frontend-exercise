import { css } from "styled-components"

const buttonStyles = css`
  background: steelblue;
  cursor: pointer;
  border: 0;
  padding: 10px 25px;
  margin-right: 20px;
  color: white;
  border-radius: 5px;
  &:hover {
    background: "#1a344a";
  }
`

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: Helvetica, sans-serif;
  }
  body {
    background: #3b4f63;
  }
  button {
    ${buttonStyles}
  }
`

export const screenBreaks = {
  md: "600px",
  lg: "1237px",
}
