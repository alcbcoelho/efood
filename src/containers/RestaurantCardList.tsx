import RestaurantCard from "../components/RestaurantCard";
import Spinner from "../components/Spinner";

import * as s from "./styles/CardList";

import { useGetRestaurantsQuery } from "../services/api";

export default function RestaurantCardContainer() {
  const { data: restaurants, isFetching, isLoading } = useGetRestaurantsQuery();

  return isFetching || isLoading ? (
    <Spinner paddingVertical="80px" />
  ) : (
    <>
      <s.RestaurantCardList>
        {restaurants?.map((r) => (
          <li key={r.id}>
            <RestaurantCard {...r} />
          </li>
        ))}
      </s.RestaurantCardList>
    </>
  );
}
