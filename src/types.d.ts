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
