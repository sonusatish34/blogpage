import React, { useState, useEffect } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faEye, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Loading from '../../layouts/Loading';

function UserAccountManager({ user, onUpdate, onDelete }) {
  const [updating, setUpdating] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleUpdate = () => {
    Swal.fire({
      title: 'Are you sure you want to update this user information account?',
      icon: 'warning',
      html: `
        <p><b>Username</b>: ${updatedUser.name}</p>
        <p><b>Email</b>: ${updatedUser.email}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        // Update the user in localStorage
        onUpdate(updatedUser);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('User updated', 'The account has been modified.', 'success');
      }
    });
  };

  const handleClose = () => {
    setUpdating(false);
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure you want to delete this user account?',
      icon: 'warning',
      html: `
        <p><b>Username</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        // Delete the user from localStorage
        onDelete(user.id);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('User Deleted', 'The account has been deleted.', 'success');
      }
    });
  };

  return (
    <>
      <tr className="shadow-md items-center p-2 mb-2 justify-center gap-9 rounded-lg ml-10 bg-white">
        <td className="border p-2">{user.name}</td>
        <td className="border p-2">{user.email}</td>
        <td className="border p-2">{user.password}</td>
        <td className="border p-2">{user.created_at}</td>
        <td className="border p-2">
          <FontAwesomeIcon className="text-indigo-500" icon={faEye} />
        </td>
        <td className="border p-2">
          <FontAwesomeIcon onClick={handleDelete} className="text-indigo-500 hover:cursor-pointer" icon={faTrash} />
        </td>
        <td className="border p-2">
          <FontAwesomeIcon onClick={() => setUpdating(true)} className="text-indigo-500 hover:cursor-pointer" icon={faPen} />
        </td>
      </tr>

      {updating && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Update User</h2>
          <input
            type="text"
            placeholder="New Username"
            value={updatedUser.name}
            onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="New Email"
            value={updatedUser.email}
            onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpdate}
          >
            Save
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 mb-2 rounded" onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </>
  );
}

function Accounts() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Manage modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Fetch users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('usersData')) || [];
    setUsersData(storedUsers);
    setLoading(false);
  }, []);

  const updateUser = (updatedUser) => {
    const updatedUsers = usersData.map((user) => (user.id === updatedUser.id ? updatedUser : user));
    setUsersData(updatedUsers);

    // Save updated users back to localStorage
    localStorage.setItem('usersData', JSON.stringify(updatedUsers));
  };

  const deleteUser = (userId) => {
    const updatedUsers = usersData.filter((user) => user.id !== userId);
    setUsersData(updatedUsers);

    // Save updated users back to localStorage
    localStorage.setItem('usersData', JSON.stringify(updatedUsers));
  };

  const handleCreateUser = () => {
    // Validate the form inputs
    if (!newUser.name || !newUser.email || !newUser.password) {
      Swal.fire('Error', 'All fields are required', 'error');
      return;
    }

    // Create the new user object
    const newUserObj = {
      id: usersData.length + 1, // Simulate a new ID
      name: newUser.name,
      email: newUser.email,
      password:newUser.password,
      created_at: new Date().toLocaleString(),
      email_verified_at: null, // Simulate email verification status
    };

    // Add the new user to the list and save it in localStorage
    const updatedUsers = [...usersData, newUserObj];
    setUsersData(updatedUsers);
    localStorage.setItem('usersData', JSON.stringify(updatedUsers));

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto mt-8 px-10 bg-white ml-5 pb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600 mb-4"
          >
            <FontAwesomeIcon icon={faPlus} /> Create User
          </button>

          {/* Modal for creating user */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">Create New User</h2>
                <input
                  type="text"
                  placeholder="Username"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full p-2 mb-3 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full p-2 mb-3 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="w-full p-2 mb-3 border border-gray-300 rounded"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleCreateUser}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg mr-2"
                  >
                    Create
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="max-w-screen-lg">
            <h1 className="text-3xl font-bold mb-4">User Accounts</h1>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border p-2 pl-3 pr-5">Username</th>
                  <th className="border p-2 pl-3 pr-5">Email</th>
                  <th className="border p-2 pl-3 pr-5">Password</th>
                  <th className="border p-2 pl-3 pr-5">Join date</th>
                  <th className="border p-2 pl-3 pr-5">View</th>
                  <th className="border p-2 pl-3 pr-5">Delete</th>
                  <th className="border p-2 pl-3 pr-5">Modify</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {usersData.map((user) => (
                  <UserAccountManager
                    key={user.id}
                    user={user}
                    onUpdate={updateUser}
                    onDelete={deleteUser}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default Accounts;
