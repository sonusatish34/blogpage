import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import axios from 'axios'; // for handling image upload

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const quillRef = useRef(null); // Create a reference using useRef
  console.log(editorHtml,"-------eh");
  
  // Custom image handler
  const handleImageUpload = (file) => {
    const formData = new FormData();
    formData.append('image', file);

    // Replace with your backend upload URL
    axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        // Assuming your backend returns the image URL
        const imageUrl = response.data.url;

        // Access the Quill editor instance via quillRef and insert the image
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', imageUrl);
      })
      .catch((error) => {
        console.error("Image upload failed: ", error);
      });
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      ['link', 'image'], // Add the image button in the toolbar
      [{ 'align': [] }],
      ['clean'] // Add a clean button to clear the content
    ]
  };

  // Use the `formats` prop to specify the allowed formats in the editor
  const formats = [
    'header', 'font', 'list', 'bold', 'italic', 'underline', 'strike', 
    'blockquote', 'code-block', 'link', 'image', 'align'
  ];

  return (
    <div>
      <ReactQuill 
        value={editorHtml} 
        onChange={setEditorHtml} 
        modules={modules}
        formats={formats}
        ref={quillRef} // Use the ref here
      />
    </div>
  );
};

export default TextEditor;
