import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";

    > main{

        grid-area: content;

        width: 100%;
        max-width: 1137px;
        margin: 48px auto;

        header{
            display:flex;
            align-items:center;
            justify-content: space-between;
            margin-bottom:40px;  
        }

        h1:first-child{
                font-size: 32px;
            }
        
       
    }
`


export const Content = styled.div`
    max-width: 1137px;
    margin: 0 auto; 
    
`
export const NewMovie = styled(Link)`
    border: none;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;
    justify-content: center;

    padding:13.5px 32px;
    border-radius: 8px;
    gap: 8px;
`