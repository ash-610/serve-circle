import React from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './components/Services'
import Sales from './components/Sales'
import Inventory from './components/Inventory'
import ServicesAf from './components/after_login/sidebar_pages/ServicesAf'
import SalesAf from './components/after_login/sidebar_pages/SalesAf'
import InventoryAf from './components/after_login/sidebar_pages/InventoryAf'
import BranchesAf from './components/after_login/sidebar_pages/BranchesAf'
import Dashboard from './components/after_login/sidebar_pages/Dashboard'
import ReportsAf from './components/after_login/sidebar_pages/ReportsAf'
import Tsidebar from './components/after_login/sidebar/Tsidebar'

const App = () => {
  return (
    <>
    <BrowserRouter >
      <Routes>
          
          <Route path='/' element={<Home className='.no-scrollbar' />}/> 

          <Route path='/servicesProduct' element={<Services/>}/> 

          <Route path='/salesProduct' element={<Sales/>}/> 

          <Route path='/inventoryProduct' element={<Inventory/>}/> 

          <Route path='#contact' />

          <Route path='/services' element={<ServicesAf/>}/>

          <Route path='/sales' element={<SalesAf/>}/>

          <Route path='/inventory' element={<InventoryAf/>}/>

          <Route path='/branches' element={<BranchesAf/>}/>

          <Route path='/dashboard' element={<Dashboard/>}/>

          <Route path='/reports' element={<ReportsAf/>}/>

          <Route path='/Tsidebar' element={<Tsidebar/>}/>

      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App