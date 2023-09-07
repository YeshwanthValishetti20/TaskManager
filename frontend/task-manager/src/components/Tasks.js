import React, { useContext, useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import taskContext from '../context/tasks/taskContext';
import Navbar from './Navbar';

const Tasks = () => {
  const context = useContext(taskContext);
  const { tasks, getTasks, addTask, editTaskStatus,deleteTask } = context;

  const [task, setTask] = useState({ description: "", dueDate: Date.now });

  const { list_id } = useParams();

  // let isCompleted=false;

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  const handleClick = () => {

    if (task.description.length >= 5) {
      console.log(list_id);
      console.log(task.dueDate);
      console.log(Date.now)
      addTask(list_id, task.description, task.dueDate);
      setTask({description:"",dueDate:Date.now})

    }
    else {
      console.log("Enter a valid description of the task");
    }
  }

  const checkOverdue=(dueDate)=>{
    let currDate=new Date();
    if(currDate.getTime()>dueDate.getTime()){
      return true;
    }
    return false;
  }

  useEffect(() => {
    getTasks(list_id);
  }, []);

  return (

    <>

    <Navbar/>

    <div className='mt-5'>


      <div className=' w-screen flex items-center justify-center mb-10 '>
        <div className='border rounded-md border-lime-900 w-4/5 lg:w-3/5 flex flex-col items-center justify-center bg-emerald-800'>
          <h2 className='font-bold text-2xl my-3 text-white'>Add a new task</h2>

          <input placeholder='What to do?' className="border rounded-md py-3 px-3 w-4/5 outline-none" name='description' onChange={onChange} value={task.description} />


          <div className='flex w-4/5 items-center justify-center my-3'>
            <label htmlFor="dueDate" className='w-3/5 text-center text-white'>Set the due date</label>
            <input type="date" className="border rounded-md py-3 px-3 w-4/5 outline-none" name='dueDate' onChange={onChange} value={task.dueDate} />
          </div>

          <div className='flex items-center justify-center my-3 w-4/5'>
            <button className="text-white font-bold bg-emerald-400 px-3 py-2 mx-3 rounded-md cursor-pointer w-3/5" onClick={handleClick}>Add</button>
          </div>
        </div>
      </div>


      <div className='flex flex-col items-center justify-center'>

        <div className='flex  rounded-t  items-center justify-center px-3 py-3 w-11/12 mt-4 bg-emerald-400'>
          <h2 className='font-bold text-2xl text-white'>YOUR TASKS</h2>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-lime-900 rounded-b-md px-3 py-3 mb-4 w-11/12 bg-emerald-800'>
          {tasks.map((task) => {
            let isOverdue=false;
            let d=new Date(task.dueDate);
            isOverdue=checkOverdue(d);
            // console.log(isOverdue);

            // console.log("The die date of the task is:",d);
            return (
              
              <div className='border rounded-md flex items-center justify-center px-3 py-3 mx-3 my-3 bg-white' key={task._id}>
                <div className='flex flex-col items-start justify-center'>
                  <p className='font-semibold font-serif text-orange-600 text-center w-full'>{task.description}</p>

                  <div className='flex items-center justify-start'>
                    <label className='font-bold mx-2'>Due date:</label>
                    <p className='my-2 font-mono italic'>{d.getDate()}-{d.getMonth()}-{d.getFullYear()}</p>
                  </div>

                  <div className='flex w-full justify-start my-1'>
                    <label className='font-bold mx-2'>Status:</label>
                    <p className={`${task.isCompleted ? "text-green-700" :isOverdue?"text-red-700":"text-blue-700"} font-bold`}>{task.isCompleted ? "Completed" : isOverdue?"Overdue":"Ongoing"}</p>
                  </div>

                  {!task.isCompleted && <div className='flex w-full justify-start my-1'>
                    <input type="checkbox" name="status" value="status" className='mx-2' onChange={()=>{editTaskStatus(task._id)}} />
                    <label htmlFor="status">Mark as completed</label>
                  </div>}

                  <div className='flex items-center my-2'>
                    {!task.isCompleted && <Link to={`/${list_id}/updateTask/${task._id}`}><i className="fa-solid fa-pen-to-square m-3 fa-lg cursor-pointer" ></i></Link>}
                    <i className="fa-solid fa-trash mx-3 fa-lg cursor-pointer" onClick={()=>{deleteTask(task._id)}}></i>
                  </div>


                </div>

              </div>

            )
          })}

        </div>

      </div>

    </div >

    </>


  )
}

export default Tasks