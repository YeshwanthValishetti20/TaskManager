import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// require('dotenv').config()

const Signup = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();


        const response = await fetch(`http://localhost:80/auth/createUser`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })

        });

        const json = await response.json();
        console.log(json);

        if (json.success) {   //checking if we successfully got the response or not
            //saving the auth token and redirecting

            localStorage.setItem("token", json.token);  //saving the auth token that we got on logging in the localstorage so that it can be used to fetch the notes of the logged in user

            navigate('/');   //redirecting to the home page


        }
        else {
            alert("Error");
        }
    }


    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-center bg-opacity-50 bg-emerald-100">
                <div className=" border shadow-2xl shadow-emerald-900 rounded-lg w-3/5 flex flex-col items-center bg-white my-5">
                    <h4 className="text-center font-bold text-2xl my-5 font-serif">Create Account</h4>
                    <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
                        <div className="flex flex-col items-center w-full">
                            <input type="text" className="border px-3 py-3 outline-none w-4/5 rounded my-5" placeholder="Enter your name" name='name' onChange={onChange} />
                            <input type="email" className="border px-3 py-3 outline-none w-4/5 rounded my-5" placeholder="Enter your email" name='email' onChange={onChange} />
                            <input type="password" className="border px-3 py-3 outline-none w-4/5 rounded my-5" placeholder="Enter your password" name='password' onChange={onChange} />

                            <input type="password" className={`px-3 py-3 outline-none w-4/5 rounded my-5 ${credentials.cpassword !== "" && credentials.password !== credentials.cpassword ? " border-red-600 shadow-sm shadow-red-400 border" : "border"}`} placeholder="Confirm your password" name='cpassword' onChange={onChange} />

                            {credentials.cpassword !== "" && credentials.password !== credentials.cpassword && <div  className="form-text text-red-600">Confirm password must be same as password</div>}

                        </div>
                        <button className=" border bg-teal-500 text-white px-3 py-2 font-extrabold my-4">SIGN UP</button>
                    </form>
                    <p className="my-3">Already have an account? <Link className="font-bold underline" to="/login">Login here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup