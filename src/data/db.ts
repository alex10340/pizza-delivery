interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  vegetarian: boolean;
}

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Classic pizza topped with fresh tomatoes, mozzarella, and basil.",
    price: 8.99,
    vegetarian: true,
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Spicy pepperoni slices over a bed of mozzarella cheese.",
    price: 10.99,
    vegetarian: false,
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken with BBQ sauce, red onions, and cilantro.",
    price: 12.49,
    vegetarian: false,
  },
  {
    id: 4,
    name: "Vegetarian Supreme Pizza",
    description:
      "A mix of bell peppers, onions, olives, mushrooms, and mozzarella.",
    price: 11.99,
    vegetarian: true,
  },
  {
    id: 5,
    name: "Hawaiian Pizza",
    description: "Ham, pineapple, and mozzarella on a tangy tomato sauce base.",
    price: 11.49,
    vegetarian: false,
  },
  {
    id: 6,
    name: "Four Cheese Pizza",
    description:
      "A delicious blend of mozzarella, cheddar, parmesan, and gorgonzola.",
    price: 13.99,
    vegetarian: true,
  },
  {
    id: 7,
    name: "Spicy Veggie Pizza",
    description: "Spicy jalapeños, bell peppers, onions, and mozzarella.",
    price: 11.79,
    vegetarian: true,
  },
  {
    id: 8,
    name: "Meat Lover's Pizza",
    description: "Loaded with pepperoni, sausage, bacon, and ham.",
    price: 14.99,
    vegetarian: false,
  },
  {
    id: 9,
    name: "Mushroom Truffle Pizza",
    description: "Truffle oil, mushrooms, and a mix of gourmet cheeses.",
    price: 15.49,
    vegetarian: true,
  },
  {
    id: 10,
    name: "Buffalo Chicken Pizza",
    description:
      "Buffalo sauce, grilled chicken, red onions, and a drizzle of ranch.",
    price: 12.99,
    vegetarian: false,
  },
  {
    id: 11,
    name: "Mediterranean Pizza",
    description: "Topped with feta, olives, spinach, and sun-dried tomatoes.",
    price: 13.49,
    vegetarian: true,
  },
  {
    id: 12,
    name: "Taco Pizza",
    description:
      "Ground beef, cheddar, lettuce, tomatoes, and a drizzle of sour cream.",
    price: 13.99,
    vegetarian: false,
  },
];

export default pizzas;
