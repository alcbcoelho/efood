import styled from "styled-components";

import backgroundImage from "../../images/header.png";

import { colors } from "../../global-style";

const Header = styled.header`
  padding: 40px 0;
  background: url(${backgroundImage}) ${colors.salmon};

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .flex-item {
      flex-basis: 200px;
    }

    a,
    button {
      font-size: 18px;
      font-weight: 900;
      color: ${colors.darksalmon};
      text-decoration: none;
    }

    h1 {
      text-align: center;
      flex-basis: auto;
    }

    button {
      border: none;
      background: none;
    }
  }
`;

const Display = styled.p`
  font-weight: 900;
  font-size: 36px;
  line-height: 42.19px;
  max-width: 540px;
  margin: 140px auto 0;
`;

export { Header, Display };
