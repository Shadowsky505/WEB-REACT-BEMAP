import React from 'react'
import ReactDOM from 'react-dom/client'
import {CompHeader} from './Componentes/header'
import {Modulo1, Modulo2, Modulo3} from './Componentes/Modulos'
import {FooterBEMAP} from './Componentes/Footer.jsx'
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CompHeader />
    <Modulo1 />
    <Modulo2 />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('mapa-Slide')).render(
  <React.StrictMode>
    <Modulo3 />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <FooterBEMAP/>
  </React.StrictMode>,
)