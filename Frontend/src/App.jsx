import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './assets/pages/Home'
import Error from './assets/pages/Error'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Error/>} path='*' />
      <Route element={<Home/>} path='/' />
      {/* <Route element={} path='' /> */}
    </Routes>
    </BrowserRouter>
    
  )
}

export default App