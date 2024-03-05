/* eslint-disable react/no-unescaped-entities */
"use client";
import { logIn } from "@/lib/features/authSlice";
import Link from "next/link";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/login.module.css";

export default function Login() {
  const { userLogged, isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const name = useRef();
  const password = useRef();

  const handleLogin = () => {
    const user = {
      username: name.current.value,
      password: password.current.value,
    };
    dispatch(logIn(user));
    name.current.value = "";
    password.current.value = "";
  };

  return (
    <div className={styles.login}>
      <div className={styles.logincontainer}>
        {isLogged ? (
          <h2 className={styles.logintitle}>Welcome {userLogged}, </h2>
        ) : (
          <h2 className={styles.logintitle}>Welcome Guest, </h2>
        )}
        <input
          ref={name}
          className={styles.inputlogin}
          id={styles.inputone}
          type="text"
          placeholder="Enter your username"
        />
        <input
          ref={password}
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
          <button onClick={handleLogin} className={styles.buttonlogin}>
            let's Go
          </button>
        </div>
      </div>
    </div>
  );
}
