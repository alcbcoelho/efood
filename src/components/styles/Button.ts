import styled from "styled-components";

import { colors } from "../../global-style";

interface Props {
  backgroundColor?: string;
  color?: string;
  width?: string;
}

export const Button = styled.button<Props>`
  padding: 4px 6px;
  display: block;
  width: ${({ width }) => width || "auto"};
  font-size: 14px;
  font-weight: 700;
  color: ${({ color }) => color || colors.darksalmon};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.lightsalmon};
  border: none;
`;
