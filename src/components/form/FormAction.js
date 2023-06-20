import styles from "./FormAction.module.css";

const FormAction = () => {
  return (
    <p className={styles.actions}>
      <button type="reset" className={styles.buttonAlt}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </p>
  );
};

export default FormAction;
