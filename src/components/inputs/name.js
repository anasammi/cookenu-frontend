import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input
  } from "@chakra-ui/react";
  
  export const NameInput = ({isValid, value, onChange}) => {
    return (
      <FormControl isInvalid={!isValid}>
        <FormLabel>Nome</FormLabel>
        <Input value={value} name="name" onChange={onChange} />
        {!isValid ? (
          <FormErrorMessage>Nome deve ter ao menos 2 caracteres.</FormErrorMessage>
        ) : undefined}
      </FormControl>
    );
  };
  