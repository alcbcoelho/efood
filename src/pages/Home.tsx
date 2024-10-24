import Header from "../components/Header";
import RestaurantCardList from "../containers/RestaurantCardList";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <RestaurantCardList />
      </div>
    </>
  );
}
