import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  margin-right: 8px;

  width: 121px;
  height: 30px;


  color: ${({theme}) => theme.COLORS.WHITE_100};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
`;