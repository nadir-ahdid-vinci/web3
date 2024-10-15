import { Context as ButtonProvider } from "../../context/countersContext"
import { useContext } from "react"

const OkButton = ({ children }) => {
    const { increaseOk }  = useContext(ButtonProvider);
    
    return (
        <>
            <button onClick={increaseOk}>
                OK 
            </button>

        </>
    )
}

export default OkButton