import styles from "./Breadcrumbs.module.css";
import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
export function Breadcrumbs() {
  const breadcrumbs = [
    {
      categoryName: "Telefon",
      path: "telefon",
    },
    {
      categoryName: "Etui",
      path: "etui",
    },
    {
      categoryName: "iPhone 17 Pro Max",
      path: "iphone-17-pro-max",
    },
  ];

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink to={breadcrumb.path}>
              {breadcrumb.categoryName}
              <img src={ARROW_ICON} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
