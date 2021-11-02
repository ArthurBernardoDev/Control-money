import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1>
          <a href="/">Control Money </a>
        </h1>
        <div>
          <a href="/signin">
            <button>Sign-in</button>
          </a>
          <button>Sign-out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
