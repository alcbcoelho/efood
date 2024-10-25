import MenuItemCard from "../components/MenuItemCard";

import * as s from "./styles/CardList";

interface Props {
  restaurant: Restaurant;
}

export default function MenuItemCardList({
  restaurant: { cardapio: menuItems }
}: Props) {
  return (
    <s.MenuItemCardList>
      {menuItems?.map((i) => (
        <li key={i.id}>
          <MenuItemCard {...i} />
        </li>
      ))}
    </s.MenuItemCardList>
  );
}
