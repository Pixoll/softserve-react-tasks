import React from "react";

type Task = {
    id: number;
    text: string;
    completed: boolean;
};

type TaskItemProps = {
    task: Task;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onRemove, onToggle }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
            </span>
            <button onClick={() => onRemove(task.id)}>Remove</button>
        </div>
    );
};

export default TaskItem;
