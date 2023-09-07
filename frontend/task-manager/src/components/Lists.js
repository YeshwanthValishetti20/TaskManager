import React, { useContext, useEffect } from 'react'
import listContext from '../context/lists/listContext'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Lists = () => {
    const navigate=useNavigate();
    const context = useContext(listContext);
    const { lists, getLists,deleteList } = context;

    useEffect(() => {

        if(localStorage.getItem("token")){
            
            getLists();
        }
        else{
            navigate("/login");
        }


    }, [])

    return (
        <div className='border rounded-md flex flex-col items-center justify-start w-9/12 h-4/5 my-8  '>

            <div className='flex  border-lime-900 rounded-t-md items-center justify-between px-3 py-3 w-4/5 mt-4 bg-emerald-800'>
                <h2 className='font-bold text-2xl text-white'>YOUR LISTS</h2>
                <button className='text-white font-bold bg-emerald-400 px-3 py-2 mx-3'><Link to="/createList">Create new List</Link></button>
            </div>


            <div className='flex flex-col   items-center justify-between px-3 py-3 w-4/5 mb-4 overflow-y-auto no-scrollbar border border-slate-300'>
                {lists.map((list) => {
                    return (

                        <div className='border rounded-md flex w-full items-center justify-between px-3 py-3 mx-3 my-3 bg-emerald-800' key={list._id}>
                            <div className='flex items-center'>
                                <p className='text-white'>{list.title}</p>
                                <i className="fa-solid fa-trash mx-3 text-emerald-400 cursor-pointer " onClick={()=>{deleteList(list._id)}}></i>
                                <Link to={`/updateList/${list._id}`} className='cursor-pointer'><i className="fa-solid fa-pen-to-square mx-3 text-emerald-400"></i></Link>
                            </div>
                            <button className='text-white font-bold bg-emerald-400 px-3 py-2 mx-3'>
                            <Link to={`/${list._id}/tasks`} className='cursor-pointer'>View Tasks</Link>
                            </button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Lists