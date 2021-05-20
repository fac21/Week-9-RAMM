import { useState, useEffect } from "react";
import Image from "next/image";




export default function ShoppingBasket() {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState()



  // function getTotalPrice(){
  //   let totprice = 0
  //   const newArrey = [...basket]
  //   newArrey.forEach((product) => {
  //     totprice+=product.totalPrice
  //     console.log("total",totprice)
  //   })

  //   return totprice
    
  // }

 
  useEffect(() => {
    if (localStorage.getItem("basket")) {
      setBasket(JSON.parse(localStorage.getItem("basket")));


    
    } else {
      // console.log("no local storage");
    }
    // setTotalPrice(getTotalPrice())
    

  }, []);

  

  return (
    <>
      <ul>
        {basket.map((e) => {
          return (
            <li key={e.id}>
              <Image src={e.img_path} width={50} height={50}/>
              <p>{e.name}</p>
              <p>Quantity: {e.quantity}</p>
              <p>Price: £{e.totalPrice}</p>  
            </li>
          );
        })}
      </ul>
      {/* <>
      {totalPrice > 0 ? <h3>Total price: £ {totalPrice}</h3> : <h3>Total price: £0</h3>}
      </> */}
    </>
  );
}
