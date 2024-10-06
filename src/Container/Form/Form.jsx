import { useState } from "react";
import styles from "./Form.module.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Form = () => {
  const [showLogin, setShowLogin] = useState(true); // State to toggle between forms

  return (
    <div>
      <fieldset className={styles.fieldSet}>
        {showLogin ? <Login /> : <Register />}
      </fieldset>
      {/* Buttons to toggle between login and registration */}
      <button onClick={() => setShowLogin(true)}>Go to Login</button>
      <button onClick={() => setShowLogin(false)}>Go to Register</button>
    </div>
  );
};

export default Form;
