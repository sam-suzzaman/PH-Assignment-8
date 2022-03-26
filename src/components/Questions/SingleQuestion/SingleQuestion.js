import React from "react";
import './singleQuestion.css';

const SingleQuestion=({questionData})=>{
    const{id,question,answer}=questionData;
    return(
        <div className="question">
            <h2><span>{id}. </span>{question}</h2>
            <p>{answer}</p>
        </div>
    )
}

export default SingleQuestion;