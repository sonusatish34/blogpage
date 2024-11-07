import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function UpdatePost() {
  const { id } = useParams(); // Get the post ID from the URL params
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    blogfor: "",
    categoryname: "",
    keywords: "",
  });
  const [error, setError] = useState(null);

  // Load the post data from localStorage when the component mounts
  useEffect(() => {
    const postsData = JSON.parse(localStorage.getItem("posts")) || [];
    const currentPost = postsData.find((post) => post.id === parseInt(id));

    if (currentPost) {
      setPost(currentPost);
    } else {
      setError("Post not found");
    }
  }, [id]);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const postsData = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPostsData = postsData.map((p) =>
      p.id === parseInt(id) ? { ...p, ...post } : p
    );

    localStorage.setItem("posts", JSON.stringify(updatedPostsData));

    Swal.fire("Post Updated", "The post has been updated successfully.", "success");
    navigate("/Admin/Posts"); // Navigate back to the posts list
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Post</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="blogfor" className="block text-gray-700">Blog for</label>
          <input
            type="text"
            id="blogfor"
            name="blogfor"
            value={post.blogfor}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="categoryname" className="block text-gray-700">Category</label>
          <input
            type="text"
            id="categoryname"
            name="categoryname"
            value={post.categoryname}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="keywords" className="block text-gray-700">Keywords</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={post.keywords}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4 flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Post
          </button>
          <button
            type="button"
            onClick={() => navigate("/Admin/Posts")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePost;
