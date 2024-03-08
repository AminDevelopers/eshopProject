"use client";
import { useSelector } from "react-redux";
import styles from "../../styles/fav.module.css";

export default function Favorites() {
  const { favorites } = useSelector((state) => state.fav);
  return (
    <div className={styles.fav}>
      <h2 style={{ color: "white" }}>Your Favorite Items</h2>
      {favorites?.map((element) => {
        return (
          <>
            <div key={element.id}>
              <h2 style={{ color: "white" }}> {element.title} </h2>
            </div>
          </>
        );
      })}
    </div>
  );
}
