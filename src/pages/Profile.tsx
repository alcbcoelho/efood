import { useParams } from "react-router-dom";

import Spinner from "../components/Spinner";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Overlay from "../containers/Overlay";
import RestaurantNotFound from "../containers/RestaurantNotFound";

import MenuItemCardList from "../containers/MenuItemCardList";

import { useGetRestaurantByIdQuery } from "../services/api";

export default function Profile() {
  const { id } = useParams();
  const {
    data: restaurant,
    isLoading,
    isFetching,
    isSuccess
  } = useGetRestaurantByIdQuery(id as string);

  if (!isSuccess)
    return (
      <>
        <Overlay />
        <Header />
        {isLoading || isFetching ? (
          <Spinner paddingVertical="80px" />
        ) : (
          <RestaurantNotFound />
        )}
      </>
    );

  const {
    titulo: restaurantName,
    capa: restaurantImage,
    tipo: cuisineType
  } = restaurant as Restaurant;

  const bannerProps = { restaurantName, restaurantImage, cuisineType };

  return (
    <>
      <Overlay />
      <Header />
      <Banner {...bannerProps} />
      <div className="container">
        <MenuItemCardList restaurant={restaurant as Restaurant} />
      </div>
    </>
  );
}
