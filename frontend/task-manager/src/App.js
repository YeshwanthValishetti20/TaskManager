// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
// import ListState from './context/lists/ListState';
// import CreateList from './components/CreateList';
// import UpdateList from './components/UpdateList';
// import Tasks from './components/Tasks';
// import TaskState from './context/tasks/TaskState';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import UpdateTask from './components/UpdateTask';
// import Cal from './components/Cal';

// function App() {
//   return (
//     <TaskState>
//       <ListState>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/createList" element={<CreateList />} />
//             <Route path="/updateList/:id" element={<UpdateList />} />
//             <Route path="/:list_id/tasks" element={<Tasks />} />
//             <Route path="/:list_id/updateTask/:task_id" element={<UpdateTask/>} />
//             <Route path="/cal" element={<Cal />} />
//           </Routes>
//         </Router>
//       </ListState>
//     </TaskState>
//   );
// }

// export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Default from './components/Default'; // Import the Default component
import ListState from './context/lists/ListState';
import CreateList from './components/CreateList';
import UpdateList from './components/UpdateList';
import Tasks from './components/Tasks';
import TaskState from './context/tasks/TaskState';
import Login from './components/Login';
import Signup from './components/Signup';
import UpdateTask from './components/UpdateTask';
import Cal from './components/Cal';

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <TaskState>
      <ListState>
        <Router>
          <Routes>
            {/* Use the Default component as the starting page */}
            {/* <Route path="/" element={isAuthenticated ? <Home /> : <Default />} /> */}
            <Route path="/" element={<Default />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/createList" element={<CreateList />} />
            <Route path="/updateList/:id" element={<UpdateList />} />
            <Route path="/:list_id/tasks" element={<Tasks />} />
            <Route path="/:list_id/updateTask/:task_id" element={<UpdateTask />} />
            <Route path="/cal" element={<Cal />} />
          </Routes>
        </Router>
      </ListState>
    </TaskState>
  );
}

export default App;
