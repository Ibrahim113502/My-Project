import React from "react";
import AdminNavBar from "./Componants/AdminNavbar";
import AdminPannel from './Componants/AdminPannel/index'
function AdminHomePage() {
    return (
        <>
         <div className="p-1  md:p-1 lg:p-1 dark:bg-gray-800">
         <AdminNavBar/>
         <AdminPannel/>
        </div> 
          
        </>
    )
}
export default AdminHomePage;