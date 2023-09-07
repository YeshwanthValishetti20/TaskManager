import {React,useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {

    const navigate=useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: ""});

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:80/auth/login`, {
            method: 'POST', 

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password })

        });

        const json = await response.json();
        console.log(json);

        if(json.success){
            //storing the auth token on the local storage and redirecting the logged in user to home page

            localStorage.setItem("token",json.token);
            navigate("/");
        }
        else{
            alert("Invalid credentials");
        }


    }
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-center bg-opacity-50 bg-emerald-100">
                <div className=" border shadow-2xl shadow-emerald-900  rounded-lg w-3/5 flex flex-col items-center bg-white my-5">
                    <h4 className="text-center font-bold text-2xl my-5 font-serif">Login in</h4>
                    <form onSubmit={onSubmit} className='w-full flex flex-col items-center'>
                        <div className="flex flex-col items-center w-full">
                            <input type="text" className="border px-3 py-3 outline-none w-4/5 rounded my-5" placeholder="Enter your email" name='email' onChange={onChange} />
                            <input type="text" className="border px-3 py-3 outline-none w-4/5 rounded my-5" placeholder="Enter your password" name='password' onChange={onChange} />
                        </div>
                        <button className=" border bg-teal-500 text-white px-3 py-2 font-extrabold my-4">Login</button>
                    </form>
                    <p className="my-3">Don't have an account? <Link className="font-bold underline" to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login