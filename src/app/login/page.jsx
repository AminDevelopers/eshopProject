/* eslint-disable react/no-unescaped-entities */
"use client";
import { disconnect, logIn } from "@/lib/features/authSlice";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/login.module.css";

export default function Login() {
  const { userLogged, isLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const name = useRef();
  const password = useRef();

  useEffect(() => {
    localStorage.setItem("isLogged", JSON.stringify(isLogged));
    localStorage.setItem("useLogged", userLogged);
  }, [isLogged, userLogged]);

  const handleLogin = () => {
    const user = {
      username: name.current.value,
      password: password.current.value,
    };
    dispatch(logIn(user));
    name.current.value = "";
    password.current.value = "";
  };

  const handleDisconnect = () => {
    dispatch(disconnect());
  };

  return (
    <div className={styles.login}>
      <div className={styles.logincontainer}>
        {isLogged ? (
          <></>
        ) : (
          <h2 className={styles.logintitle}>Welcome Guest, </h2>
        )}
        {isLogged ? (
          <></>
        ) : (
          <>
            <input
              ref={name}
              maxLength={10}
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
              maxLength={20}
              placeholder="Enter your password"
            />
          </>
        )}
        <div className={styles.buttonlogindiv}>
          {isLogged ? (
            <div className={styles.signupdiv}>
              <p>
                You're connected as
                <span
                  style={{
                    marginLeft: ".5em",
                    color: "hsl(151, 75%, 58%)",
                    textTransform: "capitalize",
                  }}
                >
                  {userLogged}
                </span>
              </p>
            </div>
          ) : (
            <div className={styles.signupdiv}>
              <p>don't have an account ? </p>
              <Link className={styles.linksignup} href={"/signup"}>
                sign up
              </Link>
            </div>
          )}
          {isLogged ? (
            <button onClick={handleDisconnect} className={styles.buttonlogin}>
              disconnect
            </button>
          ) : (
            <button onClick={handleLogin} className={styles.buttonlogin}>
              connect
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
