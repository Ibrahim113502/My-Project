import AdminForm from "./AdminForm"

function AdminEditingDashBoard() {
    return (
        <>
            <div className="flex-auto bg-editboard dark:bg-gray-800 dark:text-white w-2">
                <p className="text-2xl font-semibold text-stone-900 ml-4">Website Settings </p>
                 <AdminForm/>
            </div>
        </>
    )
}
export default AdminEditingDashBoard