import Header from "../../components/Header/Header";
import styles from "./SignIn.module.scss";
import React, { useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {Context} from "../../context/AuthContext";
import * as yup from "yup";
import {Input} from "../../components/input";

type FormInputs = {
  email: string
  password: string
}

const schema = yup
    .object({
      email: yup
          .string()
          .required('E-mail obrigatório')
          .email('E-mail inválido'),
      password: yup.string().required('Senha obrigatória'),
    })
    .required()

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  })
  const history = useHistory()
  const [errorLogin, SetErrorLogin] = useState(false)
  const {handleLogin} = useContext(Context)

  const handleOnSubmit = async (data: FormInputs) => {
    await handleLogin({ data })
        .then(() => history.push('/'))
        .catch(() => SetErrorLogin(true))
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={handleSubmit(handleOnSubmit)}>
          <h1>Login</h1>
          <Input
              register={register}
              name={'email'}
              placeholder={"digite seu Email"}
          />
          <p className={styles.errorLogin}>{errors.email?.message}</p>
          <Input
              register={register}
              name={'password'}
            type={"password"}
            placeholder={"Digite sua senha"}
          />
          <p className={styles.errorLogin}>{errors.password?.message}</p>
          <button className={styles.button} type="submit">
            Entrar
          </button>

          {errorLogin && <p className={styles.errorLogin} >Email ou Senha estão invalidas ou incorretas, verifique as informações e tente novamente!</p>}
        </form>
      </div>
    </>
  );
}
export default SignIn;
