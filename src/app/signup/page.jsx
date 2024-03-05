import Link from "next/link";
import styles from "../styles/signup.module.css";

export default function SignUp() {
  return (
    <div className={styles.signup}>
      <div className={styles.signupcontainer}>
        <div className={styles.signuptitlediv}>
          <h2 className={styles.signuptitle}>join our team,</h2>
        </div>
        <input
          className={styles.inputsignup}
          type="text"
          placeholder="Enter your name"
        />
        <input
          className={styles.inputsignup}
          type="email"
          placeholder="Enter your email"
        />
        <input
          className={styles.inputsignup}
          type="password"
          placeholder="Enter your password"
        />
        <div className={styles.signuplogindiv}>
          <Link href={"/login"} className={styles.signuplogintitle}>
            join
          </Link>
        </div>
      </div>
    </div>
  );
}
