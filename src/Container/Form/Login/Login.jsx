import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <h1>User Login</h1>
      <input className={styles.field} type="text" placeholder="Username" />
      <input className={styles.field} type="password" placeholder="Password" />
      <div className={styles.links}>
        <div>
          <input type="checkbox" name="remember" id="" />
          <label for="remember">remember me</label>
        </div>
        <div>
          <a href="#">Forgot password</a>
        </div>
      </div>

      <button className={styles.button}>Login</button>
      <div>
        <p>Not a member?</p>
        <button className={styles.button}>Create Account</button>
      </div>
    </div>
  );
};

export default Login;
