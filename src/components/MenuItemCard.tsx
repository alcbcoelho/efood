import { useDispatch } from "react-redux";

import { renderMenuItem, setVisibility } from "../store/modalSlice";

import * as s from "./styles/MenuItemCard";
import { Button } from "./styles/Button";
import { FlexContainer } from "./styles/RestaurantCard";

type Props = MenuItem;

export default function MenuItemCard(props: Props) {
  const { nome: name, foto: image, descricao: description } = props;

  const dispatch = useDispatch();

  const renderOnModal = (menuItem: MenuItem) => {
    dispatch(setVisibility(true));
    dispatch(renderMenuItem(menuItem));
  };

  return (
    <s.Card>
      <FlexContainer flexDirection="column" height="100%">
        <s.CardImage src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <Button
          type="button"
          title={`Ver mais detalhes sobre ${name}`}
          onClick={() => renderOnModal(props)}
        >
          Mais detalhes
        </Button>
      </FlexContainer>
    </s.Card>
  );
}
