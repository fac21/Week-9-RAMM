import Link from "next/link";
import Image from "next/image";

export default function ProductCard(props) {
  return (
    <>
      <Image
        key={props.id}
        src={props.img_path}
        alt={props.product_name}
        width={200}
        height={200}
      />
      <h3>
        <Link href={`/products/${props.id}`}>
          <a>{props.product_name}</a>
        </Link>
      </h3>
      <p>£{props.price}</p>
    </>
  );
}
