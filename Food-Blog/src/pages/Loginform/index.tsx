import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { SubmitHandler } from "react-hook-form"
import React from 'react';
import axios from 'axios';
function LoginForm({ closeModal }) {
    const navigate = useNavigate();
    // const [Admindetail, SetAdmindetail] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:any) => {
        console.log(data)
        const { username, password } = data;
        axios('https://fakestoreapi.com/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
            username: username,
            password: password
        })
        }).then((response) => { 
            console.log(response.data)
            if(response)
            {
                console.log("Hai bro");
                navigate('/AdminLogin');
                closeModal(); 
            }

         })
         .catch((error) => {
            console.log(error);
             alert("Incorrect Password");   
             closeModal(); 
    })}

    // console.log(Admindetail)
    return (
        <>
            <Modal.Header className='justify-center'>Sign In </Modal.Header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email" placeholder="name@company.com" {...register("username", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" type="password" {...register("password", { required: true })} />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <a href="/modal" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                            Forget Password?
                        </a>
                    </div>
                    <div className="w-full">
                        <Button type="submit">Log in to your account</Button>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?&nbsp;
                        <a href="/modal" className="text-cyan-700 hover:underline dark:text-cyan-500">
                            Create account
                        </a>
                    </div>
                </div>
            </form>

        </>
    )
}
export default LoginForm