import { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (!quantity || isNaN(quantity) || quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);

  const handleAdd = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />

      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>

      <div className={styles.controls}>
        <button
          onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value >= 1) {
              setQuantity(value);
            }
          }}
          className={styles.quantityInput}
        />
        <button onClick={() => setQuantity((q) => q + 1)}>+</button>
      </div>

      <button
        onClick={handleAdd}
        className={styles.addButton}
        disabled={justAdded}
      >
        {justAdded ? "Added!" : "Add to Cart"}
      </button>

      <p className={`${styles.addedMsg} ${justAdded ? styles.show : ""}`}>
        ✔ Added to cart!
      </p>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
