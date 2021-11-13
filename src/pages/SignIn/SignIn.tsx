import Header from "../../components/Header/Header";
import styles from "./SignIn.module.scss";
import React, {ChangeEvent, useState} from "react";
import api from "../../api/api";

type SignInProps = {
  email: string
  password: string
}

const SignIn: React.FC = () => {

  const [state, setState] = useState<SignInProps>({
    email: '', password: ''
  })

  const updateLoginData = (e: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      })
  }

  const HandleOnSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(state)
    const response = await api.post('login', {
      headers: {

      },
    body: {state},
    })
    console.log(response)
  }





  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={HandleOnSubmit}>
          <h1>Faça Login</h1>
          <input
            type={"email"}
            name={"email"}
            onChange={(e:ChangeEvent<HTMLInputElement>) => updateLoginData(e)}
            placeholder={"Digite seu email"}
          />
          <input
            type={"password"}
            name={"password"}
            onChange={(e:ChangeEvent<HTMLInputElement>) => updateLoginData(e)}
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
