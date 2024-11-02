import styled from "styled-components";

import { colors } from "../../global-style";
import { FlexContainer } from "../../containers/styles/FlexContainer";

const Sidebar = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  overflow: auto;

  padding: 32px 8px;
  color: ${colors.salmon};
  background-color: ${colors.darksalmon};

  h4 {
    margin-bottom: 16px;
  }
`;

const Cart = styled.div`
  li {
    margin-bottom: 16px;

    > div {
      position: relative;
      padding: 8px 8px 12px;
      color: ${colors.darksalmon};
      background-color: ${colors.salmon};

      display: flex;
      gap: 8px;

      img {
        display: block;
        height: 80px;
        width: 80px;
        object-fit: cover;
      }

      h3 {
        margin-bottom: 16px;
      }
    }

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  span {
    font-size: 14px;
  }

  ${FlexContainer} {
    margin-bottom: 16px;

    span {
      font-weight: 700;
    }
  }
`;

const MessageIfEmpty = styled.p`
  font-size: 12px;
  max-width: 75%;
  margin: 0 auto;
  text-align: center;
  color: ${colors.salmon};
  font-weight: 100;
`;

const OrderConfirmation = styled.div`
  p {
    margin-bottom: 24px;
  }
`;

export { Cart, MessageIfEmpty, OrderConfirmation, Sidebar };
