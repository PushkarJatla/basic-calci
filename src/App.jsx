import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calci from './components/Calci'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calci/>
    </>
  )
}

export default App
