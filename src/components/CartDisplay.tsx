import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { removeItem as removeItemFromCart } from "../store/cartSlice";

import { GoTrash } from "react-icons/go";

import * as s from "./styles/CartDisplay";
import { Button } from "./styles/Button";
import { FlexContainer } from "../containers/styles/FlexContainer";
import { IconButton } from "./styles/IconButton";
import { colors } from "../global-style";

import { formatPrice } from "../utils";

interface Props {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function CartDisplay(props: Props) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = formatPrice(
    cartItems.map((i) => i.preco).reduce((acc, p) => acc + p, 0)
  );

  return (
    <s.CartBar {...props}>
      {cartItems.length ? (
        <>
          <ul>
            {cartItems.map(
              ({ nome: name, preco: price, foto: image }, index) => (
                <li key={index}>
                  <s.CartItem>
                    <img src={image} alt={name} />
                    <div>
                      <h3>{name}</h3>
                      <span>{formatPrice(price)}</span>
                    </div>
                    <IconButton
                      bottom
                      right
                      type="button"
                      title="Remover refeição do carrinho"
                      onClick={() => dispatch(removeItemFromCart(index))}
                    >
                      <GoTrash size="16px" color={colors.darksalmon} />
                    </IconButton>
                  </s.CartItem>
                </li>
              )
            )}
          </ul>
          <FlexContainer>
            <span>Valor total</span>
            <span>{totalPrice}</span>
          </FlexContainer>
          <Button type="button" width="100%">
            Continuar com a entrega
          </Button>
        </>
      ) : (
        <s.Message>
          O carrinho está vazio. Que tal uma refeição para preencher o vácuo? 🤤
        </s.Message>
      )}
    </s.CartBar>
  );
}
