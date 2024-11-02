import styled from "styled-components";

export interface FlexContainerProps {
  flexDirection?: "row" | "column";
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  fullHeight?: boolean;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
`;
