import AdminDashBoard from './AdminDashBoard/index'
import AdminEditingDashBoard from './AdminEditIngDashBoard/index'
function AdminPannel(){
    return(
        <>
        <div className="flex flex-row ">
          <AdminDashBoard/>  
          <AdminEditingDashBoard/>
        </div>
        </>
    )
}
export default AdminPannel