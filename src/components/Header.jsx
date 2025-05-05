import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ cartCount }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/shop" className={styles.link}>
          Shop
        </Link>
      </nav>
      <div className={styles.cart}>
        <span>🛒 Cart: {cartCount}</span>
        <button className={styles.checkoutButton} onClick={handleCheckout}>
          Go to Checkout
        </button>
      </div>
    </header>
  );
}

export default Header;
