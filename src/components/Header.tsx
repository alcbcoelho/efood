import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { RootState } from "../store";
import {
  setVisibility as setOverlayVisibility,
  renderSidebar
} from "../store/reducers/overlaySlice";

import Logo from "./Logo";

import * as s from "./styles/Header";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const openCartDisplay = () => {
    dispatch(setOverlayVisibility(true));
    dispatch(renderSidebar());
  };

  return pathname !== "/" ? (
    <s.Header>
      <div className="container flex-container">
        <div className="flex-item">
          <Link to="/">Restaurantes</Link>
        </div>
        <Logo />
        <div className="flex-item">
          <button type="button" onClick={openCartDisplay}>
            {cartItems.length} produto(s) no carrinho
          </button>
        </div>
      </div>
    </s.Header>
  ) : (
    <s.Header>
      <div className="container text-align-center">
        <Logo />
        <s.Display>
          Viva experiências gastronômicas no conforto da sua casa
        </s.Display>
      </div>
    </s.Header>
  );
}
