class Product {
  constructor(data = {}) {
    this.name = data.name ?? "";
    this.amount = data.amount ?? null;
    this.cover =
      data.cover ??
      "https://i.pinimg.com/736x/71/24/fd/7124fd67fa3a65203a12712b53e0a603.jpg";
    this.tags = data.tags ?? [];
  }
}

class Tag {
  constructor(data = {}) {
    this.name = data.name ?? "";
  }
}

export const productTags = [
  new Tag({ id: "filme", name: "Filme" }),
  new Tag({ id: "diretor", name: "Diretor" }),
  new Tag({ id: "quadrinnho", name: "Quadrinho" }),
];

export const productItems = [
  new Product({
    name: "Dona Sônia Pediu Uma Arma para Seu Vizinho Alcides",
    amount: 1998.3,
    cover:
      "https://www.filmesdeplastico.com.br/wp-content/uploads/2022/08/dona-sonia-pediu-uma-arma-para-seu-vizinho-alcides-04.jpg",
    tags: ["Filmes"],
  }),

  new Product({
    name: "Hitcock",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/cd/15/00/cd1500be50ce1f43a22a97518a5e418f.jpg",
  }),

  new Product({
    name: "Varda",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/a8/9d/79/a89d7912dbc34e6ccc397890aad516f8.jpg",
  }),

  new Product({
    name: "Tarantino",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/73/6a/22/736a2240eba964c840c02870a12f364a.jpg",
  }),

  new Product({
    name: "Sabotage",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/ad/d2/f4/add2f464f636ebf48e73daffae69af8a.jpg",
  }),

  new Product({
    name: "Nashtergaele",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/19/c6/d0/19c6d0359dfa9168a6c8729e1ec31b65.jpg",
  }),

  new Product({
    name: "Jackie Chan",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/41/a8/2c/41a82c4067d4839d7f1e46aaa080ee3e.jpg",
  }),

  new Product({
    name: "Fernanda Torres",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/38/0f/3c/380f3ce7c508d350e9ea82a19c16079e.jpg",
  }),

  new Product({
    name: "Ainda Orangotangos",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/c3/d7/fd/c3d7fd6dac3df99aed9b06e76cdeecef.jpg",
  }),

  new Product({
    name: "Enter the Void",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/39/7d/34/397d341737d8f91578633eaa49b47df7.jpg",
  }),

  new Product({
    name: "Gaspar Noé",
    amount: 100,
    cover:
      "https://i.pinimg.com/736x/4f/c4/b7/4fc4b7c0a8aa455a6b4a5dc620eb44af.jpg",
  }),
];
