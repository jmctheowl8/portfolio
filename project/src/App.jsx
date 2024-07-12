import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './commponents/Layout'
import Home from './commponents/Home'
import Sidebar from './commponents/Sidebar'

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />} />
      <Sidebar />
       <Route index element={<Home />} />
     </Routes>
    </>
  )
}

export default App
