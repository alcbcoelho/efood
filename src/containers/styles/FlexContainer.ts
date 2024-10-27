import styled from "styled-components";

interface Props {
  flexDirection?: "row" | "column";
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
}

export const FlexContainer = styled.div<Props>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
`;
