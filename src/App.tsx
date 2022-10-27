import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Home from './components/Home/Home'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
