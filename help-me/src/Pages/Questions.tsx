// src/pages/Questions.tsx
import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import Question from "../types/Question";

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Fetch questions from the backend
    fetch("http://localhost:8080/home/questions/all")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-gray-800">Questions</h1>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </section>
    </div>
  );
};

export default Questions;
