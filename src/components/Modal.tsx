import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";

import { setVisibility as setModalVisibility } from "../store/modalSlice";

import { TfiClose } from "react-icons/tfi";

import * as s from "./styles/Modal";
import { Button } from "./styles/Button";
import { formatPrice } from "../utils";
import { colors } from "../global-style";

interface Props {
  menuItemToRender: MenuItem;
}

export default function Modal({
  menuItemToRender: {
    foto: image,
    nome: name,
    descricao: description,
    porcao: dishSize,
    preco
  }
}: Props) {
  const visibility = useSelector((state: RootState) => state.modal.visibility);
  const dispatch = useDispatch();

  const price = formatPrice(preco);

  const closeModal = () => {
    dispatch(setModalVisibility(false));
  };

  if (visibility)
    return (
      <s.Overlay onClick={closeModal}>
        <s.Modal className="container" onClick={(e) => e.stopPropagation()}>
          <img src={image} alt={name} />
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Serve: {dishSize}</p>
            <Button type="button" title="Adicionar ao carrinho">
              Adicionar ao carrinho - {price}
            </Button>
          </div>
          <s.CloseButton type="button" onClick={closeModal} title="Fechar">
            <TfiClose size="16px" color={colors.white} />
          </s.CloseButton>
        </s.Modal>
      </s.Overlay>
    );
}
