import styled from "styled-components"
import { Link } from "react-router-dom";
export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width:1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    
    justify-content: space-between;

    padding: 24px 124px;

    position: relative;

`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

// export const Search = styled.div`
//  width:100%;
//  display:flex;
//  align-items:center;
//  justify-content:center;
// padding:64px;
 
// `

export const Search = styled.div`
  display: flex;
  align-items: center;
  align-self:center;
  border-radius: 10px;
  background: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};
  flex-grow: 1;
  margin: 0 64px;
  height:63px;
  padding: 19px 24px;
  border:none;
  
`

export const Profile = styled(Link)`
  display: flex;
  
  /* align-items: center; */

  > img {
    width:64px;
    height:64px;
    border-radius:50%;
  }

  > div {
    display:flex;
    
    flex-direction:column;
    align-items:flex-end;
    margin-right:9px;

    span{
    font-size: 18px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.WHITE}
    }

  }

`;

export const Logout = styled.button`  
    background:none;
    border:none;
    font-size:14px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    
    position: absolute;
    bottom: 38px;
    right: 196px;
    `;
