import styles from "./Container.module.scss";
import Form from "./Form/Form";

const Container = () => {
  return (
    <div className={styles.container}>
      <h2>User Login</h2>
      <Form></Form>

      <button className={styles.button}>Login</button>
      <div>
        <input type="checkbox" name="remember" id="" />
        <label for="remember">remember me</label>
      </div>
      <div>
        <a href="#">Forgot password</a>
      </div>
      <div>
        <p>Not a member?</p>
        <button className={styles.button}>Create Account</button>
      </div>
    </div>
  );
};

export default Container;
