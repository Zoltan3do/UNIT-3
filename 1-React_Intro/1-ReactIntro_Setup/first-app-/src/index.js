import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App' // qui è come se importassimo './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// la riga 6 crea sulla base di un div vuoto (con id di "root") un "ELEMENTO RADICE"
// la riga 7 utilizza questa radice per montare nella pagina il componente
// React che si chiama App
