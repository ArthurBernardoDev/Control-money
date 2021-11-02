import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1>Control Money</h1>
        <div>
          <button>Sign-in</button>
          <button>Sign-out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
