import { Icon } from "@iconify/react";
import Question from "../types/Question";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

export default function QuestionCard({ question }: { question: Question }) {
  const [numberOfUsers, setNumberOfUsers] = useState(question.numberOfUsers);
  const [isMeToo, setIsMeToo] = useState(true);
  const handleMeTooClick = async () => {
    try {
      // Prepare updated questionDTO
      const updatedQuestion = {
        ...question,
        numberOfUsers: numberOfUsers + 1,
      };

      // Send a PUT request to the backend
      const response = await fetch("http://localhost:8080/home/questions/modify/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedQuestion),
      });

      if (response.ok) {
        // Update the state with the new value from the backend
        const updatedResponse = await response.json();
        setNumberOfUsers(updatedResponse.numberOfUsers);
      } else {
        console.error("Failed to update question:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  return (
    <div
      className="w-[90vw] max-w-[900px] bg-accent-50 border border-text-200 rounded-xl p-4
                        flex flex-col justify-center items-start gap-1"
    >
      <h1 className="text-xl font-bold">{question.title}</h1>

      <p className="text-sm opacity-50">
        By <b>{`${question.firstName} ${question.lastName}`}</b> in{" "}
        {question.category.name}
      </p>

      <p className="text-base">{question.description}</p>

      <Link
        to={`/questions/${question.id}`}
        className="text-sm text-accent-700 underline mt-1"
      >
        See more
      </Link>

      <div className="flex flex-col-reverse sm:flex-row gap-4 justify-start items-start sm:items-center text-text-400 text-unselectable mt-3">
        <Button
          variation={1}
          className="flex gap-2 px-3 py-2"
          onClick={()=>{handleMeTooClick();setIsMeToo(false)} }
          disabled={!isMeToo}
        >
          <Icon icon="majesticons:plus-circle" className="w-6 h-6" />
          Me too
        </Button>

        <div className="flex flex-row gap-4 flex-wrap">
          <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
            <Icon icon="majesticons:plus-circle-line" className="w-6 h-6" />
            {numberOfUsers}
          </span>

          <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
            <Icon icon="majesticons:eye-line" className="w-6 h-6" />
            {question.views}
          </span>

          <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
            <Icon icon="majesticons:comment-line" className="w-6 h-6 " />
            {question.replies}
          </span>

          {question.isVarified && (
            <span className="text-base font-medium text-oh-yeah flex gap-1 items-center justify-center">
              <Icon icon="majesticons:badge-check" className="w-6 h-6 " />
              Solved
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
