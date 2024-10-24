import RestaurantCard from "../components/RestaurantCard";
import * as s from "./styles/CardList";

import data from "../data";

const { restaurants } = data;

export default function RestaurantCardContainer() {
  return (
    <s.RestaurantCardList>
      {restaurants.map((r) => (
        <li key={r.id}>
          <RestaurantCard {...r} />
        </li>
      ))}
    </s.RestaurantCardList>
  );
}
