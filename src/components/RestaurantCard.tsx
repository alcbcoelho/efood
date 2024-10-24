import { useNavigate } from "react-router-dom";
import { PiStarFill } from "react-icons/pi";

import * as s from "./styles/RestaurantCard";

import { colors } from "../global-style";

type Props = Restaurant;

export default function RestaurantCard({
  id,
  name,
  description,
  image,
  rating,
  tags
}: Props) {
  const navigate = useNavigate();

  return (
    <s.Card>
      <s.TagContainer>
        {tags.map((t, index) => (
          <s.Tag key={index}>{t}</s.Tag>
        ))}
      </s.TagContainer>
      <s.CardImage src={image} alt={name} />
      <s.CardBody>
        <s.FlexContainer flexDirection="column" height="100%">
          <div>
            <s.FlexContainer>
              <h2 className="display-text">{name}</h2>
              <div className="rating-container">
                <span className="display-text">{rating}</span>
                <PiStarFill color={colors.gold} size="20px" />
              </div>
            </s.FlexContainer>
            <p>{description}</p>
          </div>
          <div>
            <button type="button" onClick={() => navigate(`/restaurant/${id}`)}>
              Saiba mais
            </button>
          </div>
        </s.FlexContainer>
      </s.CardBody>
    </s.Card>
  );
}
