import styled from "styled-components";

// display: grid - usa para dizer aonde cada parte do louyt vai se encaixar
// grid-template-areas - para nomear as regiões
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
    overflow-y: scroll; 
    padding: 64px 0;
  }

  

 
 
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
  
  >span{
      margin: 8px;
      font-size: 16px;
  }
    
    >svg{
      color: ${({theme}) => theme.COLORS.PINK};
      font-size: 16px;
    }
   

`;



export const Content = styled.div`
  max-width: 580px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  >p{
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: justify;
    margin-top: 40px;

  }

  > a{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    
    
  }

  > svg{
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;
      margin-right: 8px;

    }


`;








