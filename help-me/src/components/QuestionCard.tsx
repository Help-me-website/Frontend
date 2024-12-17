import { Icon } from "@iconify/react";
import Question from "../types/Question";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function QuestionCard({ question }: { question: Question }) {
  return (
    <div
      className="w-[90vw] max-w-[800px] bg-accent-50 border border-text-200  rounded-xl p-3
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
        <Button variation={1} className="flex gap-2 px-3 py-2">
          <Icon icon="majesticons:plus-circle" className="w-6 h-6" />
          Me too
        </Button>

        <div className="flex flex-row gap-4 flex-wrap">
          <span className="text-base font-medium text-bg-shade-3 flex gap-1 items-center justify-center">
            <Icon icon="majesticons:plus-circle-line" className="w-6 h-6" />
            {question.votes}
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
