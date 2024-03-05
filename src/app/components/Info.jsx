import { useSelector } from "react-redux";
import styles from "../styles/info.module.css";

export default function Info() {
  const { userLogged, isLogged } = useSelector((state) => state.auth);
  return (
    <div className={styles.brandLine}>
      <div className={styles.only}>
        <p> free delivery over 90$ </p>
        <p> Hey {isLogged ? userLogged : "Guest"} ! 👋</p>
        <p> free delivery over 90$ </p>
        <p> Hey {isLogged ? userLogged : "Guest"} ! 👋</p>
        <p> free delivery over 90$ </p>
        <p> Hey {isLogged ? userLogged : "Guest"} ! 👋</p>
        <p> free delivery over 90$ </p>
        <p> Hey {isLogged ? userLogged : "Guest"} ! 👋</p>
        <p> free delivery over 90$ </p>
        <p> Hey {isLogged ? userLogged : "Guest"} ! 👋</p>
        <p> free delivery over 90$ </p>
        <p> Hey {isLogged ? userLogged : "Guest"} ! 👋</p>
        <p> free delivery over 90$ </p>
        <p> Hey {isLogged ? userLogged : "Guest"} ! 👋</p>
        <p> free delivery over 90$ </p>
        <p> Hey {isLogged ? userLogged : "Guest"} ! 👋</p>
      </div>
    </div>
  );
}
