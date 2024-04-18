import React, {useState} from "react";
import { TaskType } from "./types";

interface TaskFormProps {
    addTask: (task: TaskType) => void; 
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
    const[title, setTitle] = useState<string>('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('')


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTask: TaskType = {
        id: Date.now(),
        title,
        description,
        dueDate,
        completed: false,
    }

    addTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate(''); 
};

return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <button type="submit">Add Task</button>
    </form>
);
};


export default TaskForm;