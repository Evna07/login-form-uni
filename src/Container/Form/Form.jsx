import styles from "./Form.module.scss";

const Form = () => {
  return (
    <div>
      <fieldset className={styles.fieldSet}>
        <input className={styles.field} type="text" placeholder="Username" />
        <input
          className={styles.field}
          type="password"
          placeholder="Password"
        />
      </fieldset>
    </div>
  );
};

export default Form;
