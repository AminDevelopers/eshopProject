import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const { isLogged, userLogged } = useSelector((state) => state.auth);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.NavBar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {showMenu ? (
          <FontAwesomeIcon
            className={styles.hamburgerIcon}
            icon={faXmark}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            className={styles.hamburgerIcon}
            icon={faBars}
          ></FontAwesomeIcon>
        )}
      </div>

      <div
        className={`${styles.overlay} ${showMenu ? styles.showOverlay : ""} `}
      >
        <ul
          className={`${styles.menuOverlay} ${
            showMenu ? styles.menuOpen : styles.menuOverlay
          }`}
        >
          <li>
            <Link passHref href={"/"} className={styles.menuLink}>
              home
            </Link>
          </li>
          <li>
            <Link passHref href={"/shop"} className={styles.menuLink}>
              shop
            </Link>
          </li>
          <li>
            <Link passHref href={"/login"} className={styles.menuLink}>
              login
            </Link>
          </li>
        </ul>
      </div>

      <nav className={`${styles.navbar} ${showMenu ? styles.showMenu : ""}`}>
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
