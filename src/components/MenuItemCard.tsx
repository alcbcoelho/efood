import { useDispatch } from "react-redux";

import {
  renderMenuItem,
  setVisibility as setOverlayVisibility
} from "../store/reducers/overlaySlice";

import * as s from "./styles/MenuItemCard";
import { Button } from "./styles/Button";
import { FlexContainer } from "../containers/styles/FlexContainer";

type Props = MenuItem;

export default function MenuItemCard(props: Props) {
  const { nome: name, foto: image, descricao: description } = props;

  const dispatch = useDispatch();

  const renderOnModal = (menuItem: MenuItem) => {
    dispatch(setOverlayVisibility(true));
    dispatch(renderMenuItem(menuItem));
  };

  return (
    <s.Card>
      <FlexContainer flexDirection="column" alignItems="normal" fullHeight>
        <div>
          <s.CardImage src={image} alt={name} />
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
