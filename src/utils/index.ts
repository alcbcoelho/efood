export function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(price);
}

export function getTotalPrice(items: MenuItem[]) {
  return items.map((i) => i.preco).reduce((acc, p) => acc + p, 0);
}
