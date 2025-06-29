import Link from "next/link";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to Food delivery</h1>
      <p>Choose widely</p>
      <Link href="/restaurants" className={styles.linkButton}>
        Go to Restaurants
      </Link>
    </>
  );
};
