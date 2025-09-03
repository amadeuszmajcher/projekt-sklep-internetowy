import styles from "./CategoryMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";
export function CategoryMenu() {
  const params = useParams();
  console.log(params);
  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${params.type}/${category.path}`}>
                {category.categoryName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
