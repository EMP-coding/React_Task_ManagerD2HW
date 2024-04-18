import React from 'react';
import { TaskType } from './types';
interface TaskProps {
    task: TaskType;
    toggleTask: (id: number) => void;
}
const Task: React.FC<TaskProps> = ({ task, toggleTask }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due by: {task.dueDate}</p>
            <button onClick={() => toggleTask(task.id)}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            {task.completed && <span> ✓</span>} 
        </div>
    );
};
export default Task;