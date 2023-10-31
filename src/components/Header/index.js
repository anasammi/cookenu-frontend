import { HeaderStyled } from "./styled"
import { Button} from '@chakra-ui/react'

export const Header = () => {
    return (
        <HeaderStyled>
            <Button variant="ghost" colorScheme="gray">Cookenu</Button>
            <Button variant='outline'>Login</Button>
        </HeaderStyled>
    )
}