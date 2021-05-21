import Layout from "../components/layout";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ShoppingBasket from "../components/ShoppingBasket"

export default function Basket() {
  return (
    <Layout>
      <Head>
        <title>Shopping Basket</title>
        <meta name="description" content="E-commerce site for mugs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main_container}>
        <main className={styles.flex_column}>
          <h1>Your shopping basket</h1>
          <ShoppingBasket />
        </main>
      </div>
    </Layout>
  );
}
