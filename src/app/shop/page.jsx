"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/shop.module.css";

export default function Shop() {
  const [data, setData] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const recupData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const reponseData = await response.json();
        setData(reponseData);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };
    recupData();
  }, []);

  const filteredData = data.filter(
    (element) =>
      element.price <= maxPrice &&
      element.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className={styles.filtercontainer}>
        <h2 className={styles.filterby}>filter by</h2>
        <div className={styles.filters}>
          <div className={styles.pricefilter}>
            <div className={styles.flexprice}>
              <input
                min={10}
                max={1000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                type="range"
                className={styles.pricing}
              />
              <p
                style={{
                  color: "white",
                  textTransform: "capitalize",
                  fontFamily: "Lato",
                }}
              >
                max Price: ${maxPrice}
              </p>
            </div>
          </div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search.."
            className={styles.search}
          />
        </div>
      </div>
      <div className={styles.cards}>
        {filteredData.map((element) => {
          return (
            <div key={element.id} className={styles.card}>
              <Image
                width={350}
                height={350}
                className={styles.img}
                src={element.category.image}
                alt={element.title}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}> {element.title} </h2>
                <p className={styles.cardText}> {element.description} </p>
              </div>
              <div className={styles.buttons}>
                <h2 className={styles.cardPrice}> ${element.price} </h2>
                <h2 className={styles.add}>add</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
