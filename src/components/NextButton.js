function NextButton({dispatch, answer, numQuestions, index}) {
    const hasAnswered = answer !== null
    const finished = index + 1 >= numQuestions
    
    return (
        <div>
            {
           hasAnswered && !finished && <button onClick={() => dispatch({type:'nextQuestion'})} className="btn btn-ui">
            Next
        </button> }
        {
            finished && <button onClick={() => dispatch({type:'finished'})} className="btn btn-ui">
            Finish
        </button>
        }
        
        </div>
    
    )
}

export default NextButton
