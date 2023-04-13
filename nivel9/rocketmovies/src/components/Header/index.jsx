import { Container, Profile, Search} from "./styles";

import { FiSearch } from 'react-icons/fi';
import { Input } from '../Input';

export function Header(){

  return(
    <Container>
        <h1>RocketMovies</h1>
    
  
    <Search>

      <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
    </Search>

    <Profile>
      <div>
        <strong>Susana Leal</strong>
        <button> sair </button>
       </div>

      <img src="https://github.com/susileal.png"
        alt="foto do usuário"
       />

    
    </Profile>

    


    </Container>
  )

}