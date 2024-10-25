import RestaurantCard from "../components/RestaurantCard";
import * as s from "./styles/CardList";

import { useGetRestaurantsQuery } from "../services/api";

export default function RestaurantCardContainer() {
  const { data: restaurants } = useGetRestaurantsQuery();

  return (
    <s.RestaurantCardList>
      {restaurants?.map((r) => (
        <li key={r.id}>
          <RestaurantCard {...r} />
        </li>
      ))}
    </s.RestaurantCardList>
  );
}
