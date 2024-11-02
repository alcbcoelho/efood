import styled from "styled-components";

import { FlexContainer } from "../../containers/styles/FlexContainer";

export interface SpinnerContainerProps {
  paddingVertical?: string;
  paddingHorizontal?: string;
  padding?: string;
}

export const SpinnerContainer = styled(FlexContainer)<SpinnerContainerProps>`
  justify-content: center;
  padding-top: ${({ paddingVertical }) => paddingVertical || 0};
  padding-right: ${({ paddingHorizontal }) => paddingHorizontal || 0};
  padding-bottom: ${({ paddingVertical }) => paddingVertical || 0};
  padding-left: ${({ paddingHorizontal }) => paddingHorizontal || 0};
`;
