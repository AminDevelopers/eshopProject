import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const { isLogged, userLogged } = useSelector((state) => state.auth);

  return (
    <div className="NavBar">
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <Link href={"/shop"} className={styles.link}>
            shop
          </Link>
          <div className={styles.nav}>
            <Link className={styles.navLinks} href={"/"}>
              home
            </Link>
          </div>
          {isLogged ? (
            <Link href={"/login"} className={styles.link}>
              {userLogged}
            </Link>
          ) : (
            <Link href={"/login"} className={styles.link}>
              login
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
}
