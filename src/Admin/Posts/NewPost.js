import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {Editor} from "../../ckeditor5-custom-build/src/ckeditor";  
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { fireDb } from '../../firebase';

function AddPost() {
  const [formData, setFormData] = useState({
    title: '',
    Page: '',
    content: '',
    keywords: '',
    coverimages: '',
    blogfor: '',
    categoryname: ''
  });

  const [editorData, setEditorData] = useState('');
  const [currentKeyword, setCurrentKeyword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleKeywordChange = (e) => {
    setCurrentKeyword(e.target.value);
  };

  const handleKeywordKeyDown = (e) => {
    if (e.key === 'Enter' && currentKeyword.trim()) {
      const updatedKeywords = formData.keywords
        ? `${formData.keywords},${currentKeyword.trim()}`
        : currentKeyword.trim();
      setFormData((prevData) => ({
        ...prevData,
        keywords: updatedKeywords,
      }));
      setCurrentKeyword('');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          coverimages: reader.result,
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
      const productRef = doc(fireDb, "blogPost", newPost.title);
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
        html: `Title: ${formData.title}<br>Page: ${formData.Page}<br>Content: ${editorData}<br>Keywords: ${formData.keywords}`,
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
    } catch (error) {
      console.error('Error creating post:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an issue creating the post.',
      });
    }
  };

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
                .then((response) => {
                  if (!response.ok) throw new Error('Network response was not ok');
                  return response.json();
                })
                .then((result) => resolve({ default: result.url }))
                .catch((error) => {
                  console.error('Image upload failed:', error);
                  reject(error);
                });
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
            value={currentKeyword}
            onChange={handleKeywordChange}
            onKeyDown={handleKeywordKeyDown}
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
            onError={(error) => {
              console.error('CKEditor error:', error);
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
      </form>
    </div>
  );
}

function Add() {
  return <AddPost/>;
}

export default Add;
