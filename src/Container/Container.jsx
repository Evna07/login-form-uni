import styles from "./Container.module.scss";
import Form from "./Form/Form";

const Container = () => {
  return (
    <div className={styles.container}>
      <Form></Form>
    </div>
  );
};

export default Container;
