import styled from "styled-components";

import { colors } from "../../global-style";
import { Button } from "./Button";

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 8px;

  &:hover {
    .error-message {
      display: inline-block;
    }
  }

  svg {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;

const Form = styled.form`
  position: relative;
  height: 100%;

  label {
    display: block;
    margin-bottom: 8px;
  }

  ${Button}:first-of-type {
    margin: 24px 0 8px;
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  padding: 8px;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;
  border: 2px ${colors.white} solid;
  border-radius: 4px;
`;

export { Form, ErrorMessage, InputContainer };
