import { SyncLoader } from "react-spinners";

import { SpinnerContainer, SpinnerContainerProps } from "./styles/Spinner";
import { FlexContainerProps } from "../containers/styles/FlexContainer";
import { colors } from "../global-style";

interface Props extends FlexContainerProps, SpinnerContainerProps {
  color?: "light" | "dark";
}
export default function Spinner({ color = "dark", ...props }: Props) {
  return (
    <SpinnerContainer {...props}>
      <SyncLoader
        size={12}
        speedMultiplier={0.75}
        color={color === "light" ? colors.salmon : colors.darksalmon}
      />
    </SpinnerContainer>
  );
}
