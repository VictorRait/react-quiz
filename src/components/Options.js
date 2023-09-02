function Options({ question, dispatch, answer }) {
    const hasAnswered = answer !== null
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: idx })}
          className= {`btn btn-option ${idx === answer ? 'answer' : ''} ${hasAnswered ? idx === question.correctOption ? 'correct' : 'wrong' : ''} `}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
