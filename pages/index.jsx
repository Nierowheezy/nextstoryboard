import Head from "next/head";
// import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button,Link } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Head>
        <title>STORYBOARD | Home</title>
        <meta name="keywords" content="storyboard" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <Link href="/storyboard">
          <Button bgColor="#F6B319" color="white">
           Check Storyboard
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
