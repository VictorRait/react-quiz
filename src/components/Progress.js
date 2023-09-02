function Progress({index, numQuestions, points, maxPossiblePoints, answer}) {
 
    return (
        <header className="progress">
            <progress max={15} value={index + Number(answer !== null)} />
            <p>Question {index + 1}/{numQuestions}</p>
            <p>{points} / {maxPossiblePoints} points</p>
        </header>
    )
}

export default Progress
