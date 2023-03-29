import React from 'react'
import ReactDOM from 'react-dom/client'

// ThemeProvider vai prover um tema
import { ThemeProvider } from "styled-components";

import theme from './styles/theme';
import GlobalStyles from "./styles/global"

// por padrão quando não diz qual é o arquivo que vai ser carregado, carrega o index
import { Create } from './pages/Create'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Create />

    </ThemeProvider>
  </React.StrictMode>,
)
