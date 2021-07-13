import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import beastBlastLogo from "../public/images/home-logo.webp";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beast Blast Website</title>
        <meta name="description" content="Beast Blast Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src={beastBlastLogo}
          alt="Beast Blast Logo"
          className={styles.logo}
          width={600}
          height={488}
          layout="intrinsic"
        />
      </main>
    </div>
  );
}
