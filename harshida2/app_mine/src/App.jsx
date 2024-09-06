import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import State1 from './components/State1'
import { Routes, Route } from 'react-router-dom'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/state' element={<State1 />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/api' element={<Api />} />
        <Route path='/poke' element={<Pokemon/>}/>
       </Routes>
     
    </>
  )
}

export default App
