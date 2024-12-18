/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Icon } from "@iconify/react";
import Button from "../components/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddQuestionModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleAddQuestion = async () => {
    const token = localStorage.getItem("authToken"); // Adjust how you retrieve the token

    if (!token) {
      alert("You need to be logged in!");
      return;
    }

    try {
      const requestPayload = {
        title,
        content,
        category: { id: parseInt(category), name: "" },
      };

      const response = await fetch("http://localhost:8080/home/questions/modify/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestPayload),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Error adding question:", error);
        alert("Failed to add question.");
        return;
      }

      const data = await response.json();
      alert("Question added successfully!");
      console.log("Added question:", data);
      onClose();
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Failed to add question.");
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 filter-backdrop bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-background-50 border border-text-200 rounded-xl p-6 max-w-[700px] w-[90vw] relative">
        <button
					title="Close"
          onClick={() => {
            onClose();
            setTitle("");
            setCategory("");
            setContent("");
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          <Icon icon="majesticons:close" className="w-7 h-7 icon-hover" />
        </button>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddQuestion();
          }}
        >
          <h1 className="font-semibold mb-1 text-unselectable text-center">
            Add Question
          </h1>
          <label className="text-text-950 mb-2 space-y-2">
            <p className="opacity-70">Title</p>
            <input
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="flex flex-row items-center gap-2 w-full h-10 bg-accent-50
                border border-text-200 rounded-xl px-4 text-sm transition-all duration-300
                outline-none hover:border-background-300"
              placeholder="Enter title"
            />
          </label>
          <label className="text-text-950 mb-2 space-y-2">
            <p className="opacity-70">Category</p>
            <select
              className="w-full max-w-44 h-10 bg-accent-50 outline-none flex flex-row items-center gap-2
                border border-text-200 rounded-xl px-4 text-sm transition-all duration-300
                hover:border-background-300"
              required
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose category</option>
              <option value="1">Tech</option>
              <option value="2">Edu</option>
              <option value="3">Dev</option>
              <option value="4">Health</option>
              <option value="5">Hobbies</option>
              <option value="6">Skills</option>
              <option value="7">Society</option>
              <option value="8">Science</option>
              <option value="9">Miscellaneous</option>
            </select>
          </label>
          <label className="text-text-950 mb-2 space-y-2">
            <p className="opacity-70">Content</p>
            <textarea
              value={content}
              required
              onChange={(e) => setContent(e.target.value)}
              className="flex flex-row items-center gap-2 w-full min-h-[100px] bg-accent-50
                border border-text-200 rounded-xl p-4 text-sm transition-colors duration-300
                outline-none hover:border-background-300"
              placeholder="Enter content"
            />
          </label>
          <Button
            variation={2}
            disabled={title === "" || category === "" || content === ""}
            className="mt-3 py-2 px-8 w-fit flex gap-2"
            type="submit"
          >
            <Icon icon="majesticons:plus-circle-line" className="w-6 h-6" />
            Add
          </Button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default AddQuestionModal;
