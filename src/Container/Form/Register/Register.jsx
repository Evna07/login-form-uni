import styles from "./Register.module.scss";

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>User Registration</h1>
      <input className={styles.field} type="text" placeholder="Username" />
      <input className={styles.field} type="text" placeholder="First Name" />
      <input className={styles.field} type="text" placeholder="Last Name" />
      <input
        className={styles.field}
        type="email"
        placeholder="Email Address"
      />

      <input className={styles.field} type="password" placeholder="Password" />
      <input
        className={styles.field}
        type="password"
        placeholder="Confirm password"
      />

      <div>
        <div>
          <input type="checkbox" name="remember" id="" />
          <label for="remember">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </label>
        </div>
        <div>
          <input type="checkbox" name="remember" id="" />
          <label for="remember">
            Quam phasellus sit, tempor praesent vehicula cursus laoreet blandit!
          </label>
        </div>
        <button className={styles.button}>Create Account</button>
      </div>
    </div>
  );
};

export default Register;
