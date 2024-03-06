"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const links = [
    { id: 1, path: "/", name: "home" },
    { id: 2, path: "/shop", name: "shop" },
    { id: 3, path: "/login", name: "login" },
    { id: 4, path: "/team", name: "team" },
  ];
  const pathname = usePathname();
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.disclaimer}>
          <p className={styles.disclaimerTxt}>
            © 2024 amin | Final MolenGeek Frontend Project
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.linktxt}>
            <p>useful links</p>
            <div className={styles.linkstxt}>
              {links.map((link) => {
                const isActive = pathname == link.path;
                return (
                  <Link
                    key={link.id}
                    href={link.path}
                    className={isActive ? styles.active : ""}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
