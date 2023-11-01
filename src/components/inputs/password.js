import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const PasswordInput = ({ isValid, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Senha</FormLabel>
      <InputGroup size="md">
        <Input
          value={value}
          name="password"
          onChange={onChange}
          type={showPassword ? "text" : "password"}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={onClickShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!isValid ? (
        <FormErrorMessage>A senha deve conter ao menos 6 caracteres.</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
