import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './Pages/HomePage'
import MsgPage from './Pages/MsgPage'
import NotFoundPage from './NotFoundPage'
function App() {
 return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/:name' element={<MsgPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
</Routes>
    </>
  )
}

export default App
