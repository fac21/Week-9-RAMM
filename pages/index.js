import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllProducts } from "../database/model";
import Layout from "../components/layout";
import ProductCard from "../components/ProductCard/ProductCard";

export async function getStaticProps({ req, res }) {
  const allProducts = await getAllProducts();
  const productData = JSON.stringify(allProducts);

  return {
    props: { productData },
  };
}

export default function Home({ productData }) {
  const productsArray = JSON.parse(productData);

  return (
    <Layout home>
      <Head>
        <title>A bunch of mugs</title>
        <meta name="description" content="E-commerce site for mugs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main_container}>
        <main className={styles.flex_column}>
          <h1>A bunch of mugs</h1>
          <ul className={styles.flex_row}>
            {productsArray.map((product) => {
              return (
                <li key={product.id} className={styles.products_list}>
                  <ProductCard {...product} key={product.id} />
                </li>
              );
            })}
          </ul>
        </main>
      </div>
      <div className={styles.blurb}>
        <h1>
          Don't be a mug... <br />
          <br />
          buy a mug!
        </h1>
      </div>

      <footer className={styles.footer}>
        <img src="/images/mug.png" alt="logo" width={70} height={80} />
      </footer>
    </Layout>
  );
}
