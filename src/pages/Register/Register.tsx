import Header from "../../components/Header/Header";
import styles from "./Register.module.scss";
import api from "../../api/api";
import {ChangeEvent, useState} from "react";
import {AxiosResponse} from "axios";
import {useHistory} from "react-router-dom";


type responseData ={
  id: string
}

const Register = () => {
  const history = useHistory()
  const [resIdUser, setResIdUser] = useState('')
  console.log(resIdUser)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorLogin, setErrorLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)

  const handleRegisterSubmit = (e:ChangeEvent<HTMLFormElement>) => {
e.preventDefault()
    setIsLoading(true)
   api.post('users', {email, password})
       .then((res:AxiosResponse<responseData>) => setResIdUser(res.data.id))
       .then(() => history.push('/signin'))
       .catch(() => setErrorLogin(true))
       .then( () => setIsLoading(false))
  }

  const verifyEmailInput = () => {
    if(email === '') {
      setIsValidEmail(true)
    } else {
      setIsValidEmail(false)
    }
  }
  const verifyPasswordInput = () => {
    if(password === '') {
      setIsValidPassword(true)
    } else {
      setIsValidPassword(false)
    }
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleRegisterSubmit}>
          <h1>Crie sua conta</h1>
          <input
            type={"email"}
            name={"email"}
            placeholder={"Digite seu email"}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => verifyEmailInput()}
          />
          {isValidEmail &&  <p className={styles.errorLogin}> O Email é uma informação obrigatoria</p>}
          {errorLogin &&
              <p className={styles.errorLogin}>
                Email informado já existe
              </p>}


          <input
            type={"password"}
            placeholder={"Digite sua senha"}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => verifyPasswordInput()}
          />
          {isValidPassword && <p className={styles.errorLogin}> A Senha é uma informação obrigatoria</p>}

          {isLoading ? (
              <button className={styles.button} type="submit">
                Carregando...
              </button>
          ) : (
              <button className={styles.button} type="submit">
                Entrar
              </button>
          )}


        </form>
      </div>
    </>
  );
};

export default Register;
