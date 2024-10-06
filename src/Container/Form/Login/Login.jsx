import styles from "./Login.module.scss";
import { useState } from "react";
import { findUser } from "../../../data";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    const user = findUser(email, password);
    if (user) {
      navigate("/logged");
    } else {
      alert("No such account found.");
    }
  };

  return (
    <div className={styles.login}>
      <h1>User Login</h1>
      <form className={styles.login} onSubmit={handleSubmit}>
        <input
          className={styles.field}
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          className={styles.field}
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
