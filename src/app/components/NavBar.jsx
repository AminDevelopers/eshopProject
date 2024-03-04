import Link from "next/link";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
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
          <Link href={"/login"} className={styles.link}>
            login
          </Link>
        </ul>
      </nav>
    </div>
  );
}
