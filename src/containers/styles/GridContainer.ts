import styled from "styled-components";

interface Props {
  columns?: string[];
  gap?: boolean;
}

export const GridContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns?.join(" ") || "1fr 1fr"};
  gap: ${({ gap }) => (gap ? "32px" : "none")};
`;
