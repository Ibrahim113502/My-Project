import { FaAudioDescription } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FileInput, Datepicker, Button } from 'flowbite-react';
import { Label, Textarea } from 'flowbite-react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import AdminTable from "./AdminTable";
import axios from "axios";
function AdminForm() {
    // const [State,SetState]=useState([])
    // axios.post('https://jsonplaceholder.typicode.com/posts',State,)
    // .then((response)=>{console.log(response);})
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        axios('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    ...data
                }
            )
        }).then((response) => {alert(response.data) })
    }
    // console.log(State);

    return (
        <>
            <div>
                <form className="flex flex-wrap gap-y-4 mx-auto lg:mx-4 my-4 " onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-medium text-gray-900 dark:text-white mt-2 ml-2"> Your Name:</label>
                    <div className="basis-1/3 ml-3 relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <MdDriveFileRenameOutline className=" w-[18px] h-[44px] " />
                        </div>
                        <input type="text" {...register("Name:")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                          dark:focus:border-blue-500" placeholder="Enter Your Name" />
                    </div>
                    <label className="font-medium text-gray-900 dark:text-white mt-2 ml-[4rem]">Enter your Dish:</label>
                    <div className="basis-1/3 ml-3 relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaBowlFood className=" w-[18px] h-[44px] " />
                        </div>
                        <input type="text" {...register("title")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                          dark:focus:border-blue-500" placeholder="Enter Your Dish Name" />
                    </div>
                    <label className="font-medium text-gray-900 dark:text-white mt-2 ml-[10px]">Short Note Of Food:</label>
                    <div className="basis-1/3 ml-3 relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaAudioDescription className=" w-[18px] h-[44px] " />
                        </div>
                        <input type="text" {...register("description")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                          dark:focus:border-blue-500" placeholder="Note" />
                    </div>
                    <label className="font-medium text-gray-900 dark:text-white mt-2 ml-[20px]">Date Of Posted:</label>
                    <Datepicker {...register("Date")} className=" ml-12" />
                    <div id="fileUpload" className="max-w-md ml-3">
                        <div className="mb-2 block">
                            <Label htmlFor="file" value="Upload food image" />
                        </div>
                        <FileInput {...register("Image")} id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
                    </div>
                    <div className="ml-12" id="textarea">
                        <div className="mb-2 block">
                            <label className="font-medium text-gray-900 dark:text-white mt-2 ">Description</label>
                        </div>
                        <Textarea {...register("Description")}
                            id="comment"
                            placeholder="Step by Step Procedure..."
                            required
                            rows={4}
                            cols={75}
                        />
                    </div>
                    <Button className="break-inside-avoid-column bg-yellow-400 ml-[27rem]" type="submit">Submit</Button>
                </form>
                <AdminTable />
            </div>
        </>
    )
}
export default AdminForm