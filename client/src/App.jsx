import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'

export default function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard  />} />
      <Route path="/projects" element={<Projects  />} />
    </Routes>
    </BrowserRouter>
  )
}
