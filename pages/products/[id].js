import Layout from "../../components/layout";
import React from "react";
import Head from "next/head";
import { getProductData, getAllProducts } from "../../database/model";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import ItemAddedMessage from "../../components/ItemAddedMessage";

export async function getStaticPaths() {
  const pathData = await getAllProducts();

  const paths = pathData.map(({ id }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductData(params.id);
  const productData = JSON.stringify(product);
  return {
    props: { productData },
  };
}

export default function Post({ productData }) {
  const productObject = JSON.parse(productData);
  const [currentBasket, setCurrentBasket] = React.useState([]);
  const [clicked, setClicked] = React.useState(false);

  function addToBasket(event) {
    event.preventDefault();
    
    const findId = currentBasket.find(
      (product) => product.id === productObject.id
    );

    if (findId) {
      findId.quantity = findId.quantity + parseInt(event.target[0].value);
      findId.totalPrice = findId.quantity * productObject.price;
      currentBasket.map((product) => product.id === productObject.id);
    } else {
      const basketObj = {};
      basketObj.id = productObject.id;
      basketObj.name = productObject.product_name;
      basketObj.quantity = parseInt(event.target[0].value);
      basketObj.colour = event.target[1].value;
      basketObj.totalPrice =
        parseInt(event.target[0].value) * productObject.price;
      basketObj.img_path = productObject.img_path;
      currentBasket.push(basketObj);
    
    }

    localStorage.setItem("basket", JSON.stringify(currentBasket));
    setClicked(true)
    //alert("item added to cart")
   
  }

  React.useEffect(() => {
    if (localStorage.getItem("basket")) {
      setCurrentBasket([...JSON.parse(localStorage.getItem("basket"))]);
     
    }
  }, []);


  

  return (
    <Layout>
      <Head>
        <title>{productObject.product_name}</title>
      </Head>
      <div className={styles.main_container}>
        <main className={styles.flex_column}>
          <Image src={productObject.img_path} width={150} height={150}></Image>
          <div className={styles.products_list}>
            <section>
              <h1>{productObject.product_name}</h1>
              <h2>£{productObject.price}</h2>
              <p>{productObject.product_description}</p>
              <p>{productObject.product_price}</p>
            </section>

            <form onSubmit={addToBasket}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min={1}
                max={productObject.product_custom.quantity}
                required
              />
              <label htmlFor="colour">Choose a colour:</label>
              <select name="colour" id="colour">
                {productObject.product_custom.colour.map((colour) => {
                  return (
                    <option value={colour} key={colour}>
                      {colour}
                    </option>
                  );
                })}
              </select>
              <input className={styles.productButton} type="submit" value="Add to cart" />
            </form>
            {clicked ? <ItemAddedMessage  name={productObject.product_name} /> : ""}
          </div>
        </main>
      </div>
    </Layout>
  );
}
