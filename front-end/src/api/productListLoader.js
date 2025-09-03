import { redirect } from "react-router-dom";
import { BACK_END_URL } from "../constants/api";
import { CATEGORIES } from "../constants/categories";

export function productListLoader({ params: { type, category, subcategory } }) {
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundType = type;

  if (foundType && foundCategory) {
    let url = `${BACK_END_URL}/products/?gender=${foundType}&category=${category}`;

    if (subcategory) {
      const foundSubcategory = foundCategory.subcategories.find(
        (sc) => sc.path === subcategory
      );
      if (foundSubcategory) {
        url = `${url}&subcategory=${subcategory}`;
      } else {
        return redirect("/phone");
      }
    }

    return fetch(url);
  } else {
    redirect("/phone");
  }
}
