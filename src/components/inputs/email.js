import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from "@chakra-ui/react";

export const EmailInput = ({isValid, value, onChange}) => {
  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>E-mail</FormLabel>
      <Input value={value} name="email" onChange={onChange} />
      {!isValid ? (
        <FormErrorMessage>E-mail inválido.</FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
