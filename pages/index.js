import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllProducts } from "../database/model";





export async function getStaticProps({ req, res }) {
  const allProducts = await getAllProducts();
  const productData = JSON.stringify(allProducts);

  return {
    props: { productData },
  };
}

export default function Home({ productData }) {
  const productsArray = JSON.parse(productData);
  return null;
}
