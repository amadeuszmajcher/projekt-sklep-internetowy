import { redirect } from "react-router-dom";
import { BACK_END_URL } from "../constants/api";
import { CATEGORIES } from "../constants/categories";

export function productListLoader({
  params: { type, category, subcategory },
  request,
}) {
  const pageUrl = new URL(request.url);
  const page = pageUrl.searchParams.get("page") || 1;
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundType = type;

  if (foundType && foundCategory) {
    let url = `${BACK_END_URL}/products/?type=${foundType}&category=${category}`;

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

    url = `${url}&_limit=8&_page=${page}`;

    return fetch(url).then((response) => {
      const numberOfPages = Math.ceil(
        Number(response.headers.get("X-Total-Count")) / 8
      );

      return response.json().then((products) => {
        return {
          products,
          numberOfPages,
        };
      });
    });
  } else {
    redirect("/phone");
  }
}
