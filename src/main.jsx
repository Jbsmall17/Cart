import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Appcontext } from './Content'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appcontext>
      <App />
    </Appcontext>
  </React.StrictMode>,
)
