// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import "./App.css";
// import Login from "./Login/Login";
// import Dashboard from "./Admin/Dashboard/Dashboard";
// import Posts from "./Admin/Posts/Posts";
// import Categories from "./Admin/Categories/Categories";
// import Inbox from "./Admin/Inbox/Inbox";
// import Accounts from "./Admin/Accounts/Accounts";
// import Add from "./Admin/Posts/NewPost";
// import Vio from "./Admin/Vio/TextEditor"
// import View from "./Admin/Posts/ViewPost";
// import UpdatePost from "./Admin/Posts/UpdatePost";
// import ViewMessage from "./Admin/Inbox/ViewMessage";
// import { AuthToken, Logout } from "./Api/Api";
// import NotFound from "./layouts/PageNotFound";
// import SnapShot from './SnapShot/SnapShot'

 


// function App() {
//   /* const isAuthenticated = localStorage.getItem('authToken'); */
//   const isAuthenticated = sessionStorage.getItem('authToken');
//   /* const isAuthenticated = <AuthToken/>; */
//   const Redirect =<Navigate to="/Login" />;
// /*   window.addEventListener("beforeunload", function (event) {
//     localStorage.removeItem('authToken');
// }); */

//   return (
//     //application routes
//     // <BrowserRouter>
//       <Routes>
//       <Route path="/Login" element={<Login />} />
//       {/* <Route path="/SnapShot" element={<SnapShot />} /> */}
//       <Route path="/Logout" element={<Logout />} />
//       <Route path="/" element={<Dashboard/>} />

//       <Route path="/Admin" element={ <Dashboard/> } />
//       {/* Dashboard url */}
//       <Route path="/Admin/Dashboard" element={ <Dashboard/> }/>
      
//       {/* get all posts */}
//       <Route path="/Admin/Posts" element={ <Posts/> } />
//       {/* Add a new post */}
//       <Route path="/Admin/Post/New" element={ <Add/> } />
//       <Route path="/Admin/Vio/Vio" element={ <Vio/> } />
//       {/* Update a  post */}
//       <Route path="/Admin/Posts/UpdatePost/:id" element={ <UpdatePost/> } />
//       {/* show post details */}
//       <Route path="/Admin/Posts/:id" element={ <View/> } />
//       {/* manage Categories */}
//       <Route path="/Admin/Categories" element={ <Categories/> } />
//       {/* manage contact messages */}
//       <Route path="/Admin/Inbox" element={ <Inbox/> } />
//       <Route path="/Admin/Inbox/:id" element={ <ViewMessage/> } />
//       {/* manage users Accounts */}
//       <Route path="/Admin/Accounts" element={ <Accounts/> } />
//       <Route path="*" element={<NotFound/>} />
      
//         {/* { <ProtectedRoutes/>:<Route path="/Login" element={<Login />} />} */}
// {/*         <Route path="/Login" element={<Login />} />
//         <Route path="/" element={<Login />} />
//         <Route path="/Admin" element={<Dashboard />} />
        
//         <Route path="/Admin/Dashboard" element={<Dashboard />} />
        
//         <Route path="/Admin/Posts" element={<Posts />} />
        
//         <Route path="/Admin/Post/New" element={<Add />} />
        
//         <Route path="/Admin/Posts/Update/:id" element={<UpdatePost />} />
        
//         <Route path="/Admin/Posts/:id" element={<View />} />
        
//         <Route path="/Admin/Categories" element={<Categories />} />
//         <Route path="/Admin/Inbox" element={<Inbox />} />
//         <Route path="/Admin/Inbox/:id" element={<ViewMessage />} />

//         <Route path="/Admin/Accounts" element={<Accounts />} /> */}
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// /* import React from "react";
// import { BrowserRouter } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AdminLayout from "./Pages/AdminLayout";
// import Dashboard from "./Admin/Dashboard";



// function App() {
//   return (
//     <BrowserRouter>
//       <Router>
//         <Routes>
//           <Route path="/admin" render={() => (
//             <AdminLayout>
//               <Routes>
//                 <Route path="/Admin/Dashboard" component={Dashboard} />
//                 
//               </Routes>
//             </AdminLayout>
//           )} />
//         </Routes>
//       </Router>
//     </BrowserRouter>

//   );
// }

// export default App;
//  */


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Posts from "./Admin/Posts/Posts";
import Categories from "./Admin/Categories/Categories";
import Inbox from "./Admin/Inbox/Inbox";
import Accounts from "./Admin/Accounts/Accounts";
import Add from "./Admin/Posts/NewPost";
import Vio from "./Admin/Vio/TextEditor";
import View from "./Admin/Posts/ViewPost";
import UpdatePost from "./Admin/Posts/UpdatePost";
import ViewMessage from "./Admin/Inbox/ViewMessage";
import { Logout } from "./Api/Api";
import NotFound from "./layouts/PageNotFound";
import SnapShot from './SnapShot/SnapShot';

function App() {
  // Check if the user is authenticated
  const isAuthenticated = sessionStorage.getItem('authToken');

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        
        {/* Protected Routes */}
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/Login" />} />
        <Route path="/Admin" element={isAuthenticated ? <Dashboard /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Posts" element={isAuthenticated ? <Posts /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Post/New" element={isAuthenticated ? <Add /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Vio/Vio" element={isAuthenticated ? <Vio /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Posts/UpdatePost/:id" element={isAuthenticated ? <UpdatePost /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Posts/:id" element={isAuthenticated ? <View /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Categories" element={isAuthenticated ? <Categories /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Inbox" element={isAuthenticated ? <Inbox /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Inbox/:id" element={isAuthenticated ? <ViewMessage /> : <Navigate to="/Login" />} />
        <Route path="/Admin/Accounts" element={isAuthenticated ? <Accounts /> : <Navigate to="/Login" />} />
        
        {/* Catch all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
