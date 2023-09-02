function FinishScreen({ points, maxPossiblePoints, highscore,dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage <= 10) emoji = "👻";
  if (percentage >= 11) emoji = "😨";
  if (percentage >= 30) emoji = "😐";
  if (percentage >= 51) emoji = "🤔";
  if (percentage >= 70) emoji = "😅";
  if (percentage >= 80) emoji = "😎";
  if (percentage >= 100) emoji = "🎓";
  return (
    <>
   
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%){emoji === "🎓" ? "🎉" : ""}
      </p>
      <p className="highscore">
            (Highscore: {highscore})
      </p>
      <button onClick={()=> dispatch({type: 'reset'})} className="btn btn-ui">Restart Quiz</button>
    </>
  );
}

export default FinishScreen;
