import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ListState from './context/lists/ListState';
import CreateList from './components/CreateList';
import UpdateList from './components/UpdateList';
import Tasks from './components/Tasks';
import TaskState from './context/tasks/TaskState';
import Login from './components/Login';
import Signup from './components/Signup';
import UpdateTask from './components/UpdateTask';

function App() {
  return (
    <TaskState>
      <ListState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/createList" element={<CreateList />} />
            <Route path="/updateList/:id" element={<UpdateList />} />
            <Route path="/:list_id/tasks" element={<Tasks />} />
            <Route path="/:list_id/updateTask/:task_id" element={<UpdateTask/>} />
          </Routes>
        </Router>
      </ListState>
    </TaskState>
  );
}

export default App;
