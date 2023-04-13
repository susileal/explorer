import { Container } from "./styles";

import { AiOutlineStar, AiTwotoneStar} from 'react-icons/ai';




export function ButtonStar({ title, isActive = false, ...rest}) {

  return (
    <Container 
      type="button"
      {...rest}
      isActive={isActive}
    >
        <AiTwotoneStar class="star"/>
        <AiTwotoneStar class="star"/>
        <AiTwotoneStar class="star"/>
        <AiTwotoneStar class="star"/>
        <AiOutlineStar class="star"/>
    
     
       
       
    </Container>
  );
}