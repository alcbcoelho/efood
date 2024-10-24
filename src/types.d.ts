declare type MenuItem = {
  id: number;
  name: string;
  image: string;
  description: string;
};

declare type Restaurant = {
  id: number;
  name: string;
  image: string;
  tags: string[];
  rating: number;
  description: string;
  menuItems: MenuItem[];
};

declare type SocialLink = {
  title: string;
  icon: JSX.Element;
  url: string;
};
