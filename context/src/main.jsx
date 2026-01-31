import MyContext from './mycontext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<MyContext.Provider value={"HI X"}>
    <App />
</MyContext.Provider>  
)
