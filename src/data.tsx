import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter
} from "react-icons/ti";

import restaurantImage1 from "../src/images/restaurant-hioki-sushi.png";
import restaurantImage2 from "../src/images/restaurant-la-dolce-vita-trattoria.png";
import menuItemImage from "../src/images/pizza.png";

import { colors } from "./global-style";

type Data = {
  restaurants: Restaurant[];
  socialLinks: SocialLink[];
};

const data: Data = {
  restaurants: [
    {
      id: 1,
      name: "Hioki Sushi",
      image: restaurantImage1,
      tags: ["Destaque da semana", "Japonesa"],
      rating: 4.9,
      description:
        "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.\nExperimente o Japão sem sair do lar com nosso delivery!",
      menuItems: [
        {
          id: 1,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 2,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 3,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 4,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 5,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 6,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        }
      ]
    },
    {
      id: 2,
      name: "La Dolce Vita Trattoria",
      image: restaurantImage2,
      tags: ["Italiana"],
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      menuItems: [
        {
          id: 1,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 2,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 3,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 4,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 5,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 6,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        }
      ]
    },
    {
      id: 3,
      name: "La Dolce Vita Trattoria",
      image: restaurantImage2,
      tags: ["Italiana"],
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      menuItems: [
        {
          id: 1,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 2,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 3,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 4,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 5,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 6,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        }
      ]
    },
    {
      id: 4,
      name: "La Dolce Vita Trattoria",
      image: restaurantImage2,
      tags: ["Italiana"],
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      menuItems: [
        {
          id: 1,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 2,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 3,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 4,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 5,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 6,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        }
      ]
    },
    {
      id: 5,
      name: "La Dolce Vita Trattoria",
      image: restaurantImage2,
      tags: ["Italiana"],
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      menuItems: [
        {
          id: 1,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 2,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 3,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 4,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 5,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 6,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        }
      ]
    },
    {
      id: 6,
      name: "La Dolce Vita Trattoria",
      image: restaurantImage2,
      tags: ["Italiana"],
      rating: 4.6,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      menuItems: [
        {
          id: 1,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 2,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 3,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 4,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 5,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        },
        {
          id: 6,
          name: "Pizza Marguerita",
          image: menuItemImage,
          description:
            "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        }
      ]
    }
  ],
  socialLinks: [
    {
      icon: <TiSocialInstagram size="16px" color={colors.salmon} />,
      url: "https://instagram.com",
      title: "Instagram"
    },
    {
      icon: <TiSocialFacebook size="16px" color={colors.salmon} />,
      url: "https://facebook.com",
      title: "Facebook"
    },
    {
      icon: <TiSocialTwitter size="16px" color={colors.salmon} />,
      url: "https://twitter.com",
      title: "Twitter"
    }
  ]
};

export default data;
