import { useParams } from "react-router-dom";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




export default function Answer() {

    const [value, setValue] = useState('');
    const modules = {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['code-block'], // Add the code block option
        ['link', 'image'],
        ['clean'], // Remove formatting button
      ],
    };
  
    const formats = [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'list',
      'bullet',
      'code-block', // Enable the code block format
      'link',
      // 'image',
    ];


    return(<>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
        <div>{value}</div>
            <div
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </>);

}


