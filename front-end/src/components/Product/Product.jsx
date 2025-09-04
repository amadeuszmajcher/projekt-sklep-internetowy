import styles from "./Product.module.css";
import { Link, useFetcher } from "react-router-dom";

export function Product({ product }) {
  const { Form } = useFetcher();
  return (
    <Link
      to={`/${product.type}/${product.category}/${product.subcategory}/${product.id}`}
      className={styles.product}
    >
      <img src={product.photos[0]} />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN}zł</p>
      <Form
        onClick={(e) => {
          e.stopPropagation();
        }}
        method="POST"
        action={`/add-to-favourites/${product.id}`}
      >
        <button>
          <div className={styles.heart}></div>
        </button>
      </Form>
    </Link>
  );
}
