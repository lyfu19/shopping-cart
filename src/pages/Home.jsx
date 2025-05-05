import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>
        🛒 Welcome to <strong>FakeShop</strong>!
      </h1>
      <p>Your favorite place to shop fake things that look real.</p>
      <div className={styles.cta}>
        <img
          src="https://fakestoreapi.com/icons/logo.png"
          alt="FakeStore logo"
          className={styles.logo}
        />
        <Link to="/shop">
          <button className={styles.button}>Start Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
