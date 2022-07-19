import React from "react";

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


  function handleAnswerChange(index) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({correctIndex: index})
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select 
          onChange={(e) => handleAnswerChange(e.target.value)}
          defaultValue={correctIndex}>
          {options}
        </select>
      </label>
      <button onClick={(e) => onDeleteQuestion(e.target.value)} value={id}>
        Delete Question
      </button>
    </li>
  );
}

export default QuestionItem;