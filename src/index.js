import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'app/scss/index.scss'
import { App } from 'app'

const $root = document.getElementById('root')
const root = createRoot($root)
//some code...

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
