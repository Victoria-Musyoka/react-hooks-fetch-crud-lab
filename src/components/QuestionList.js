

import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDeleteQuestion}) {

  const displayQuestions = questions.map(question => (
    <QuestionItem 
      question={question}
      onDeleteQuestion={onDeleteQuestion}
    />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;