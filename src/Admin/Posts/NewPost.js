import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import CryptoJS from 'crypto-js';
import AdminLayout from '../../layouts/AdminLayout';
import { Timestamp, addDoc, collection, setDoc, getDocs } from 'firebase/firestore';
// import Vio from "./Admin/Vio/TextEditor"
import Vio from "../../Admin/Vio/TextEditor"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import axios from 'axios'; // for handling image upload

import { fireDb } from '../../firebase';
export default function AddPost() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    
    // Create FormData object to send the file as multipart/form-data
    const formData = new FormData();
    formData.append('coverimages', file);
    console.log(formData,"formData");
    
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response,"response");
      // Set the uploaded image URL from the response
      setUploadedImageUrl(response.data.fileUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  const [postauthor, setPostauthor] = useState('')
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    Page: '',
    content: '',
    keywords: '',  // This will store keywords as a comma-separated string
    coverimages: '',  // This will store the base64 image string
    blogfor: '',
    categoryname: ''
  });

  const [editorData, setEditorData] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const [currentKeyword, setCurrentKeyword] = useState(''); // Temporary state for current keyword
//   const replaceText = (str) => {
//     if (str?.includes("cdn"))
//         return str;
//     else {
//         return str?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.');
//     }
// };
  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle keyword input change 
  const handleKeywordChange = (e) => {
    setCurrentKeyword(e.target.value);
  };

  // Handle adding keyword to the list (on Enter key press)
  const handleKeywordKeyDown = (e) => {
    if (e.key === 'Enter' && currentKeyword.trim()) {
      // Add currentKeyword to the list of keywords
      const updatedKeywords = formData.keywords
        ? `${formData.keywords},${currentKeyword.trim()}`
        : currentKeyword.trim();

      // Update formData with the new keywords string
      setFormData((prevData) => ({
        ...prevData,
        keywords: updatedKeywords,
      }));

      // Clear the input after adding the keyword
      // setCurrentKeyword('');
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title: formData.title,
      page: formData.Page,
      content: editorHtml,
      keywords: formData.keywords,
      coverimages: uploadedImageUrl,
      blogfor: formData.blogfor,
      categoryname: formData.categoryname,
      createdAt: new Date().toISOString(),
    };

    try {
      // Save post in Firestore under blogdb -> blogs collection
      const blogRef = collection(fireDb, "blogPost"); // Reference to blogs collection under blogdb
      await addDoc(blogRef, {
        ...newPost,
        time: Timestamp.now(),
        postauthor: postauthor,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });

      Swal.fire({
        icon: 'success',
        title: 'Post Created',
        html: `Title: ${formData.title}<br>Page: ${formData.Page}<br>Content: ${"editorData"}<br>Tags: ${formData.tags}<br>Keywords: ${formData.keywords}`,
      });

      // Clear the form
      setFormData({
        title: '',
        Page: '',
        content: '',
        keywords: '',
        coverimages: '',
        blogfor: '',
        categoryname: '',
      });
      // setEditorData('');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an issue creating the post. Please try again.',
      });
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      const querySnapshot = await getDocs(collection(fireDb, "blogPost"));
      const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // setPostsData(posts);
      // console.log(posts, "----------11111111------");
      setPostauthor(sessionStorage.getItem('AdminName'))
      console.log(formData, "fd---000");
      // setLoading(false);
    };

    fetchPosts();
  }, []);

  // Handle form clear
  const handleClear = () => {
    setFormData({
      title: '',
      Page: '',
      content: '',
      keywords: '',
      tags: '',
      coverimages: '',
      blogfor: '',
      categoryname: '',
    });
    setEditorData('');  // Reset the CKEditor content
  };

  const [editorHtml, setEditorHtml] = useState('');
  const quillRef = useRef(null); // Create a reference using useRef
  console.log(editorHtml, "-------eh");
  // var encryptedData = CryptoJS.AES.encrypt(editorHtml, "ldc").toString();
  // var decryptedData =
  //   console.log(encryptedData, "encrpt");
  // var bytes = CryptoJS.AES.decrypt(encryptedData, "ldc");
  // var decryptedData = bytes.toString(CryptoJS.enc.Utf8);  // Convert bytes back to string

  // console.log("Decrypted Data: ", decryptedData);

  // Custom image handler

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }, { 'size': ['small', 'normal', 'large', 'huge'] }], // Adding custom font sizes
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      ['link', 'image'], // Add the image button in the toolbar
      [{ 'align': [] }],
      ['clean'] // Add a clean button to clear the content
      // Add font color and background color to the toolbar
      [{ 'color': [] }], // Color dropdown
      [{ 'background': [] }], // Background color dropdown
    ],
    // imageHandler: imageHandler,
  };

  // Use the `formats` prop to specify the allowed formats in the editor
  const formats = [
    'header', 'font', 'size', 'list', 'bold', 'italic', 'underline', 'strike',
    'blockquote', 'code-block', 'link', 'image', 'align', 'color', 'background'
  ];


  
  useEffect(() => {
    // @ts-ignore
    quillRef.current
      .getEditor()
      .getModule('toolbar')
      .addHandler('quillImage', () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
          if (!input.files || !input.files.length || !input.files[0]) return;

          const file = input.files[0];

          // Create FormData to send the image to the server
          const formData = new FormData();
          formData.append('quillImage', file);
          console.log(formData,"formdsata in funcncn");
          
          // Send image file to backend (Node.js server)
          try {
            const response = await fetch('http://localhost:5000/uploadei', {
              method: 'POST',
              body: formData,
            });

            const data = await response.json();

            if (data.success) {
              // Insert the image URL into Quill editor
              const editor = quillRef.current.getEditor();
              const range = editor.getSelection(true);
              editor.insertEmbed(range.index, 'image', data.imageUrl);
            } else {
              console.error('Upload failed:', data.error);
            }
          } catch (error) {
            console.error('Error uploading image:', error);
          }
        };
      });
  }, []);

  return (
    <AdminLayout>
      <div style={{ width: '900px' }} className="shadow-md flex-row px-1 mt-5 items-center pt-2 pb-2 mb-2 justify-center rounded-lg ml-10 bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-center hover:text-indigo-500">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-full p-1">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-lg">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="border rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Page" className="text-lg">Page URL</label>
            {/* <input
              type="text"
              id="Page"
              name="Page"
              value={formData.Page}
              onChange={handleChange}
              required
              className="border rounded-lg p-2"
            /> */}
            {formData.title?.replaceAll(' ', '-').toLowerCase()}
          </div>
          <div className="flex flex-col">
            <label htmlFor="keywords" className="text-lg">Keywords</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              value={currentKeyword}  // Bind to the temporary state
              onChange={handleKeywordChange}
              onKeyDown={handleKeywordKeyDown}  // Add the enter key press handler
              required
              className="border rounded-lg p-2"
              placeholder="Press enter to add keywords"
            />
            <div className="mt-2">
              <strong>Keywords: </strong>
              {formData.keywords.split(',').map((keyword, index) => (
                <span key={index} className="badge bg-indigo-200 text-indigo-800 rounded px-2 py-1 mr-2">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="content" className="text-lg">Content</label>
            <div>
              <ReactQuill
                value={editorHtml}
                onChange={setEditorHtml}
                modules={modules}
                formats={formats}
                ref={quillRef}
                placeholder="Write your content here..."
              />
            </div>
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="coverimages" className="text-lg">Cover Image</label>
            <input
              type="file"
              id="coverimages"
              name="coverimages"
              accept="image/*"
              onChange={handleImageUpload}
              className="border rounded-lg p-2"
            />
            <img
              src={`${uploadedImageUrl?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.')}`}  // Adjust URL for public access
              alt="Cover Preview"
              className="w-32 h-32 object-cover rounded"
            />
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="blogfor" className="text-lg">Blog For</label>
            <select
              id="blogfor"
              name="blogfor"
              value={formData.blogfor}
              onChange={handleChange}
              className="border rounded-lg p-2"
            >
              <option value="Dozzy">Dozzy</option>
              <option value="LDC">LDC</option>
              <option value="SDC">SDC</option>
            </select>
          </div>
          <div className="flex flex-col pt-4">
            <label htmlFor="categoryname" className="text-lg">Category Name</label>
            <input
              type="text"
              id="categoryname"
              name="categoryname"
              value={formData.categoryname}
              onChange={handleChange}
              required
              className="border rounded-lg p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg ml-3 hover:bg-indigo-600 transition duration-300"
          >
            Clear
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
