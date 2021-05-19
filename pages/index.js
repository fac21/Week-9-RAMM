import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { getAllProducts } from "../database/model";

// export async function getStaticProps ({ req, res }) {
//   const allProducts = await getAllProducts();
//   const productData = JSON.stringify(allProducts);

//   return {
//     props: { productData },
//   };
// }

export default function Home({ productData }) {

  // const productsArray = JSON.parse(productData);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* {productsArray.map(element =>{
          return  <Image key={element.id} src={element.img_path} alt={element.product_name} width={400} height={400} />
        } )} */}
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
