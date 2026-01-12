import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import BackToTop from './components/BackToTop'
import { navigationConfig } from './main.jsx'

const App = () => {
  return (
    <div>
      <Header navigation={navigationConfig} />
      <Outlet />
      <BackToTop />
    </div>
  )
}

export default App