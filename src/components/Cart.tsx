import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { removeItem as removeItemFromCart } from "../store/reducers/cartSlice";
import { changeElementToRender } from "../store/reducers/sidebarSlice";

import { GoTrash } from "react-icons/go";

import * as s from "./styles/Sidebar";
import { Button } from "./styles/Button";
import { FlexContainer } from "../containers/styles/FlexContainer";
import { IconButton } from "./styles/IconButton";
import { colors } from "../global-style";

import { formatPrice, getTotalPrice } from "../utils";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = formatPrice(getTotalPrice(cartItems));

  return cartItems.length ? (
    <s.Cart>
      <ul>
        {cartItems.map(({ nome: name, preco: price, foto: image }, index) => (
          <li key={index}>
            <div>
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
            </div>
          </li>
        ))}
      </ul>
      <FlexContainer>
        <span>Valor total</span>
        <span>{totalPrice}</span>
      </FlexContainer>
      <Button
        type="button"
        width="100%"
        onClick={() => dispatch(changeElementToRender("form"))}
      >
        Continuar com a entrega
      </Button>
    </s.Cart>
  ) : (
    <s.MessageIfEmpty>
      O carrinho está vazio. Que tal uma refeição para preencher o vácuo? 🤤
    </s.MessageIfEmpty>
  );
}
