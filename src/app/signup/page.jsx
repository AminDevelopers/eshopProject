"use client";
import {
  inscription,
  setPassword,
  setUsername,
} from "@/lib/features/authSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/signup.module.css";

export default function SignUp() {
  const { username, password } = useSelector((state) => state.auth.form);
  const dispatch = useDispatch();

  const handleUserChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePassChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSignUp = () => {
    dispatch(inscription({ username, password }));
    dispatch(setUsername(""));
    dispatch(setPassword(""));
  };

  return (
    <div className={styles.signup}>
      <div className={styles.signupcontainer}>
        <div className={styles.signuptitlediv}>
          <h2 className={styles.signuptitle}>join our team,</h2>
        </div>
        <input
          value={username}
          onChange={handleUserChange}
          className={styles.inputsignup}
          id={styles.inputsignupone}
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={password}
          onChange={handlePassChange}
          id={styles.inputsignupthree}
          className={styles.inputsignup}
          type="password"
          placeholder="Enter your password"
        />
        <div className={styles.signuplogindiv}>
          <Link
            onClick={handleSignUp}
            href={"/login"}
            className={styles.signuplogintitle}
          >
            join
          </Link>
        </div>
      </div>
    </div>
  );
}
