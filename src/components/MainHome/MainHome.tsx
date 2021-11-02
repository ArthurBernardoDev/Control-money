import styles from "./MainHome.module.scss";
import Avatar from "../../assets/avatar.svg";

const HomePage: React.FC = () => {
  return (
    <>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, Seja Bem Vindo</span>
          <h1>
            A Melhor forma de <span>Controlar</span> seu dinheiro.
          </h1>
          <p>
            Quer mudar a forma de lidar com seu dinheiro?
            <br />
            <span>acesse a plataforma agora!</span>
          </p>
        </section>
        <img src={Avatar} alt="" />
      </main>
    </>
  );
};
export default HomePage;
