import { createGlobalStyle } from "styled-components";

export const colors = {
  darksalmon: "#e66767",
  gold: "#ffb930",
  lightsalmon: "#fff8f2",
  salmon: "#ffebd9",
  white: "#fff",
  black: "#000"
};

// 10, 12, 14, 16, 18, 32, 36

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
    }

    :root {
        color: ${colors.darksalmon};
    }

    body {
        background-color: ${colors.lightsalmon};
    }

    button {
        cursor: pointer;
    }
        
    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }

    .text-align-center {
        text-align: center;
    }
`;
