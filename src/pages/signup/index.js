import { useForm } from "../../hooks";
import {
  Button
} from "@chakra-ui/react";
import {
  FormContainerStyled,
  PageContainerStyled as SignupContainerStyled,
} from "../../components/styled-containers";
import { useState } from "react";

import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { goToLogin, goToSignUp } from "../../routes/coordinator";
import { EmailInput } from "../../components";
import { PasswordInput } from "../../components/inputs/password";
import { validateEmail, validateName, validatePassword} from "../../constants";
import { NameInput } from "../../components/inputs/name";

export const SignUpPage = () => {
  const { form, onChangeInputs } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true)

  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.password));
    setIsNameValid(validateName(form.name))
    console.log(form);
  };

  return (
    <SignupContainerStyled>
      <img src={logo} alt="logo do cookenu" />
      <FormContainerStyled onSubmit={submitLogin}>
        <NameInput
            value={form.name}
            onChange={onChangeInputs}
            isValid={isNameValid}
        />
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
          Cadastrar
        </Button>
        <Button variant="formSecondary" onClick={() => goToLogin(navigate)}>
          Já tenho cadastro.
        </Button>
      </FormContainerStyled>
    </SignupContainerStyled>
  );
};
