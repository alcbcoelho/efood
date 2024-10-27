import styled from "styled-components";

interface Props {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

export const IconButton = styled.button<Props>`
  position: absolute;
  top: ${({ top }) => (top ? "0" : "auto")};
  right: ${({ right }) => (right ? "0" : "auto")};
  bottom: ${({ bottom }) => (bottom ? "0" : "auto")};
  left: ${({ left }) => (left ? "0" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  width: 32px;
  height: 32px;
`;
