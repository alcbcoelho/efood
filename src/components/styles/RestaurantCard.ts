import styled from "styled-components";

import { colors } from "../../global-style";

interface FlexContainerProps {
  flexDirection?: "row" | "column";
  height?: string;
}

interface TagProps {
  capitalize?: boolean;
}

const Card = styled.div`
  position: relative;
  height: 100%;

  .display-text {
    font-size: 18px;
    font-weight: 700;
  }

  .rating-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .flex-container-space-between {
    display: flex;
    justify-content: space-between;
  }
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 8px;
  height: calc(100% - 217px);
  background-color: ${colors.white};
  border: 1px ${colors.darksalmon} solid;
  border-top: none;

  p {
    margin: 16px 0;
  }

  button {
    padding: 4px 6px;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.salmon};
    background-color: ${colors.darksalmon};
    border: none;
  }
`;

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: space-between;
  height: ${({ height }) => height || "auto"};
`;

const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 6px 4px;
  margin-right: 8px;
  text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
  font-size: 12px;
  font-weight: 700;
  color: ${colors.white};
  background-color: ${colors.darksalmon};

  &:last-of-type {
    margin-right: 0;
  }
`;

export { Card, CardImage, CardBody, FlexContainer, Tag, TagContainer };
