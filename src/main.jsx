import React from 'react'
import ReactDOM from 'react-dom/client'
import {TagContexto} from './context/ContextoE'
import Div from './div'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TagContexto>
      <Div/>
    </TagContexto>
  </React.StrictMode>,
)
