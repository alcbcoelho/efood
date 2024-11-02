import { useNavigate } from "react-router-dom";

import { RestaurantNotFound as Style } from "./styles/RestaurantNotFound";

export default function RestaurantNotFound() {
  const navigate = useNavigate();

  return (
    <Style className="container">
      <h2>Erro 404</h2>
      <p>Restaurante não encontrado 😭</p>
      <button
        className="button--primary"
        type="button"
        onClick={() => navigate("/")}
      >
        Voltar à página principal
      </button>
    </Style>
  );
}
