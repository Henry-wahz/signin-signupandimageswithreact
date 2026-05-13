import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// import CheckBox from './Checkbox.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <CheckBox /> */}
  </StrictMode>,
)
