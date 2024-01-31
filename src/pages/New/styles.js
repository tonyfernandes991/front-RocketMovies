import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";

    .tags {
        display:flex;
        flex-wrap: wrap;
    }

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  > main::-webkit-scrollbar {
    width: 8px;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
   
    
`
export const Form = styled.form`
        max-width: 1137px;
        margin: 46px auto;
                
        > header {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px; ;
        }

        > div {
            display:flex;
            flex-direction:row;
            gap:40px;
            margin-bottom:40px;
        }

        

        
        h1{
            font-size: 36px;
            margin-top:24px;
            font-weight: 500;
            
        }

        .button-styled {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
    }

        

`