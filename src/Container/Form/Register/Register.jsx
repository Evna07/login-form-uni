import styles from "./Register.module.scss";
import { addUser } from "../../../data";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, firstName, lastName, email, password, confirmPassword } =
      formData;

    if (!username || !firstName || !lastName || !email || !password) {
      alert("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    addUser({
      username,
      firstName,
      lastName,
      email,
      password,
    });

    alert("Registration successful!");
  };
  return (
    <div className={styles.register}>
      <h1>User Registration</h1>
      <form className={styles.register} onSubmit={handleSubmit}>
        <input
          className={styles.field}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className={styles.field}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className={styles.field}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className={styles.field}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className={styles.field}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          className={styles.field}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
