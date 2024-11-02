import { useSelector } from "react-redux";

import { RootState } from "../store";

import Cart from "./Cart";
import Form from "./Form";

import * as s from "./styles/Sidebar";

interface Props {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface SidebarElement {
  cart: JSX.Element;
  form: JSX.Element;
}

const element: SidebarElement = {
  cart: <Cart />,
  form: <Form />
};

export default function Sidebar(props: Props) {
  const elementToRender = useSelector(
    (state: RootState) => state.sidebar.elementToRender
  );

  return <s.Sidebar {...props}>{element[elementToRender]}</s.Sidebar>;
}
