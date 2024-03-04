/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  faArrowRight,
  faHeart,
  faMagnifyingGlass,
  faShirt,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.bentoContainer}>
      <div className={styles.cards}>
        <div className={styles.card} id={styles.card1}>
          <Link
            href={"/shop"}
            className={styles.linkcardone}
            id={styles.linkcardone}
          >
            <div className={styles.infoCard}>
              <p className={styles.textshop}>shop now</p>
            </div>
            <FontAwesomeIcon
              className={styles.arrow}
              id={styles.arrow}
              icon={faArrowRight}
            />
          </Link>
        </div>
        <div className={styles.card} id={styles.card2}>
          <Link href={"/shop"} className={styles.linkcardsecond}>
            <div className={styles.infoCard}>
              <p className={styles.textcategory}>fashion</p>
            </div>
            <FontAwesomeIcon
              icon={faShirt}
              className={styles.shirt}
              id={styles.shirt}
            />
            <div className={styles.textcategory}>
              <h2 className={styles.textcategoryone}>Be</h2>
              <h2 className={styles.textcategorytwo}>yourself</h2>
            </div>
          </Link>
        </div>
        <div className={styles.card} id={styles.card3}>
          <Link href={"/shop"} className={styles.linkcardone}>
            <div className={styles.infoCard}>
              <p className={styles.textnewest}>newest article</p>
              <FontAwesomeIcon width={15} icon={faMagnifyingGlass} />
            </div>
            <div className={styles.flexhs}>
              <h2 className={styles.textnewestone}>newest</h2>
              <h2 className={styles.textnewestsecond}>newest</h2>
            </div>
          </Link>
        </div>
        <div className={styles.card} id={styles.card4}>
          <Link href={"/login"} className={styles.linkcardone}>
            <div className={styles.infoCard}>
              <div className={styles.flex}>
                <p className={styles.texttry}>try now</p>
                <FontAwesomeIcon icon={faHeart} width={15} />
              </div>
            </div>
            <div className={styles.textcontainer}>
              <div className={styles.textslide}>
                <h2 className={styles.slidejoin}> join now </h2>
                <h2 className={styles.slidejoin}> join now </h2>
                <h2 className={styles.slidejoin}> join now </h2>
                <h2 className={styles.slidejoin}> join now </h2>
                <h2 className={styles.slidejoin}> join now </h2>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.card} id={styles.card5}>
          <Link href={"/shop"} className={styles.linkcardone}>
            <div className={styles.infoCard}>
              <p className={styles.textbuy}>buy now</p>
              <FontAwesomeIcon icon={faShoppingBag} width={15} />
            </div>
            <div className={styles.textfive}>
              <h2 className={styles.textfivetitle}>offer's</h2>
              <div className={styles.percent}>
                <h2 className={styles.percenttext}>4.9%</h2>
                <p className={styles.percenttexttwo}>+10%</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
