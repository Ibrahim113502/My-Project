import React from "react"
import { Navbar } from "flowbite-react"
import { CiLogout } from "react-icons/ci";
function AdminNavBar() {
    return (
        <>
            <Navbar className="bg-customBlue !justify-start">
                <Navbar.Brand className="">
                    <img src="/AdminPage/AdminPhoto.jpg" className="mr-3 h-6 sm:h-9 rounded-full" alt="Admin Logo Image" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mufarij</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <span className="text-2xl dark:text-white font-bold">
                     Admin Pannel
                </span>
                <CiLogout className="ml-[5px] w-[25px] h-[44px] dark:text-white"/>
            </Navbar>
        </>
    )
}
export default AdminNavBar