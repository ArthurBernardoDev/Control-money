import Header from "../Header/Header";
import styles from "./SignIn.module.scss";
const SignIn = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <h1>Faça Login</h1>
          <input
            type={"email"}
            name={"email"}
            placeholder={"Digite seu email"}
          />
          <input
            type={"password"}
            name={"password"}
            placeholder={"Digite sua senha"}
          />
          <button className={styles.button} type="submit">
            Entrar
          </button>
        </form>
      </div>
    </>
  );
};
export default SignIn;
