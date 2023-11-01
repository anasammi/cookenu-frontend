import { useForm } from "../../hooks";
import {
  Button
} from "@chakra-ui/react";
import {
  FormContainerStyled,
  PageContainerStyled as LoginContainerStyled,
} from "../../components/styled-containers";
import { useState } from "react";

import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { goToSignUp } from "../../routes/coordinator";
import { EmailInput } from "../../components";
import { PasswordInput } from "../../components/inputs/password";
import { validateEmail, validatePassword } from "../../constants";

export const LoginPage = () => {
  const { form, onChangeInputs } = useForm({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    console.log(form);
  };

  return (
    <LoginContainerStyled>
      <img src={logo} alt="logo do cookenu" />
      <FormContainerStyled onSubmit={submitLogin}>
        <EmailInput
          value={form.email}
          onChange={onChangeInputs}
          isValid={isEmailValid}
        />
        <PasswordInput
            value={form.password}
            onChange={onChangeInputs}
            isValid={isPasswordValid}
        />
        <Button type="submit" variant="formMain">
          Entrar
        </Button>
        <Button variant="formSecondary" onClick={() => goToSignUp(navigate)}>
          Ainda não tenho cadastro
        </Button>
      </FormContainerStyled>
    </LoginContainerStyled>
  );
};
