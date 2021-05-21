import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export function getTotalPrice(basket) {
  let totprice = 0;
  const newArrey = [...basket];
  newArrey.forEach((product) => {
    totprice += product.totalPrice;
  });
  return totprice;
}

export default function ShoppingBasket() {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  function updateBasket(newBasket) {
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    setTotalPrice(getTotalPrice(newBasket));
  }

  function removeItem(id) {
    const newBasket = basket.filter((product) => product.id !== id);
    updateBasket(newBasket);
  }

  useEffect(() => {
    if (localStorage.getItem("basket")) {
      setBasket(JSON.parse(localStorage.getItem("basket")));
    } else {
    }

    setTotalPrice(getTotalPrice(basket));
  }, [totalPrice]);

  return (
    <>
      <ul className={`${styles.flex_row} ${styles.basket}`}>
        {basket.map((e) => {
          return (
            <li className={styles.basket_item} key={e.id}>
              <Image src={e.img_path} width={100} height={100} />
              <p>{e.name}</p>
              <p>Quantity: {e.quantity}</p>
              <p>Colour </p>
              <p>Price: £{e.totalPrice}</p>
              <button onClick={() => removeItem(e.id)}>Remove Item</button>
            </li>
          );
        })}
      </ul>
      <div className={`${styles.totalPrice}`}>
        {totalPrice > 0 ? (
          <h2>Total price: £ {totalPrice}</h2>
        ) : (
          <h2>Total price: £0</h2>
        )}
      </div>
    </>
  );
}
