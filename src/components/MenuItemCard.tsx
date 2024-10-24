import * as s from "./styles/MenuItemCard";

type Props = MenuItem;

export default function MenuItemCard({ name, image, description }: Props) {
  return (
    <s.Card>
      <s.CardImage src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button type="button">Adicionar ao carrinho</button>
    </s.Card>
  );
}
