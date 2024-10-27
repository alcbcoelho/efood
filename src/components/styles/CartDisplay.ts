import styled from "styled-components";

import { colors } from "../../global-style";
import { FlexContainer } from "../../containers/styles/FlexContainer";

const CartBar = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  overflow: auto;

  padding: 32px 8px;
  color: ${colors.salmon};
  background-color: ${colors.darksalmon};

  li {
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 40px;
    }

    div {
      position: relative;
      color: ${colors.darksalmon};
      background-color: ${colors.salmon};

      img {
        display: block;
        height: 80px;
        width: 80px;
        object-fit: cover;
      }
    }
  }

  ${FlexContainer} {
    margin-bottom: 16px;
  }
`;

const CartItem = styled.div`
  display: flex;
  gap: 8px;

  padding: 8px 8px 12px;
`;

const Message = styled.p`
  font-size: 12px;
  max-width: 75%;
  margin: 0 auto;
  text-align: center;
  color: ${colors.salmon};
  font-weight: 100;
`;

export { CartBar, CartItem, Message };
