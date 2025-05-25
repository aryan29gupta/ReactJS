import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

const google = (
    <a href = "https://google.com" target = '_blank'>Welcome to Google</a>
)

createRoot(document.getElementById('root')).render(
     
    <App />
)