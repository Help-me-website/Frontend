/* eslint-disable @typescript-eslint/no-unused-vars */
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../components/Button";
import CategoriesMenu from "../components/CategoriesMenu";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddQuestionModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {


	const [catMenu, setCatMenu] = useState(false);
	const btnRef = useRef<HTMLSpanElement>(null);


	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("Choose category");
	const [content, setContent] = useState("");



  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 filter-backdrop bg-opacity-50 flex justify-center items-center z-50">
		<div className="bg-background-50 border border-text-200 rounded-xl p-6 max-w-[700px] w-[90vw] relative">
			<button
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
			<form className="flex flex-col gap-3">
				<h1 className="font-semibold mb-1 text-unselectable text-center">Add Question</h1>
				<label className="text-text-950 mb-2 space-y-2">
					<p className="opacity-70">Title</p>
					<input
					type="text"
					value={title}
					required
					onChange={(e) => setTitle(e.target.value)}
					className="flex flex-row items-center gap-2 w-full h-10 bg-accent-50
						border border-text-200 rounded-xl px-4 text-sm transition-all duration-300
						outline-none hover:border-background-300
					" 
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
						<option>Choose category</option>
						<option>Tech</option>
						<option>Edu</option>
						<option>Dev</option>
						<option>Health</option>
						<option>Hoppies</option>
						<option>Skills</option>
						<option>Society</option>
						<option>Science</option>
						<option>Missellaneous</option>
					</select>
					{/* <input
					type="text"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className="flex flex-row items-center gap-2 w-full max-w-40 h-10 bg-accent-50
						border border-text-200 rounded-xl px-4 text-sm transition-all duration-300
						outline-none hover:border-background-300
					" 
					placeholder="Enter category"
				/> */}
					
				</label>
				<label className="text-text-950 mb-2 space-y-2">
					<p className="opacity-70">Content</p>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						required
						className="flex flex-row items-center gap-2 w-full min-h-[100px] bg-accent-50
							border border-text-200 rounded-xl p-4 text-sm transition-colors duration-300
							outline-none hover:border-background-300
						" 
					placeholder="Enter content"
				/>
				</label>
				<Button
					variation={2}
					disabled={title === "" || category === "" || content === "Choose category" || content === ""}
					className="mt-3 py-2 px-8 w-fit flex gap-2"
					onClick={() => addQuestion(title, category, content)}
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



// function AddQuestionModalContent() {
  
//       const [value, setValue] = useState("");
//       const modules = {
//         toolbar: [
//           [{ header: [1, 2, 3, false] }],
//           ['bold', 'italic', 'underline', 'strike'],
//           [{ list: 'ordered' }, { list: 'bullet' }],
//           ['code-block'], // Add the code block option
//           ['clean'], // Remove formatting button
//         ],
//       };
    
//       const formats = [
//         'header',
//         'bold',
//         'italic',
//         'underline',
//         'strike',
//         'list',
//         'bullet',
//         'code-block', // Enable the code block format
//         'link',
//         // 'image',
//       ];
  
  
//       return(<>
// 	  		<div className="border border-text-200 rounded-xl p-3">
// 				<ReactQuill
// 					theme="bubble"
// 					value={value}
// 					onChange={setValue}
// 					modules={modules}
// 					formats={formats}
// 				/>
// 			</div>
//           {/* <div>{value}</div>
//               <div
//           dangerouslySetInnerHTML={{ __html: value }}
//         /> */}
//       </>);
  
// }


// tiltle
// category: id-name
// content 
// header -> token


function addQuestion(tiltle: string, category: string, content: string) {
	console.log(tiltle);
	console.log(category);
	console.log(content);
}

