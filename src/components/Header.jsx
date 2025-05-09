import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ cartCount }) {
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
        <Link to="/checkout" className={styles.checkoutButton}>
          Go to Checkout
        </Link>
      </div>
    </header>
  );
}

export default Header;
