import Layout from "../../components/layout";
import Head from "next/head";
import { getProductData, getAllProducts } from "../../database/model";

export async function getStaticPaths() {
  const pathData = await getAllProducts();
  //console.log("pathData", pathData)
  //const pathString = JSON.stringify(pathData);
  //console.log("pathString", pathString)

  const paths = pathData.map(({ id }) => {
    console.log(id);
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductData(params.id);
  const productData = JSON.stringify(product);
  console.log("productData", productData);
  return {
    props: { productData },
  };
}

export default function Post({ productData }) {
  const productObject = JSON.parse(productData);
  return (
    <Layout>
      <Head>
        <title>{productObject.product_name}</title>
      </Head>
      <h1>{productObject.product_name}</h1>
      <img src={productObject.img_path}></img>
    </Layout>
  );
}
