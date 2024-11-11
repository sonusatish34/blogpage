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


  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('coverImage', file); // Add file to formData
  
      try {
        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Correct content type for file uploads
          },
        });
  
        if (response.data.filePath) {
          setFormData((prevData) => ({
            ...prevData,
            coverimages: response.data.filePath, // Set the file path from the response
          }));
          console.log("File uploaded successfully:", response.data.filePath);
        } else {
          console.error('Error uploading file:', response.data.error);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        Swal.fire({
          icon: 'error',
          title: 'Upload Error',
          text: 'There was an error uploading the image. Please try again.',
        });
      }
    }
  };
  
  


  const imageHandler = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.click();

    input.onchange = async () => {
      const file = input.files[0]; // Corrected the way to access the selected file

      if (file) {
        try {
          // Call your image upload handler (it sends the file to the backend)
          const filePath = await handleImageUpload(file);
          if (filePath) {
            // Get the cursor position from the Quill editor
            const range = quillRef.current.getEditor().getSelection();
            if (range) {
              // Insert the image into the editor at the cursor's position
              quillRef.current.getEditor().insertEmbed(range.index, 'image', `http://localhost:5000${filePath}`);
              console.log("Image successfully inserted into the editor!");
            }
          }
        } catch (error) {
          console.error("Image upload failed:", error);
        }
      }
    };
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title: formData.title,
      page: formData.Page,
      content: editorHtml,
      keywords: formData.keywords,
      coverimages: formData.coverimages,
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
  var encryptedData = CryptoJS.AES.encrypt(editorHtml, "ldc").toString();
  var decryptedData =
    console.log(encryptedData, "encrpt");
  var bytes = CryptoJS.AES.decrypt(encryptedData, "ldc");
  var decryptedData = bytes.toString(CryptoJS.enc.Utf8);  // Convert bytes back to string

  console.log("Decrypted Data: ", decryptedData);

  // Custom image handler
  useEffect(() => {
    if (quillRef.current) {
      const quillEditor = quillRef.current.getEditor();
      const toolbar = quillEditor.getModule('toolbar');

      // Manually add the custom image handler
      const imageButton = toolbar.container.querySelector('.ql-image');
      if (imageButton) {
        imageButton.addEventListener('click', imageHandler);
      }

      // Cleanup the event listener when the component unmounts
      return () => {
        if (imageButton) {
          imageButton.removeEventListener('click', imageHandler);
        }
      };
    }
  }, []);
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
              src={`https://your-backend-url.com${formData.coverimages}`}  // Adjust URL for public access
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
            {/* <Vio /> */}

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
