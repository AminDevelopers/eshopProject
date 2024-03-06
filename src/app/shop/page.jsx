import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "../styles/shop.module.css";

export default async function Shop() {
  return (
    <div className={styles.shop}>
      <div className={styles.shopInfo}>
        <h2 className={styles.shopTitle}>
          where style speaks, trends resonate, fashion flourishes
        </h2>
        <div className={styles.shopTextDiv}>
          <p className={styles.shopText}>
            unveiling a fashion destination where trends blend seemlessly with
            your individual style aspiration. discover today !
          </p>
        </div>
        <div className={styles.shopFav}>
          <Link href={"/shop/favorites"} className={styles.shopFavButton}>
            Your favorites{" "}
            <FontAwesomeIcon
              className={styles.shopButtonArrow}
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
