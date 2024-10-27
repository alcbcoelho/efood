import { useParams } from "react-router-dom";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Overlay from "../containers/Overlay";

import MenuItemCardList from "../containers/MenuItemCardList";

import { useGetRestaurantByIdQuery } from "../services/api";

export default function Profile() {
  const { id } = useParams();
  const { data: restaurant } = useGetRestaurantByIdQuery(id as string);

  if (!restaurant) return <div>Restaurante não encontrado :(</div>;

  const {
    titulo: restaurantName,
    capa: restaurantImage,
    tipo: cuisineType
  } = restaurant;

  const bannerProps = { restaurantName, restaurantImage, cuisineType };

  return (
    <>
      <Overlay />
      <Header />
      <Banner {...bannerProps} />
      <div className="container">
        <MenuItemCardList restaurant={restaurant} />
      </div>
    </>
  );
}
