import styled from "styled-components";
import {theme} from "../../styles"

export const HeaderStyled = styled.header`
    height: 10vh;
    width: 100vw;
    background-color: ${theme.colors.laranja["400"]};
    display: flex;
    justify-content: space-between;
    color: "#4b4b4b";
    align-items: center;
    padding: 0 10px;
`