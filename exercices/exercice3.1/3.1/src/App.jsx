import { useState } from 'react'
import FeedBack from './Components/FeedBack'
import Loading from './Components/Loading'
import './App.css'

function App() {
  const [time, setTime] = useState(true)
  setTimeout(() => setTime(false), 3000)
  if (time) return <Loading/>
  return (
    <>
      <FeedBack/>
    </>
  )
}

export default App
