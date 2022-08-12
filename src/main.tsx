import {StrictMode} from 'react'

import ReactDOM from 'react-dom/client'

import HomePage from './pages/HomePage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
)
