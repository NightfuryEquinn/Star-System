import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './style/index.css'
import Content from './components/ui/Content'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Content />
  </React.StrictMode>
)
