import styled from "styled-components";

import { colors } from "../../global-style";

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  width: 32px;
  height: 32px;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  z-index: 2;
`;

const Modal = styled.div`
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

export { CloseButton, Modal, Overlay };
