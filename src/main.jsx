import React from 'react'
import ReactDOM from 'react-dom/client'
import {TagContexto} from './context/ContextoE'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TagContexto>
      <div className='bg-red-400 h-24 w-24'>v2</div>
    </TagContexto>
  </React.StrictMode>,
)
