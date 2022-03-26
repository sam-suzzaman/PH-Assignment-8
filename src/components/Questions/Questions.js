import React, { useState } from "react";
import './questions.css';
import QuestionAndAnswers from "../../utilities/Q&A";
import SingleQuestion from "./SingleQuestion/SingleQuestion";

const Questions=()=>{
    const[qstAndAns,setQstAndAns]=useState(QuestionAndAnswers);
    return(
        <div>
            {
                qstAndAns.map(value=>{
                    return(
                        <SingleQuestion questionData={value}/>
                    )
                })
            }
        </div>
    )
}

export default Questions;