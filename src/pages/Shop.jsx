import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
