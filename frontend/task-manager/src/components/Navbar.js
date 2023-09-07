import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [name, setName] = useState("");

  const navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }

  const getUsername = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/auth/getUser`, {
      method: 'POST',

      headers: {
        "auth-token": localStorage.getItem("token")
      },

    });

    const json = await response.json();
    setName(json.name);
  }

  useEffect(()=>{
    if(localStorage.getItem("token")){
      getUsername();
    }
  },[])


  return (
    <nav className="bg-emerald-900 text-white px-3 py-3 flex justify-end w-full">
      <ul className="flex items-center">
        <li className="mx-5 cursor-pointer"><Link to="/" className=' underline underline-offset-4 decoration-white'>Home</Link></li>
        <li className="mx-5 cursor-pointer "><Link to="/" className='font-bold' >{name}</Link></li>
      </ul>
      { !localStorage.getItem("token") ?<div>
        <button className="text-white font-bold bg-emerald-400 px-3 py-2 mx-3"><Link to="/login">Log in</Link></button>
        <button className="text-white font-bold bg-emerald-400 px-3 py-2 mx-3"><Link to="/signup">Sign up</Link></button>
      </div>:<button className="text-white font-bold bg-emerald-400 px-3 py-2 mx-3" onClick={handleLogout}>Log out</button>}
    </nav>

  )
}

export default Navbar