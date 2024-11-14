import React, { useState, useEffect } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import Loading from '../../layouts/Loading';
import Domain from '../../Api/Api';
// import { AuthToken } from '../../Api/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Swal from 'sweetalert2';

function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
//get all categories
 
  //add a new category
  
  //dellete a category

  

  

  const CategoriesContent = (<>
  {loading ? 
      //loading style
      <Loading/>
 :(
    <div
      style={{ width: '900px' }}
      className="shadow-md px-1 space-x-8 mt-2 pt-2 pb-2 mb-2 justify-center gap-9 rounded-lg ml-10 bg-white"
    >
      <div className="flex flex-row m-4">
        <div  className="border bg-white text-xl p-2 rounded-lg shadow-md p-4 cursor-pointer">
          <span className="text-indigo-500 p-3">
            <FontAwesomeIcon icon={faPlus} />
          </span>{' '}
          New category
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Description
      </th>
      <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Delete
      </th>
      <th className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Modify
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {categoriesData.map((category, index) => (
      <tr key={index}>
        <td className="px-5 py-3  w-25 truncate w-40 block overflow-hidden overflow-ellipsis">{category.name}</td>
        <td className="px-5 py-3 max-w-sm truncate  ">{category.description}</td>
        <td className="px-5 py-3 " >
          <FontAwesomeIcon
            className="text-indigo-500 cursor-pointer hover:text-indigo-700"
            icon={faTrash}
          />
        </td>
        <td className="px-6 py-4 " >
          <FontAwesomeIcon
            className="text-indigo-500 cursor-pointer hover:text-indigo-700"
            icon={faPen}
          />
        </td>
      </tr>
    ))}
  </tbody>
  </table>
  </div>
  )}
</>
  );

  return <AdminLayout Content={CategoriesContent} />;
}

export default Categories;
