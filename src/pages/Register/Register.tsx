import Header from "../../components/Header/Header";
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer}>
          <h1>Crie sua conta</h1>
          <input type={"name"} name={"name"} placeholder={"Digite seu Nome"} />
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

export default Register;
