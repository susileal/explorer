import { FiArrowLeft} from 'react-icons/fi';

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

import { Container, Form} from "./styles";

export function Create() {
  return (
    <Container>
      <Header/>
  
    <main>
      <Form>

        <header>
        <a to='/'>
        <FiArrowLeft/> Voltar
        </a>
        
        <h1> Novo filme </h1>

        </header>
        
         
        
      <div>
      <Input placeholder="Título"/>
      <Input placeholder="Sua nota (de 0 a 5)"/>
      </div>

      <Textarea placeholder="Observações"/>

      <Section title="Marcadores" isActive>
        <div className="tags">
          <NoteItem value="react"/>
          <NoteItem isNew placeholder="Nova marcador"/>
        </div>
      </Section>

      <div class="button">
        <Button title="Exibir Filme" />
        <Button title="Salvar alterações" isActive/>

      </div>


      </Form>
    </main>
    </Container>
  )
}