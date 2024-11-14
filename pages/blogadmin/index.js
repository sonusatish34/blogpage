

// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // // import "./App.css";
// // // import Login from "./Login/Login";
// // import Dashboard from "./Admin/Dashboard/Dashboard";
// // // import Posts from "./Admin/Posts/Posts";
// // // import Categories from "./Admin/Categories/Categories";
// // // import Inbox from "./Admin/Inbox/Inbox";
// // // import Accounts from "./Admin/Accounts/Accounts";
// // // import Add from "./Admin/Posts/NewPost";
// // // import Vio from "./Admin/Vio/TextEditor";
// // // import View from "./Admin/Posts/ViewPost";
// // // import UpdatePost from "./Admin/Posts/UpdatePost";
// // // import ViewMessage from "./Admin/Inbox/ViewMessage";
// // // import { Logout } from "./Api/Api";
// // // import NotFound from "./layouts/PageNotFound";

// // // function App() {
// // //   // Check if the user is authenticated
// // //   const isAuthenticated = localStorage.getItem('authToken');
// // //   // console.log(isAuthenticated,"-----------a-------");
  
// // //   return (
// // //     // <BrowserRouter>
// // //     //   <Routes>
// // //     //     {/* Public Routes */}
// // //     //     <Route path="/Login" element={<Login />} />
// // //     //     <Route path="/Logout" element={<Logout />} />
        
// // //     //     {/* Protected Routes */}
// // //     //     <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin" element={ <Dashboard />} />
// // //     //     <Route path="/Admin/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin/Posts" element={isAuthenticated ? <Posts /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin/Post/New" element={isAuthenticated ? <Add /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin/Vio/Vio" element={isAuthenticated ? <Vio /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin/Posts/UpdatePost/:id" element={isAuthenticated ? <UpdatePost /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin/Posts/:id" element={isAuthenticated ? <View /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin/Categories" element={isAuthenticated ? <Categories /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin/Inbox" element={isAuthenticated ? <Inbox /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin/Inbox/:id" element={isAuthenticated ? <ViewMessage /> : <Navigate to="/Login" />} />
// // //     //     <Route path="/Admin/Accounts" element={isAuthenticated ? <Accounts /> : <Navigate to="/Login" />} />
        
// // //     //     {/* Catch all route for 404 */}
// // //     //     <Route path="*" element={<NotFound />} />
// // //     //   </Routes>
// // //     // </BrowserRouter>
// // //     <div>jiojj</div>
// // //   );
// // // }

// // // export default App;
// // // import React from 'react'
// // // import AdminLayout from "./layouts/AdminLayout";
// // // function Index() {
// // //   return (
// // //     <div>
// // //         <p>hi</p>
// // //         <AdminLayout/>
// // //     </div>
// // //   )
// // // }
// // // export default Index;

// import React from "react";
// import Link from "next/link";
// import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { AdminName } from "../Api/Api";
// function Nav(){
// return(
//     <nav className="border bg-white p-4 flex justify-between items-center">
//         <Link href={'/Admin/'} to="/Admin/">
//             <div className="">Blog Admin</div>
//         </Link>
//         <div className="flex items-center space-x-4">
//             <div className="flex ">
//                     {/* <p>{localStorage.getItem('AdminName')}</p> */}
//                 {/* <p type="text" placeholder="Admin name" className="bg-white p-2 rounded" ><AdminName/></p> */}
//                 <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" className="w-10 h-10 rounded" alt="" />
//                 <p className="bg-white p-2 rounded hover:cursor-pointer">
// {/*                     <Link to="/Logout">
//                         <FontAwesomeIcon icon={faArrowRightFromBracket} />
//                     </Link> */}
//                 </p>
//             </div>
//         </div>
//     </nav>

// );
// }
// export default Nav;
import React from 'react'
import AdminLayout from './layouts/AdminLayout'
import Nav from './layouts/Nav'
import SideBar from './layouts/SideBar'
function index() {
  return (
    <div>
        <p>kjolko</p>
        <div className="flex flex-col">
      <Nav />
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <aside className="w-64 h-full border-r bg-white sticky top-0">
          <SideBar />
        </aside>
        {/* Content area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          {/* {Content || children} */}
        </main>
      </div>
    </div>
    </div>
  )
}

export default index