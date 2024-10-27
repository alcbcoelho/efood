import styled from "styled-components";

import { colors } from "../../global-style";

export const Modal = styled.div`
  position: relative;
  display: flex;
  gap: 24px;

  padding: 32px;
  color: ${colors.white};
  background-color: ${colors.darksalmon};

  img {
    display: block;
    height: 280px;
    width: 280px;
    object-fit: cover;
  }

  p {
    margin: 16px 0 16px;
  }
`;
