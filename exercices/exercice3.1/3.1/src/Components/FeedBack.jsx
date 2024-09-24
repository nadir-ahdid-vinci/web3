import React from "react";
import { useState } from "react";

const FeedBack = () => {
    const [clicks, setClicks] = useState({
        good : 0, neutral : 0, bad : 0, total : 0
    })

    const handleGoodClick = () => {
        setClicks({...clicks, good : clicks.good + 1, total : clicks.total + 1})
    }

    const handleNeutralClick = () => {
        setClicks({ ...clicks, neutral : clicks.neutral + 1, total : clicks.total + 1})
    }

    
    const handleBadClick = () => {
        setClicks({ ...clicks, bad : clicks.bad + 1, total : clicks.total + 1})
    }

    const average = () => {
        const good = (clicks.good*1)
        const bad = (clicks.bad*-1)

        const average = (good + bad) / 3

        return average
    }

    const positif = () => {
        const good = clicks.good
        const total = (good / clicks.total) * 100
        return total
    }

    if(clicks.good > 0 || clicks.bad > 0 || clicks.neutral > 0) {
        return (
            <>
            <div>
                <button onClick={(handleGoodClick)}>
                    Good
                </button>
                <button onClick={(handleNeutralClick)}>
                    Neutral
                </button>
                <button onClick={(handleBadClick)}>
                    bad
                </button>
            </div>
            <div>
                <h3>Statistics</h3>
                <p>Good : {clicks.good}</p>
                <p>Neutral : {clicks.neutral}</p>
                <p>Bad : {clicks.bad}</p>
                <p>Total : {clicks.total}</p>
                <p>Average : {average()}</p>
                <p>Positif : {positif()}</p>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div>
                <button onClick={(handleGoodClick)}>
                    Good
                </button>
                <button onClick={(handleNeutralClick)}>
                    Neutral
                </button>
                <button onClick={(handleBadClick)}>
                    bad
                </button>
            </div>
            <div>
                <p>Appuies sur un bouton sale zeub</p>
            </div>
            </>
        ) 
    }
}

export default FeedBack