import React, { useState } from "react";

const Context = React.createContext(0)

const ProviderWrapper = (props) => {
    const [nbClicks, setNbClicks] = useState({
        good : 0, ok : 0, bad : 0
    });

    const increaseGood = () {
        setNbClicks(...nbClicks, good = good+1)
    }

    const increaseOk = () {
        setNbClicks(...nbClicks, ok = ok+1)
    }

    const increaseBad = () {
        setNbClicks(...nbClicks, bad = bad+1)
    }

    const resetAll = () {
        setNbClicks(good = 0, bad = 0, ok = 0)
    }

    const exposedValue = {
        nbClicks,
        increaseBad,
        increaseGood,
        increaseOk,
        resetAll
    }

    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider> 

}

export default providerWrapper