import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import { TaskType } from './types';
const App: React.FC = () => {
    console.log("App component is rendering"); //For troubleshooting purposes
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const addTask = (newTask: TaskType) => {
        setTasks([...tasks, newTask]);
    };
    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };
    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            {tasks.map(task => (
                <Task key={task.id} task={task} toggleTask={toggleTaskCompletion} />
            ))}
        </div>
    );
};
export default App; 

//Troubleshooting using minimal App structure 


// import React from 'react';

// const App: React.FC = () => {
//     console.log("App component is rendering");
//     return <h1>Hello from App</h1>;
// };

// export default App;