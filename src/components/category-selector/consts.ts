import { CATEGORIES } from "./../../api/categories";
export type CategoriesIcons = {
  [key in (typeof CATEGORIES)[number]]: string;
};

export const CATEGORIES_ICONS: CategoriesIcons = {
  smartphones: "smartphone",
  laptops: "laptop_chromebook",
  fragrances: "air_freshener",
  skincare: "dermatology",
  groceries: "storefront",
  "home-decoration": "cottage",
  furniture: "chair",
  tops: "styler",
  "womens-dresses": "dresser",
  "womens-shoes": "steps",
  "mens-shirts": "dresser",
  "mens-shoes": "steps",
  "mens-watches": "watch",
  "womens-watches": "watch",
  "womens-bags": "local_mall",
  "womens-jewellery": "radio_button_unchecked",
  sunglasses: "eyeglasses",
  automotive: "directions_car",
  motorcycle: "two_wheeler",
  lighting: "light_group",
};
