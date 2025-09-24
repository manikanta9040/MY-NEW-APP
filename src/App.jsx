import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TreatmentList from './Treatment list'
import HighestRated from './TreatmentCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TreatmentList/>
    <HighestRated/>
    </>
  )
}

export default App
