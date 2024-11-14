import React, { useState, useEffect } from 'react';
import AdminLayout from "../../layouts/AdminLayout";
import Domain from '../../Api/Api';
import { AuthToken } from '../../Api/Api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faComments, faHeart, faEye, faUserCheck, faUser, faFolder } from "@fortawesome/free-solid-svg-icons";
import { Line } from 'react-chartjs-2';
import { CategoryScale } from "chart.js";
import Chart from 'chart.js/auto';
import Loading from '../../layouts/Loading';
import axios from 'axios';
import { fireDb } from '../../../../utils/firebase';
/* AnalyticsCard component */
import { Timestamp, addDoc, collection, setDoc, getDocs, query, where, } from 'firebase/firestore';
function AnalyticsCard({ title, value, icon }) {
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <FontAwesomeIcon icon={icon} className="text-4xl text-indigo-500" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>
    </div>
  );
}
function Dashboard() {
  const [postcount,setPostcount] = useState('');
  const [catgscount,setCatgscount] = useState('');
    useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      const querySnapshot = await getDocs(collection(fireDb, "blogPost"));
      const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // setPostsData(posts);
      setPostcount(posts?.length)
      console.log(posts.length, "----------11111111------");
      // setPostauthor(sessionStorage.getItem('AdminName'))
      // console.log(formData, "fd---000");
      // setLoading(false);
    };
    const fetchCatgs = async () => {
      // setLoading(true);
      const querySnapshot = await getDocs(collection(fireDb, "categories"));
      const catgs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // setPostsData(posts);
      setCatgscount(catgs?.length)
      // console.log(catgs, "----------11111111------");
      // setPostauthor(sessionStorage.getItem('AdminName'))
      // console.log(formData, "fd---000");
      // setLoading(false);
    };

    fetchPosts();
    fetchCatgs();
  }, []);
  return (
    <div>
      <AdminLayout>
      <div className="container mx-auto mt-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnalyticsCard title="Total Posts" value={postcount} icon={faFileAlt} />
        {/* <AnalyticsCard title="Total Comments" value={dashboardData.TotalComment} icon={faComments} /> */}
        {/* <AnalyticsCard title="Likes Received" value={dashboardData.TotalLikes} icon={faHeart} /> */}
        {/* <AnalyticsCard title="Total Visits" value={dashboardData.TotalVisits} icon={faEye} /> */}
        <AnalyticsCard title="Total Categories" value={catgscount} icon={faFolder} />
        <AnalyticsCard title="Total Users" value={'l'} icon={faUser} />
        {/* <AnalyticsCard title="Active Users" value={dashboardData.ActifUsers} icon={faUserCheck} /> */}
      </div>
      {/* <Analytics
        Visits={dashboardData.MonthlyVisits}
        Posts={dashboardData.MonthlyPosts}
        Comments={dashboardData.MonthlyComments}
      /> */}
    </div>
      </AdminLayout>
    </div>
  )
}

export default Dashboard