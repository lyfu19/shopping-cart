import { useOutletContext } from "react-router-dom";
import styles from "./Checkout.module.css";

function Checkout() {
  const { cart } = useOutletContext();

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🧾 Checkout</h2>
      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.itemList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.item}>
                <div>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemDetail}>
                    {item.quantity} × {item.price.toFixed(2)}
                  </div>
                  <div>${(item.quantity * item.price).toFixed(2)}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.total}>Total: ${total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}

export default Checkout;
