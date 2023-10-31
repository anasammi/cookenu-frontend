import { useNavigate } from "react-router";
import { HeaderStyled } from "./styled";
import { Button } from "@chakra-ui/react";
import { goToLogin } from "../../routes/coordinator";

export const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderStyled>
      <Button variant="header" onClick={() => goToLogin(navigate)}>Cookenu</Button>
      <Button variant="header">Login</Button>
    </HeaderStyled>
  );
};
