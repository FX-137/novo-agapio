import { BusinessInfo, MenuCategory } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Cardápio Agapio Lanches",
  address: "Av. José de Alencar, 869 - Menino Deus, Porto Alegre",
  googleMapsQuery: "Av.+José+de+Alencar,+869",
  phone: "(51) 3026-0902",
  secondaryPhone: "(51) 99214-1406",
  whatsapp: "5551992141406",
  devWhatsapp: "5551992496479",
  openingHours: [
    "ABERTO DE SEGUNDA À DOMINGO DAS 11H À MEIA-NOITE"
  ]
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: "xis",
    title: "Xis Tradicionais",
    items: [
      {
        id: "x1",
        name: "Xis Salada",
        description: "Pão, maionese, carne, queijo, presunto, alface, tomate, milho e ervilha.",
        price: 28.00,
        image: "https://picsum.photos/seed/xis1/400/300"
      },
      {
        id: "x2",
        name: "Xis Frango",
        description: "Pão, maionese, frango em cubos, queijo, presunto, alface, tomate, milho e ervilha.",
        price: 32.00,
        image: "https://picsum.photos/seed/xis2/400/300"
      },
      {
        id: "x3",
        name: "Xis Coração",
        description: "Pão, maionese, coração de frango, queijo, presunto, alface, tomate, milho e ervilha.",
        price: 35.00,
        image: "https://picsum.photos/seed/xis3/400/300"
      },
      {
        id: "x4",
        name: "Xis Tudo",
        description: "Pão, maionese, carne, frango, coração, bacon, calabresa, ovo, queijo, presunto e salada completa.",
        price: 45.00,
        image: "https://picsum.photos/seed/xis4/400/300"
      }
    ]
  },
  {
    id: "dog",
    title: "Cachorro Quente",
    items: [
      {
        id: "d1",
        name: "Dog Simples",
        description: "Pão, salsicha, molho, batata palha, milho e ervilha.",
        price: 18.00,
        image: "https://picsum.photos/seed/dog1/400/300"
      },
      {
        id: "d2",
        name: "Dog Duplo",
        description: "Pão, duas salsichas, molho, batata palha, milho, ervilha e queijo ralado.",
        price: 22.00,
        image: "https://picsum.photos/seed/dog2/400/300"
      }
    ]
  },
  {
    id: "porcoes",
    title: "Porções",
    items: [
      {
        id: "p1",
        name: "Batata Frita P",
        description: "Porção de batatas fritas crocantes (400g).",
        price: 20.00,
        image: "https://picsum.photos/seed/fries/400/300"
      },
      {
        id: "p2",
        name: "Batata Frita com Cheddar e Bacon",
        description: "Batatas fritas cobertas com molho cheddar e cubos de bacon crocante.",
        price: 32.00,
        image: "https://picsum.photos/seed/cheddar/400/300"
      }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      {
        id: "b1",
        name: "Refrigerante Lata 350ml",
        description: "Coca-cola, Guaraná, Sprite, Fanta.",
        price: 6.00,
        image: "https://picsum.photos/seed/soda/400/300"
      },
      {
        id: "b2",
        name: "Refrigerante 2L",
        description: "Coca-cola ou Guaraná.",
        price: 14.00,
        image: "https://picsum.photos/seed/coke2l/400/300"
      },
      {
        id: "b3",
        name: "Água Mineral 500ml",
        description: "Com ou sem gás.",
        price: 4.00,
        image: "https://picsum.photos/seed/water/400/300"
      }
    ]
  }
];