import styles from "./burgerMenuButton.module.scss";

interface Props {
  isMenuOpen: boolean;
  handleToggle: () => void;
}

const BurgerMenuButton = ({ isMenuOpen, handleToggle }: Props) => {
  return (
    <div
      className={`${styles.btn}  ${
        isMenuOpen ? styles.active : styles["not-active"]
      }`}
      onClick={handleToggle}
    >
      <span className={styles["horizontal-line"]}></span>
      <span className={styles["horizontal-line"]}></span>
      <span className={styles["horizontal-line"]}></span>
    </div>
  );
};

export default BurgerMenuButton;
