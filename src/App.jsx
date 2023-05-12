
import './App.css'
import Home from './components/Home'
import Who from "./components/Who"
import What from "./components/What"
import Client from "./components/Client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/who' element={<Who />} />
          <Route path='/what' element={<What />} />
          <Route path="/client" element={<Client />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />

      </BrowserRouter>


    </>
  )
}

export default App
