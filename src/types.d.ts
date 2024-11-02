declare type MenuItem = {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  porcao: string;
};

declare type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: MenuItem[];
};

declare type SocialLink = {
  title: string;
  icon: JSX.Element;
  url: string;
};

declare type Checkout = {
  products: {
    id: number;
    price: number;
  }[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};
