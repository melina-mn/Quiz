import React, { useState } from 'react';
import './Components/Quiz/Quiz.css';
import { data } from './assets/data';

const Quiz = () => {
  let [index, setIndex] = useState(0); 

  let [question, setQuestion] = useState(data[index]);

  const checkAns = (e, ans) => {
    if (question.ans === ans) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("wrong");
    }
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <div className='box'>
        <ul>
          <li onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
          <li onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
        </ul>
        <ul>
          <li onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
          <li onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
        </ul>
      </div>
      <button>Next</button>
      <div className='index'>1 of 3</div>
    </div>
  );
};

export default Quiz;