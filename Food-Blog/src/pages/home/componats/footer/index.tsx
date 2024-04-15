import React from "react";
import LoginForm from '../../../Loginform/index'
import { Button } from "flowbite-react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../../../../reducers/counterSlice";
import counterSlice from "../../../../reducers/counterSlice";
function Footerpage() {
    // const dispatch=useDispatch()
    // const value=useSelector((state:any) =>state.Counter.CounterValue)
    // console.log(value);
    return (
        <>
            <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
                {/* <h1>{value}</h1>
                <Button onClick={()=>dispatch(increment())}>+</Button>
                <Button>-</Button> */}
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src='/logo.png' className="mr-3  lg:h-10 h-12" />
                    
                    </a>
                    <p className="my-6 text-gray-500 dark:text-gray-400 font-serif">
"Discover recipes, tips, and food adventures at <b>Taste Of Food</b>. Celebrate the joy of great meals and unique flavors! 😋"</p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                        </li>
                        <li>
                            <a href="ApiExample" className="mr-4 hover:underline md:mr-6">Example</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">Taste Of Food™</a>. All Rights Reserved.</span>
                </div>
            </footer>
            {/* <LoginForm/> */}
        </>
    )
}
export default Footerpage;

// function state(state: unknown): unknown {
//     throw new Error("Function not implemented.");
// }
