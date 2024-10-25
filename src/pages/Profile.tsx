import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Modal from "../components/Modal";

import MenuItemCardList from "../containers/MenuItemCardList";

import { useGetRestaurantByIdQuery } from "../services/api";

export default function Profile() {
  const menuItem = useSelector(
    (state: RootState) => state.modal.menuItemToRender
  );
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
      <Modal menuItemToRender={menuItem} />
      <Header />
      <Banner {...bannerProps} />
      <div className="container">
        <MenuItemCardList restaurant={restaurant} />
      </div>
    </>
  );
}
