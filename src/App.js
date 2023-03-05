import React from "react";
import Imagem from "./assets/pessoas.svg" //04
import Seta from "./assets/seta.svg"

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  return (
    <Container>
      <Image alt="logo-pessoas" src={Imagem}/>
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="seta-foto" src={Seta} /> </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
