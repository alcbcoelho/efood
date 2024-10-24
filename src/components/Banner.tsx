import * as s from "./styles/Banner";

interface Props {
  restaurantName: string;
  restaurantImage: string;
  cuisineType: string;
}

export default function Banner({
  restaurantName,
  restaurantImage,
  cuisineType
}: Props) {
  return (
    <s.Banner style={{ backgroundImage: `url(${restaurantImage})` }}>
      <div className="container">
        <span>{cuisineType}</span>
        <h2>{restaurantName}</h2>
      </div>
    </s.Banner>
  );
}
