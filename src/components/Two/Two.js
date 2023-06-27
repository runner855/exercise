import React,  {useState} from 'react';
import "./Two.css";
import { RiDeleteBin5Fill } from 'react-icons/ri';

const Two = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([])

    const addTasks = () => {
        if(task !== ""){
            setTasks([...tasks, task]);
            setTask("")

            

        }
    }

    const removeTasks = (text) => {
        const newTasks = tasks.filter((task) => {
            return task !== text;
        });
        setTasks(newTasks)

    }
   

 
    return ( 
        <div className='two'>
        <div className='todo_header'>To Do App!!</div>
        <div className='input_wrapper'>
            <input type="text" placeholder='add you task' name="task" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button className='add_button' onClick={addTasks}>Add</button>
            {tasks && tasks.length > 0 ?<ul className='tasks_list'>{tasks.map((task, index) => {
                return (
                    <div className='task' key={index}>
                        <li>{task}<RiDeleteBin5Fill onClick={() => {removeTasks(task)}}/></li>
                        
                    </div>
                )

            })}</ul>: <div className='notaskfound'>No task Found!!</div>}
        </div>
     
        </div>
     );
}
 
export default Two;