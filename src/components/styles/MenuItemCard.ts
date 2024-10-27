import styled from "styled-components";

import { FlexContainer } from "../../containers/styles/FlexContainer";

import { colors } from "../../global-style";

const Card = styled.div`
  padding: 8px;
  color: ${colors.lightsalmon};
  background-color: ${colors.darksalmon};
  height: 100%;

  h3 {
    margin-top: 8px;
    font-weight: 900;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
    line-height: 22px;
  }

  > ${FlexContainer} {
    height: 100%;
  }
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 168px;
  object-fit: cover;
`;

export { Card, CardImage };
