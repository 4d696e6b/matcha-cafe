/** Shared, typed menu data keeps names and prices identical on both pages. */
/** Each menu item has readable content and a stable ID used by the full-menu links. */
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  roman: string;
  tagline: string;
  notes: string;
  image: string;
  imageAlt: string;
}

// Illustrative concept prices and serving notes; the website does not take orders.
export const menuItems: MenuItem[] = [
  {
    id: "iced-matcha",
    image: "/assets/images/hero-matcha.jpg",
    imageAlt: "Layered iced matcha and milk in a clear glass",
    name: "Iced Matcha",
    description: "Earthy matcha, cool milk, and a clean, gentle finish.",
    price: "฿120",
    roman: "I",
    tagline: "THE CLASSIC",
    notes:
      "The idea: whisked matcha, milk, and ice. A gentle stir brings the green tea and milk layers together for an easy, cool sip.",
  },
  {
    id: "matcha-cloud",
    image: "/assets/images/matcha-cloud.jpg",
    imageAlt: "Iced matcha latte with a soft cream topping",
    name: "Matcha Cloud",
    description: "Our iced matcha with a soft, lightly sweet cream top.",
    price: "฿145",
    roman: "II",
    tagline: "A SOFTER SIP",
    notes:
      "The idea: the classic iced matcha base with a soft cream layer. Sip through the topping first, then stir it in for a rounder finish.",
  },
  {
    id: "strawberry-matcha",
    image: "/assets/images/strawberry-matcha.jpg",
    imageAlt: "Strawberry, milk, and matcha in three colourful layers",
    name: "Strawberry Matcha",
    description: "Strawberry, milk, and matcha in three lovely layers.",
    price: "฿155",
    roman: "III",
    tagline: "GREEN MEETS BERRY",
    notes:
      "The idea: a strawberry layer, cool milk, and green matcha on top. Stir the layers together to bring the fruit and tea into the same sip.",
  },
  {
    id: "hojicha-latte",
    image: "/assets/images/hojicha-latte.jpg",
    imageAlt: "An iced roasted tea latte with a warm brown colour",
    name: "Hojicha Latte",
    description: "Roasted tea and milk with a warm, toasty character.",
    price: "฿130",
    roman: "IV",
    tagline: "THE TOASTY ONE",
    notes:
      "The idea: roasted tea softened with milk. Its toasty character gives the menu a different direction from the green matcha drinks.",
  },
  {
    id: "matcha-cookie",
    image: "/assets/images/matcha-cookie.jpg",
    imageAlt: "A matcha green tea cookie on a white ceramic plate",
    name: "Matcha Cookie",
    description: "A matcha cookie with crisp edges and a soft centre.",
    price: "฿75",
    roman: "V",
    tagline: "A LITTLE CRUNCH",
    notes:
      "The idea: green tea character in a small bake. A crisp edge and soft middle add a little contrast beside a smooth, milky drink.",
  },
  {
    id: "matcha-cake",
    image: "/assets/images/matcha-cake.jpg",
    imageAlt: "A slice of green tea sponge cake with light cream",
    name: "Matcha Cake",
    description: "Soft green tea sponge with a light cream finish.",
    price: "฿125",
    roman: "VI",
    tagline: "SOMETHING SOFT",
    notes:
      "The idea: a soft green tea sponge with a light cream layer. Pair its gentle texture with a slower sip of matcha or roasted tea.",
  },
];
