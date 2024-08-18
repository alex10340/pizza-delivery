export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  new?: boolean;
  popular?: boolean;
  type: "pizza" | "beverage" | "dessert" | "combo";
}

export const pizzas: Product[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
    price: 8.99,
    image: "/menu/pizzas/margherita.jpg",
    popular: true,
    type: "pizza",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description:
      "A fan favorite with tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
    price: 10.99,
    image: "/menu/pizzas/pepperoni.jpg",
    popular: true,
    type: "pizza",
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    description:
      "Pizza topped with smoky BBQ sauce, grilled chicken, red onions, and mozzarella cheese.",
    price: 12.49,
    image: "/menu/pizzas/bbq_chicken.jpg",
    popular: true,
    type: "pizza",
  },
  {
    id: 4,
    name: "Hawaiian Pizza",
    description:
      "A tropical twist with tomato sauce, mozzarella cheese, ham, and pineapple chunks.",
    price: 11.99,
    image: "/menu/pizzas/hawaiian.jpg",
    new: true,
    type: "pizza",
  },
  {
    id: 5,
    name: "Veggie Delight Pizza",
    description:
      "A colorful mix of bell peppers, onions, mushrooms, olives, and mozzarella cheese on a tomato sauce base.",
    price: 9.99,
    image: "/menu/pizzas/veggie_delight.jpg",
    new: true,
    type: "pizza",
  },
  {
    id: 6,
    name: "Four Cheese Pizza",
    description:
      "A rich blend of mozzarella, cheddar, parmesan, and gorgonzola on a tomato sauce base.",
    price: 13.49,
    image: "/menu/pizzas/four_cheese.jpg",
    new: true,
    type: "pizza",
  },
  {
    id: 7,
    name: "Meat Lovers Pizza",
    description:
      "A hearty pizza loaded with pepperoni, sausage, ham, bacon, and mozzarella cheese.",
    price: 14.99,
    image: "/menu/pizzas/meat_lovers.jpg",
    type: "pizza",
  },
  {
    id: 8,
    name: "Buffalo Chicken Pizza",
    description:
      "Pizza topped with spicy buffalo sauce, grilled chicken, and a drizzle of ranch dressing.",
    price: 12.99,
    image: "/menu/pizzas/buffalo_chicken.jpg",
    type: "pizza",
  },
  {
    id: 9,
    name: "Spinach and Feta Pizza",
    description:
      "A lighter option with spinach, feta cheese, garlic, and mozzarella on a white sauce base.",
    price: 11.49,
    image: "/menu/pizzas/spinach_feta.jpg",
    type: "pizza",
  },
  {
    id: 10,
    name: "Mushroom Truffle Pizza",
    description:
      "Gourmet pizza with wild mushrooms, truffle oil, mozzarella, and parmesan.",
    price: 14.49,
    image: "/menu/pizzas/mushroom_truffle.jpg",
    type: "pizza",
  },
  {
    id: 11,
    name: "Pesto Chicken Pizza",
    description:
      "Pizza topped with basil pesto sauce, grilled chicken, sun-dried tomatoes, and mozzarella cheese.",
    price: 13.99,
    image: "/menu/pizzas/pesto_chicken.jpg",
    type: "pizza",
  },
  {
    id: 12,
    name: "Mediterranean Pizza",
    description:
      "A fresh combination of olives, feta cheese, red onions, tomatoes, and spinach on a garlic olive oil base.",
    price: 12.49,
    image: "/menu/pizzas/mediterranean.jpg",
    type: "pizza",
  },
];

export const beverages: Product[] = [
  {
    id: 1,
    name: "Cola",
    description:
      "A classic, refreshing cola with a crisp and fizzy taste. Perfect for pairing with your favorite pizza.",
    price: 1.99,
    image: "/menu/beverages/cola2.jpg",
    type: "beverage",
  },
  {
    id: 2,
    name: "Water",
    description: "Pure, still water to quench your thirst.",
    price: 0.99,
    image: "/menu/beverages/water.jpg",
    type: "beverage",
  },
  {
    id: 3,
    name: "Orange Juice",
    description:
      "Freshly squeezed orange juice with a sweet and tangy flavor. A refreshing choice for any time of day.",
    price: 2.49,
    image: "/menu/beverages/orange_juice.jpg",
    type: "beverage",
  },
  {
    id: 4,
    name: "Lemonade",
    description:
      "A zesty and refreshing lemonade with a perfect balance of sweet and tart flavors. Ideal for a hot day.",
    price: 2.29,
    image: "/menu/beverages/lemonade.jpg",
    type: "beverage",
  },
];

export const desserts: Product[] = [
  {
    id: 1,
    name: "Four-Layer Chocolate Dessert",
    description:
      "A decadent treat with layers of rich chocolate mousse, cake, and whipped cream. Perfect for chocolate enthusiasts.",
    price: 4.99,
    image: "/menu/desserts/four_layer.jpg",
    type: "dessert",
  },
  {
    id: 2,
    name: "Cherry Cream Cheese Dessert",
    description:
      "Smooth cream cheese filling topped with a sweet cherry compote, all on a buttery graham cracker crust.",
    price: 5.99,
    image: "/menu/desserts/cherry_cream_cheese.jpg",
    type: "dessert",
  },
  {
    id: 3,
    name: "Vanilla Ice Cream",
    description:
      "Classic vanilla ice cream made with real vanilla beans for a creamy and flavorful experience.",
    price: 2.99,
    image: "/menu/desserts/vanilla.jpg",
    type: "dessert",
  },
  {
    id: 4,
    name: "Strawberry Ice Cream",
    description:
      "Refreshing strawberry ice cream made with real strawberries for a fruity and delicious treat.",
    price: 3.49,
    image: "/menu/desserts/strawberry.jpg",
    type: "dessert",
  },
];

export const combos: Product[] = [
  {
    id: 1,
    name: "2 Pizzas & Dessert",
    description:
      "Enjoy a fantastic combo with two delicious pizzas and two mouthwatering desserts, all for one great price.",
    price: 29.99,
    image: "/menu/combos/2_pizzas_dessert.png",
    type: "combo",
  },
  {
    id: 2,
    name: "3 Pizza Offer",
    description:
      "Get three of your favorite pizzas at a special discounted rate. Perfect for sharing or stocking up for later!",
    price: 32.99,
    image: "/menu/combos/3_pizza_offer.png",
    type: "combo",
  },
  {
    id: 3,
    name: "Pizza + Beverage",
    description:
      "Choose any pizza and get a complimentary beverage of your choice. A perfect meal deal for lunch or dinner.",
    price: 12.99,
    image: "/menu/combos/pizza_beverage.png",
    type: "combo",
  },
];
