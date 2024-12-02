import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

type Task = {
    id: number;
    text: string;
    completed: boolean;
};

type TaskListProps = {
    tasks?: Task[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks: propTasks } = {}) => {
    const [tasks, setTasks] = useState<Map<number, Task>>(new Map(propTasks?.map(t => [t.id, t])));
    const [newTask, setNewTask] = useState<string>("");

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(new Map(JSON.parse(storedTasks)));
        }
    }, []);

    useEffect(() => {
        if (tasks.size > 0) {
            localStorage.setItem("tasks", JSON.stringify(Array.from(tasks.entries())));
        }
    }, [tasks]);

    const handleAddTask = () => {
        if (newTask.trim()) {
            const newTaskObj: Task = {
                id: Date.now(),
                text: newTask,
                completed: false,
            };
            setTasks((prevTasks) => new Map(prevTasks.set(newTaskObj.id, newTaskObj)));
            setNewTask("");
        }
    };

    const handleRemoveTask = (id: number) => {
        setTasks((prevTasks) => {
            const updated = new Map(prevTasks);
            updated.delete(id);
            return updated;
        });
    };

    const handleToggleTask = (id: number) => {
        setTasks((prevTasks) => {
            const updated = new Map(prevTasks);
            const task = updated.get(id);
            if (task) {
                updated.set(id, { ...task, completed: !task.completed });
            }
            return updated;
        });
    };

    return (
        <div>
            <h1>Task List</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add</button>

            {tasks.size === 0 ? (
                <p>No tasks to display</p>
            ) : (
                <div>
                    {Array.from(tasks.values()).map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onRemove={handleRemoveTask}
                            onToggle={handleToggleTask}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList;
