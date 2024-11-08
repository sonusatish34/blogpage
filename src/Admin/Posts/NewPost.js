import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import CryptoJS from 'crypto-js';
import AdminLayout from '../../layouts/AdminLayout';
import { Timestamp, addDoc, collection, setDoc } from 'firebase/firestore';
import { getDocs, doc, deleteDoc } from "firebase/firestore";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import Editor from "ckeditor5-custom-build/build/ckeditor";
import ClassicEditor from "/ckeditor5-custom-build/build/ckeditor";

import { fireDb } from '../../firebase';

export default function AddPost() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title: formData.title,
      page: formData.Page,
      content: editorData,
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
      setEditorData('');
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
      console.log(posts, "----------11111111------");

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
          <input
            type="text"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
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
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
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

