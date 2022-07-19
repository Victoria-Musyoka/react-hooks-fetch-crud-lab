import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  // const currentQuestions = questions

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
    .then(response => response.json())
    .then(data => {
      setQuestions(data)})
  }, [setQuestions])


  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(qID){
    // const filteredQuestions = questions.filter(question => {
    //   return question.id !== qID
    //  })

    fetch(`http://localhost:4000/questions/${qID}`, {
    method: 'DELETE'
    })
    .then((r) => r.json())
    .then(() => {const filteredQuestions = questions.filter(question => question.id !== qID)
     setQuestions([...filteredQuestions])}
     )
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onQuestionAdd={handleAddQuestion}/> : 
      <QuestionList  questions={questions} onDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
