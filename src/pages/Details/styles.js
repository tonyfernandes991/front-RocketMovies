import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    width: 100%;
    max-width: 1113px;
    margin: 40px auto;

    header {
      display: flex;
      flex-direction: column;

      margin-bottom: 40px;

      .button-voltar{
        margin-bottom:24px;
      }
      > button {
        background: none;
        border: none;
        margin-bottom:24px;
        
      }

      div {
        display: flex;
        align-items: center;
      }

      .movie-info {
        gap: 8px;
        margin-top: 24px;

        p:nth-child(1),
        
        div {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }

        svg {
          color: ${({ theme }) => theme.COLORS.PINK};
        }
      }

      h1 {
        font-weight: 500;
        font-size: 36px;
        margin-right: 19px;
      }
    }

    > p {
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-top: 40px;
      max-width: calc(100% - 0.8rem);

      line-height: 21px;
    }

    button {
      
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};

      width: calc(50% - 20px);
      margin-top: 40px;
    }

    .ButtonRemove{
        display:flex;
        align-items:center;
        justify-content:center;
    }
  }

  > main::-webkit-scrollbar {
    width: 0.8rem;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;