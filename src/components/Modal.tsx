import { useDispatch } from "react-redux";

import { addItem as addItemToCart } from "../store/cartSlice";
import {
  setVisibility as setModalVisibility,
  renderCartDisplay
} from "../store/overlaySlice";

import { TfiClose } from "react-icons/tfi";

import * as s from "./styles/Modal";
import { Button } from "./styles/Button";
import { IconButton } from "./styles/IconButton";
import { colors } from "../global-style";

import { formatPrice } from "../utils";

interface Props {
  menuItemToRender: MenuItem;
}

export default function Modal({ menuItemToRender }: Props) {
  const dispatch = useDispatch();

  const handlePurchase = () => {
    dispatch(addItemToCart(menuItemToRender));
    dispatch(renderCartDisplay());
  };

  const {
    foto: image,
    nome: name,
    descricao: description,
    porcao: dishSize,
    preco
  } = menuItemToRender;

  const price = formatPrice(preco);

  return (
    <s.Modal className="container" onClick={(e) => e.stopPropagation()}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Serve: {dishSize}</p>
        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={handlePurchase}
        >
          Adicionar ao carrinho - {price}
        </Button>
      </div>
      <IconButton
        top
        right
        type="button"
        onClick={() => setModalVisibility(false)}
        title="Fechar"
      >
        <TfiClose size="16px" color={colors.white} />
      </IconButton>
    </s.Modal>
  );
}
