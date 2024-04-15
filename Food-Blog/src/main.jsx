import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyNavbar from './pages/home/componats/navbar'
import Myheader from './pages/home/header'
import Store  from './store.js'
import { Provider } from 'react-redux'
import Footerpage from './pages/home/componats/footer/index.tsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
     {console.log(Store)} 
    <BrowserRouter>
    <MyNavbar/>
    <App />
    <Footerpage/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
