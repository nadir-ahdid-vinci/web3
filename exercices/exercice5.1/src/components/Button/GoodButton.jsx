import { Context as ButtonProvider } from "../../context/countersContext"
import { useContext } from "react"

const GoodButton = ({ children }) => {
    const { increaseGood }  = useContext(ButtonProvider);
    
    return (
        <>
            <button onClick={increaseGood}>
                Good 
            </button>

        </>
    )
}

export default GoodButton