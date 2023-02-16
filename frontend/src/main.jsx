import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import actionCable from "actioncable";

const CableApp = {};

CableApp.cable = actionCable.createConsumer("ws://localhost:3000/cable");

ReactDOM.createRoot(document.getElementById('root')).render(
    <App cable={CableApp}/>
)
