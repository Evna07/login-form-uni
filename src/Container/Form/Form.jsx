import { useState } from "react";
import styles from "./Form.module.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Form = () => {
  const [showLogin, setShowLogin] = useState(true); // State to toggle between forms

  return (
    <div className={styles.form}>
      <fieldset className={styles.fieldSet}>
        {showLogin ? <Login /> : <Register />}
      </fieldset>
      <div>
        <button className={styles.button} onClick={() => setShowLogin(true)}>
          Go to Login
        </button>
        <button className={styles.button} onClick={() => setShowLogin(false)}>
          Go to Register
        </button>
      </div>
    </div>
  );
};

export default Form;
