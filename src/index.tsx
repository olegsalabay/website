import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/page-home/page-home'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='login' element={<h1>Log in</h1>} />
        </Routes>
      </BrowserRouter>  
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
