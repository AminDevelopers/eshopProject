"use client";
import { useSelector } from "react-redux";
import styles from "../../styles/fav.module.css";

export default function Favorites() {
  const { favorites } = useSelector((state) => state.fav);
  return (
    <div className={styles.fav}>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "2em",
          fontStyle: "italic",
        }}
      >
        Your Favorite Items
      </h2>
      <div className={styles.favContainer}>
        {favorites?.map((element) => {
          return (
            <>
              <div key={element.id} className={styles.card}>
                <img
                  width={350}
                  height={350}
                  className={styles.img}
                  src={element.category.image}
                  alt={element.title}
                />
                <h2 className={styles.cardTitle}> {element.title} </h2>
                <div className={styles.buttons}>
                  <h2 className={styles.cardPrice}> ${element.price} </h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
