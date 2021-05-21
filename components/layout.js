import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";

export const siteTitle = "A bunch of mugs";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="E-commerce site for buying mugs and tableware"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/basket">
                <a>
                  <span>Basket</span>
                  <img
                    src="/images/picnic-basket.svg"
                    alt="basket"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.footer}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          <div className={logo}>
            <img src="/images/mug.png" alt="logo" width={70} height={80} />
          </div>
        </div>
      )}
    </div>
  );
}
