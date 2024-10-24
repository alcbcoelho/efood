import styled from "styled-components";

import { colors } from "../../global-style";

const Banner = styled.div`
  position: relative;
  padding: 24px 0 32px;
  height: 280px;
  font-size: 32px;
  color: ${colors.white};
  line-height: 37.5px;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: ${colors.black};
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    display: block;
    font-weight: 100;
  }

  h2 {
    font-weight: 900;
  }

  span,
  h2 {
    z-index: 1;
  }
`;

export { Banner };
