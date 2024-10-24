import styled from "styled-components";

import { colors } from "../../global-style";

const Footer = styled.footer`
  padding: 40px 0;
  background-color: #ffebd9;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 8px;
  height: 24px;
  width: 24px;
  background-color: ${colors.darksalmon};
  border-radius: 50%;
  border: none;

  &:last-of-type {
    margin-right: 0;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 80px;
`;

const Paragraph = styled.p`
  font-size: 10px;
  max-width: 480px;
  margin: 0 auto;
`;

export { Footer, Paragraph, LinkContainer, SocialLink };
