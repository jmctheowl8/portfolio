import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './commponents/Layout'
import Home from './commponents/Home' 
import About from './commponents/About'
import Contact from './commponents/contact'
import Skills from './commponents/Skills'


function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="skills" element={<Skills />}/>
        </Route>
     </Routes>
    </>
  )
}

export default App
