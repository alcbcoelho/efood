import { useParams } from "react-router-dom";

import Banner from "../components/Banner";
import Header from "../components/Header";

import MenuItemCardList from "../containers/MenuItemCardList";

import data from "../data";

const { restaurants } = data;

export default function Profile() {
  const { id } = useParams();

  const restaurant = restaurants.find((r) => r.id === Number(id));

  return (
    <>
      <Header />
      {restaurant ? (
        <>
          <Banner
            restaurantName={restaurant.name}
            restaurantImage={restaurant.image}
            cuisineType={restaurant.tags[restaurant.tags.length - 1]}
          />
          <div className="container">
            <MenuItemCardList restaurant={restaurant} />
          </div>
        </>
      ) : (
        <div>Restaurante não encontrado :(</div>
      )}
    </>
  );
}
