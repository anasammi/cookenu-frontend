import { useForm } from "../../hooks";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FormContainerStyled, LoginContainerStyled } from "./styled";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../assets/logo.png"

export const LoginPage = () => {
  const { form, onChangeInputs } = useForm({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

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
        <Image src={logo}/>
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
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </Button>
            </InputRightElement>
            {!isPasswordValid ? (
              <FormErrorMessage>Senha inválida.</FormErrorMessage>
            ) : undefined}
          </InputGroup>
        </FormControl>
        <Button type="submit" variant="form">
          Login
        </Button>
        <button>Ainda não tenho cadastro</button>
      </FormContainerStyled>
    </LoginContainerStyled>
  );
};
