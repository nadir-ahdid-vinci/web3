import './App.css'
import GoodButton from '../Button/GoodButton'
import OkButton from '../Button/OkButton'
import BadButton from '../Button/BadButton'
import { useContext } from 'react'
import { Context } from "../../context/countersContext"

function App() {
  const {goodCounter, badCounter, okCounter} = useContext(Context);

  return (
    <>
      <div className="card">
        <p>Good : { goodCounter }</p><GoodButton/>
        <p>Ok : { okCounter }</p><OkButton/>
        <p>Bad : { badCounter }</p><BadButton/>
      </div>
    </>
  )
}

export default App
