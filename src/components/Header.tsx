import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";

import * as s from "./styles/Header";

export default function Header() {
  const { pathname } = useLocation();

  return pathname !== "/" ? (
    <s.Header>
      <div className="container flex-container">
        <Link to="/">Restaurantes</Link>
        <Logo />
        <button type="button">0 produto(s) no carrinho</button>
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
