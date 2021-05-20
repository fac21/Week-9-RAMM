import Layout from "../../components/layout";
import Head from "next/head";
import { getProductData, getAllProducts } from "../../database/model";
import Image from "next/image";
// import styles from "../../

export async function getStaticPaths() {
  const pathData = await getAllProducts();

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
  return (
    <Layout>
      <Head>
        <title>{productObject.product_name}</title>
      </Head>
      <Image src={productObject.img_path} width={200} height={200}></Image>
      <section>
        <h1>{productObject.product_name}</h1>
        <p>{productObject.product_description}</p>
        <p>{productObject.product_price}</p>
      </section>

      <form>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" value="quantity" name="quantity" id="quantity" />
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
        <input type="submit" value="Add to cart" />
      </form>
    </Layout>
  );
}
