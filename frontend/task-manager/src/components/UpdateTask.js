import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import taskContext from '../context/tasks/taskContext';
import { useNavigate } from "react-router-dom";


const UpdateTask = () => {
    const { list_id,task_id } = useParams();
    let showError = false;
    const navigate = useNavigate();
    const context = useContext(taskContext);
    const [task, setTask] = useState({ description: "", dueDate: Date.now });
    const { editTask } = context;

    const onChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const handleClick = () => {

        if (task.description.length >= 5) {
            editTask(list_id,task_id, task.description,task.dueDate);
            // setTask({ title: "" });
            navigate("/");
        }
        else {
            console.log("Enter a valid description of the task");
            showError = true;
            console.log(showError);
        }
        // console.log(id);
    }
    return (
        <div className='h-screen w-screen flex items-center justify-center bg-emerald-100'>
            <div className='rounded-md border-lime-900 w-3/5 flex flex-col items-center justify-center shadow-2xl shadow-emerald-900 bg-white'>
                <h2 className='font-bold text-2xl my-3'>Update the task</h2>


                <input placeholder='What to do?' className={`border rounded-md py-3 px-3 w-4/5 outline-none ${showError ? "border-red-600" : ""}`} name='description' onChange={onChange} value={task.description} />

                <div className='flex w-4/5 items-center justify-center my-3'>
                    <label htmlFor="dueDate" className='w-3/5 text-center'>Set the due date</label>
                    <input type="date" className="border rounded-md py-3 px-3 w-4/5 outline-none" name='dueDate' onChange={onChange} />
                </div>


                <div className='flex items-center justify-end my-3 w-4/5'>
                    <button className="border bg-teal-500 text-white px-3 py-2 font-extrabold my-4 mx-3 cursor-pointer" onClick={handleClick}>Update</button>
                    <button className="border bg-teal-500 text-white px-3 py-2 font-extrabold my-4"><Link to="/">Cancel</Link></button>
                </div>
            </div>
        </div>
    )
}

export default UpdateTask