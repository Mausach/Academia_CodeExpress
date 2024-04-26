import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../paginas/Login/Login'
import { Admin } from '../paginas/Admin/Admin'
import { Home_Alu_Profe } from '../paginas/Home_Alu_Profe/Home_Alu_Profe'



export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
  
        <Route path="/*" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/home" element={<Home_Alu_Profe/>} />
        

          
          
          
  
        </Routes>
      </BrowserRouter>
    )
  }