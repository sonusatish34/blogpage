import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt, faFolder, faInbox, faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
function SideBar() {
//   const location = useLocation();

  const links = [
    { href: "/blogadmin/Admin/Dashboard/Dashboard", icon: faHome, label: "Dashboard" },
    { href: "/blogadmin/Admin/Accounts/Accounts", icon: faUser, label: "Accounts" },
    { href: "/blogadmin/Admin/Posts/NewPost", icon: faFileAlt, label: "Create Post" },
    { href: "/blogadmin/Admin/Posts/Posts", icon: faFileAlt, label: "All Posts" },
    // { href: "/Admin/Categories", icon: faFolder, label: "Categories" },
    // { href: "/Admin/Inbox", icon: faInbox, label: "Inbox" },
    // { href: "/Admin/Settings", icon: faCog, label: "Settings" },
    { href: "/blogadmin/Logout", icon: faSignOutAlt, label: "Logout" },
  ];

  return (
    <nav className="border-r bg-white h-screen p-4 w-64 pt-10">
      {links.map((link) => (
        <Link key={link.href} href={link.href} aria-label={link.label}>
          <div
            className={`flex items-center text-black-300 hover:text-blue-500 cursor-pointer rounded-md p-2 mb-2 ${
            
             ('k' === "/Admin" && "link.to" === "/Admin/Dashboard") ? "bg-gray-200" : ""
            }`}
          >
            <FontAwesomeIcon icon={link.icon} className="mr-3 text-indigo-500" />
            <span>{link.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default SideBar;