import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/page-home/page-home'
import Login from './pages/page-login/page-login'
import Register from './pages/page-register/page-register'
import DefaultLayout from './layouts/ DefaultLayout'
import ProtectedLayout from './layouts/ProtectedLayout'
import PageMain from './pages/page-main'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main' element={<PageMain />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App