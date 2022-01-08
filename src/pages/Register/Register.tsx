import Header from "../../components/Header/Header";
import styles from "./Register.module.scss";
import api from "../../api/api";
import {ChangeEvent, useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import {useHistory} from "react-router-dom";


type responseData ={
  name: string
}

const Register = () => {
  const history = useHistory()
  const [resNameUser, setResNameUser] = useState('')
  console.log(resNameUser)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const [errorLogin, setErrorLogin] = useState(false)
  const [isValidName, setIsValidName] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)

  const [disabelSubmitButton, setDisableSubmitButton] = useState(true)

  const handleRegisterSubmit = (e:ChangeEvent<HTMLFormElement>) => {
e.preventDefault()

   api.post('users', {name, email, password})
       .then((res:AxiosResponse<responseData>) => setResNameUser(res.data.name))
       .then(() => history.push('/signin'))
       .catch(() => setErrorLogin(true))
  }
  const verifyNameInput = () => {
    if(name === '') {
      setIsValidName(true)
    } else {
      setIsValidName(false)
    }
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
  useEffect(() => {
    if(name === '' && email === '' && password === ''){
      setDisableSubmitButton(false)
    } else {
      setDisableSubmitButton(true)
    }
  }, [name, email, password])
  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleRegisterSubmit}>
          <h1>Vamos criar a sua conta! 😄</h1>
          <input
              type={"name"}
              name={"name"}
              placeholder={"Digite seu nome"}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => (verifyNameInput())}
          />
          {isValidName &&<p className={styles.errorLogin}> O seu nome é uma informação obrigatoria</p>}
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

          {disabelSubmitButton ? (
                  <button className={styles.button} type="submit">
                    Registrar
                  </button>

          ) : (
              <button className={styles.disabledButton} disabled>
                Registrar
              </button>
          )
            }
        </form>
      </div>
    </>
  );
};

export default Register;
