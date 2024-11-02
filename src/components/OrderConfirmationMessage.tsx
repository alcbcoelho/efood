import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setVisibility as setOverlayVisibility } from "../store/reducers/overlaySlice";
import { setPurchaseStatus } from "../store/reducers/cartSlice";
import { changeElementToRender } from "../store/reducers/sidebarSlice";

import * as s from "./styles/Sidebar";
import { Button } from "./styles/Button";

interface Props {
  orderId: string;
}

export default function OrderConfirmationMessage({ orderId }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPurchaseStatus("concluded"));

    return () => {
      dispatch(setPurchaseStatus("pending"));
    };
  }, [dispatch]);

  const handleClick = () => {
    dispatch(setOverlayVisibility(false));
    dispatch(changeElementToRender("cart"));
  };

  return (
    <s.OrderConfirmation>
      <h4>Pedido realizado - {orderId}</h4>
      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>
      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Button type="button" width="100%" onClick={handleClick}>
        Concluir
      </Button>
    </s.OrderConfirmation>
  );
}
