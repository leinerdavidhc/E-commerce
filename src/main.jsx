import React from 'react'
import ReactDOM from 'react-dom/client'
import {TagContexto} from './context/ContextoE'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TagContexto>
      <h1>hola</h1>
    </TagContexto>
  </React.StrictMode>,
)
