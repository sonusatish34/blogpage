import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "../../ckeditor5-custom-build/build/ckeditor";  // Assuming you have a CKEditor build
import CryptoJS from 'crypto-js';
import AdminLayout from '../../layouts/AdminLayout';
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { fireDb } from '../../firebase';

function AddPost() {
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

  // Handle file input for cover image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          coverimages: reader.result,  // Save the base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Retrieve existing posts from localStorage, or initialize an empty array if none exist
  //   const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

  //   // Generate a new postId (next available number)
  //   const newPostId = existingPosts.length ? Math.max(existingPosts.map(post => post.id)) + 1 : 1;

  //   // Create a new post object with the form data and editor content
  //   const newPost = {
  //     id: existingPosts.length+1,  // Assign the generated postId
  //     title: formData.title,
  //     page: formData.Page,
  //     content: editorData,
  //     keywords: formData.keywords,
  //     coverimages: formData.coverimages,  // Store the base64 image string
  //     blogfor: formData.blogfor,
  //     categoryname: formData.categoryname,
  //     createdAt: new Date().toISOString(), // Add creation timestamp
  //   };

  //   // Add the new post to the existing posts array
  //   existingPosts.push(newPost);

  //   // Save the updated posts array back to localStorage
  //   localStorage.setItem('posts', JSON.stringify(existingPosts));
  //   const productRef = collection(fireDb, "blogPost");
  //           await addDoc(productRef, {
  //               ...newPost,
  //               time: Timestamp.now(),
  //               date: new Date().toLocaleString("en-US", {
  //                   month: "short",
  //                   day: "2-digit",
  //                   year: "numeric",
  //               }),
  //           });
  //   // Display a success message
  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Post Created',
  //     html: `Title: ${formData.title}<br>Page: ${formData.Page}<br>Content: ${editorData}<br>Tags: ${formData.tags}<br>Keywords: ${formData.keywords}`,
  //   });

  //   // Clear the form
  //   setFormData({
  //     title: '',
  //     Page: '',
  //     content: '',
  //     keywords: '',  // Reset keywords
  //     coverimages: '',  // Reset cover image
  //     blogfor: '',
  //     categoryname: '',
  //   });
  //   setEditorData('');  // Reset the CKEditor content
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

    const newPostId = existingPosts.length ? Math.max(existingPosts.map(post => post.id)) + 1 : 1;

    const newPost = {
      id: newPostId, // Assign the generated postId
      title: formData.title,
      page: formData.Page,
      content: editorData,
      keywords: formData.keywords,
      coverimages: formData.coverimages,
      blogfor: formData.blogfor,
      categoryname: formData.categoryname,
      createdAt: new Date().toISOString(),
    };

    existingPosts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(existingPosts));

    const productRef = doc(fireDb, "blogPost", newPost.title); // Use title as document ID
    await setDoc(productRef, {
      ...newPost,
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    });

    Swal.fire({
      icon: 'success',
      title: 'Post Created',
      html: `Title: ${formData.title}<br>Page: ${formData.Page}<br>Content: ${editorData}<br>Tags: ${formData.tags}<br>Keywords: ${formData.keywords}`,
    });

    setFormData({
      title: '',
      Page: '',
      content: '',
      keywords: '',
      coverimages: '',
      blogfor: '',
      categoryname: '',
    });
    setEditorData('');
  };

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

  // Handle image upload for CKEditor
  const handleEditorImageUpload = (editor) => {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return {
        upload: () => {
          return new Promise((resolve, reject) => {
            const data = new FormData();
            loader.file.then((file) => {
              data.append('upload', file);
              fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: data,
              })
                .then((response) => response.json())
                .then((result) => resolve({ default: result.url }))
                .catch((error) => reject(error));
            });
          });
        },
      };
    };
  };

  return (
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
          <input
            type="text"
            id="Page"
            name="Page"
            value={formData.Page}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
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
          <CKEditor
            editor={Editor}
            data="<p>Start typing your content...</p>"
            onReady={(editor) => handleEditorImageUpload(editor)}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditorData(data);
            }}
          />
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
          {formData.coverimages && (
            <div className="mt-2">
              <img src={formData.coverimages} alt="Cover Preview" className="w-32 h-32 object-cover rounded" />
            </div>
          )}
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
  );
}

function Add() {
  return <AdminLayout Content={<AddPost />} />;
}

export default Add;
