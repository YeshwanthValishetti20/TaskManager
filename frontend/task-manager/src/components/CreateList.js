import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import listContext from '../context/lists/listContext';
import { useNavigate } from "react-router-dom";

const CreateList = () => {
    let showError=false;
    const navigate = useNavigate();
    const context = useContext(listContext);
    const [list, setList] = useState({ title: "" });
    const { addList } = context;

    const onChange = (e) => {
        setList({ title: e.target.value });
    }

    const handleClick = () => {

        if (list.title.length >= 2) 
        {
            console.log(list.title);
            addList(list.title);
            setList({ title: "" });
            navigate("/");
        }
        else{
            console.log("Enter a valid title");
            showError=true;
            console.log(showError);
        }
    }
    return (
        <div className='h-screen w-screen flex items-center justify-center bg-emerald-100'>
            <div className='rounded-md border-lime-900 w-3/5 flex flex-col items-center justify-center shadow-2xl shadow-emerald-900 bg-white'>
                <h2 className='font-bold text-2xl my-3'>Create a new List</h2>
                <input placeholder='Enter the name of the list' className={`border rounded-md py-3 px-3 w-4/5 outline-none ${showError ? "border-red-600":""}`} name='title' onChange={onChange} value={list.title} />
                <div className='flex items-center justify-end my-3 w-4/5'>
                    <button className="border bg-teal-500 text-white px-3 py-2 font-extrabold my-4 mx-3 cursor-pointer" onClick={handleClick}>Create</button>
                    <button className="border bg-teal-500 text-white px-3 py-2 font-extrabold my-4"><Link to="/">Cancel</Link></button>
                </div>
            </div>
        </div>
    )
}

export default CreateList