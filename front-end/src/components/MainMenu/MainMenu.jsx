import styles from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";
import { TYPES } from "../../constants/categories";
export function MainMenu() {
  return (
    <ul className={styles.mainMenu}>
      {TYPES.map((category) => {
        return (
          <li key={category.path}>
            <NavLink to={category.path}>{category.categoryName}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
