import { IoIosHome } from "react-icons/io";
import { Accordion, Dropdown } from 'flowbite-react';
import { MdOutlineMailOutline, MdOutlineContactPage } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaCircleArrowLeft } from "react-icons/fa6";
function AdminDashBoard() {
    return (
        <>
            <div className="bg-customBlue dark:bg-gray-800 dark:text-white w-[165px]">
                
                <ul>
                    <li className="flex">
                        <IoIosHome className="ml-[5px] w-[25px] h-[44px]" />
                        <p className="mt-[10px] text-sm font-semibold ml-3">Dashboard</p>
                    </li>
                    <li>
                        <span className="flex flex-auto">
                            <IoSettings className="ml-[5px] w-[25px] h-[44px] mt-3" />
                            <Accordion className="!p-0 bg-customBlue accordion-title dark:bg-gray-800" color="bg-customBlue" label="Settings" placement="bottom" size="sm">
                                <Accordion.Panel>
                                    <Accordion.Title className=" text-sm font-semibold text-black dark:text-white">
                                        Settings
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className=" text-xs font-semibold">Website Menu</p><br />
                                        <p className=" text-xs font-semibold">Website Settings</p><br />
                                        <p className=" text-xs font-semibold">Theme Settings</p>
                                    </Accordion.Content>
                                    {/* <Dropdown.Item >
                                        Website Menu
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        Website-Settings
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        Theme-Settings
                                    </Dropdown.Item> */}
                                </Accordion.Panel>
                            </Accordion>
                        </span>
                    </li>
                    {/* <hr className="dark:text-white" /> */}
                    <li className="flex">
                        <MdOutlineMailOutline className="ml-[5px] w-[25px] h-[44px]" />
                        <p className="mt-[10px] text-sm font-semibold ml-3">Contact us</p>
                    </li>
                    <hr />
                    <li className="flex">
                        <MdOutlineContactPage className="ml-[5px] w-[25px] h-[44px]" />
                        <p className="mt-[10px] text-sm font-semibold ml-3">Website Content</p>
                    </li>
                    <hr />
                    <li className="flex">
                        <FaUserPlus className="ml-[5px] w-[25px] h-[44px]" />
                        <p className="mt-[10px] text-sm font-semibold ml-3">Website Admin</p>
                    </li>
                    <hr />
                    <li className=" ml-12">
                        <a href="home">
                        <FaCircleArrowLeft  className="ml-[5px] w-[25px] h-[44px] " />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default AdminDashBoard