import { useContext } from "react"
import { Context as ButtonProvider } from "../../context/countersContext"


const ResetButton = () => {
    const { resetAll } = useContext(ButtonProvider)

    return (
        <>
            <button onClick={resetAll}>
                RESET
            </button>
        </>
    )
}

export default ResetButton