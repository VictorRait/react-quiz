import { useEffect } from "react"

function Timer({dispatch, secondsRemaining}) {
    let minutes = Math.floor(secondsRemaining / 60)
    let seconds = secondsRemaining % 60
    useEffect(function(){
        const id = setInterval(() => dispatch({type:'tick'}), 1000)

        return () => clearInterval(id)
        }, [dispatch])
    return (
        <div className="timer">
    
            {`${minutes}:${seconds.toString().padStart(2, '0')} ` }
        </div>
    )
}

export default Timer
