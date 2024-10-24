import styled from "styled-components";

import { colors } from "../../global-style";

const Card = styled.div`
  padding: 8px;
  color: ${colors.lightsalmon};
  background-color: ${colors.darksalmon};

  h3 {
    margin-top: 8px;
    font-weight: 900;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    padding: 4px 0;
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    color: ${colors.darksalmon};
    background-color: ${colors.lightsalmon};
    border: none;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
`;

export { Card, CardImage };
