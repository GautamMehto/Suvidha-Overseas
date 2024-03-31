import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import AboutUs from './Components/AboutUs.jsx'
import ServicePage from './Components/ServicePage.jsx'
import Exam from './Components/Exam.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Country from './Components/Country.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='Suvidha-Overseas' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='services' element={<ServicePage />} />
      <Route path='exam' element={<Exam />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='get-in-touch' element={<ContactUs />} />
      <Route path='country/:countryName' element={<Country />} />
      <Route path='home/services' element={<ServicePage />} />
      <Route path='home/contact' element={<ContactUs />} />
      <Route path='home/country/:countryName' element={<Country />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
