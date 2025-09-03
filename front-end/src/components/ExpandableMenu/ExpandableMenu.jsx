import styles from "./ExpandableMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

const PATH_TO_TYPE_NAME = {
  phone: "Telefon",
  tablet: "Tablet",
  smartwatch: "Zegarek",
};

export function ExpandableMenu() {
  const params = useParams();
  const activePath = params.category;
  return (
    <div className={styles.expandableMenu}>
      <p>{PATH_TO_TYPE_NAME[params.type]}</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${params.type}/${category.path}`}>
                {category.categoryName}{" "}
                <img
                  className={
                    activePath === category.path ? styles.expanded : ""
                  }
                  src={ARROW_ICON}
                />
              </NavLink>
              {activePath === category.path && (
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.path}>
                        <NavLink
                          to={`/${params.type}/${params.category}/${subcategory.path}`}
                        >
                          {subcategory.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
