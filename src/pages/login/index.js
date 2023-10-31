import { useForm } from "../../hooks";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FormContainerStyled, LoginContainerStyled } from "./styled";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import { goToSignUp } from "../../routes/coordinator";

export const LoginPage = () => {
  const { form, onChangeInputs } = useForm({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    setIsEmailValid(/[a-zA-Z0-9]+@[a-zA-Z0-9][.a-zA-Z]?/.test(form.email));
    setIsPasswordValid(/^.{6,}$/.test(form.password));
    console.log(form);
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainerStyled>
      <img src={logo} alt="logo do cookenu"/>
      <FormContainerStyled onSubmit={submitLogin}>
        <FormControl isInvalid={!isEmailValid}>
          <FormLabel>E-mail</FormLabel>
          <Input value={form.email} name="email" onChange={onChangeInputs} />
          {!isEmailValid ? (
            <FormErrorMessage>E-mail inválido.</FormErrorMessage>
          ) : undefined}
        </FormControl>
        <FormControl>
          <FormLabel>Senha</FormLabel>
          <InputGroup size="md">
            <Input
              value={form.password}
              name="password"
              onChange={onChangeInputs}
              type={showPassword ? "text" : "password"}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={onClickShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
            {!isPasswordValid ? (
              <FormErrorMessage>Senha inválida.</FormErrorMessage>
            ) : undefined}
          </InputGroup>
        </FormControl>
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
