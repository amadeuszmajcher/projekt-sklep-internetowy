import styles from "./Breadcrumbs.module.css";
import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
import { CATEGORIES, TYPES } from "../../constants/categories";
export function Breadcrumbs() {
  const { type, category, subcategory } = useParams();

  const foundType = TYPES.find((t) => t.path === type);
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  const breadcrumbs = [
    {
      categoryName: foundType.categoryName,
      path: `/${foundType.path}`,
    },
    {
      categoryName: foundCategory.categoryName,
      path: `/${foundType.path}/${foundCategory.path}`,
    },
  ];
  if (subcategory) {
    const foundSubcategory = foundCategory.subcategories.find(
      (sc) => sc.path === subcategory
    );
    breadcrumbs.push({
      categoryName: foundSubcategory.categoryName,
      path: `/${foundType.path}/${foundCategory.path}/${foundSubcategory.path}`,
    });
  }

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink end to={breadcrumb.path}>
              {breadcrumb.categoryName}
              <img src={ARROW_ICON} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
