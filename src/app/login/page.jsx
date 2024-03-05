/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import styles from "../styles/login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.logincontainer}>
        <h2 className={styles.logintitle}>Welcome there,</h2>
        <input
          className={styles.inputlogin}
          id={styles.inputone}
          type="email"
          placeholder="Enter your email"
        />
        <input
          className={styles.inputlogin}
          id={styles.inputsecond}
          type="password"
          placeholder="Enter your password"
        />
        <div className={styles.buttonlogindiv}>
          <div className={styles.signupdiv}>
            <p>don't have an account ? </p>
            <Link className={styles.linksignup} href={"/signup"}>
              sign up
            </Link>
          </div>
          <button className={styles.buttonlogin}>let's Go</button>
        </div>
      </div>
    </div>
  );
}
