import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "chairs",
    description:
      "A collection of beautifully crafted chairs that add elegance and comfort to your living spaces.",
    imageUrl: "https://images.unsplash.com/photo-1581541234269-03d5d8576c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80",
  },
  {
    _id: uuid(),
    categoryName: "sofas",
    description:
      "Discover luxurious sofas designed to create a cozy and stylish ambiance in your home.",
    imageUrl: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1109&q=80",
  },
  {
    _id: uuid(),
    categoryName: "lamps",
    description:
      "Illuminate your rooms with our exquisite lamp designs, blending aesthetics with functionality.",
    imageUrl: "https://img.freepik.com/free-vector/vector-set-floor-table-lamps-with-black-nightstand-isolated-white-background_1284-48473.jpg?w=900&t=st=1690319164~exp=1690319764~hmac=bb55452d06e4173f6070303aac170711af258101597251cb1025b03cb95726b0",
  },
];
 