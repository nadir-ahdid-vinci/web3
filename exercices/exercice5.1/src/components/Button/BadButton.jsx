import { Context as ButtonProvider } from "../../context/countersContext"
import { useContext } from "react"

const BadButton = ( {children} ) => {
    const { increaseBad }  = useContext(ButtonProvider);
    
    return (
        <>
            <button onClick={increaseBad}>
                BAD
            </button>
        </>
    )
}

export default BadButton