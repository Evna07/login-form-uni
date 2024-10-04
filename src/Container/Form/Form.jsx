import styles from "./Form.module.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Form = () => {
  return (
    <div>
      <fieldset className={styles.fieldSet}>
        {/* <Login></Login> */}
        <Register></Register>
      </fieldset>
    </div>
  );
};

export default Form;
