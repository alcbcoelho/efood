import { createGlobalStyle } from "styled-components";

export const colors = {
  darksalmon: "#e66767",
  gold: "#ffb930",
  lightsalmon: "#fff8f2",
  salmon: "#ffebd9",
  white: "#fff",
  black: "#000",
  graphite: "#4b4b4b"
};

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

    h3 {
        font-size: 18px;
    }

    button {
        cursor: pointer;

        &.&--primary {
            padding: 4px 6px;
            font-size: 14px;
            font-weight: 700;
            color: ${colors.salmon};
            background-color: ${colors.darksalmon};
            border: none;
            transition: all ease-in 0.1s;

            &:hover {
                background-color: ${colors.salmon};
                color: ${colors.white};
            }
        }
    }

    input {
        padding: 8px;
        color: ${colors.graphite};
        background-color: ${colors.salmon};
        height: 32px;
        width: 100%;
        border: none;
        font-size: 14px;
        font-weight: 700;

        &:focus {
            outline-color: ${colors.darksalmon}
        }

        &.error {
            border: 2px ${colors.black} solid;
            border-radius: 4px;
        }
    }

    label {
        font-size: 14px;
        font-weight: 700;
    }
        
    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }

    .text-align-center {
        text-align: center;
    }

    .hidden {
        display: none;
    }
`;
