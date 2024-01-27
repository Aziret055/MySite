// src/App.js
import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";

function Reviews() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold flex justify-center items-center my-11">Reviews</h1>
      <div className="flex space-x-2 mb-4 my-24">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 border w-full border-gray-300"
        placeholder='Write Something'/>
        <button
          onClick={addTask}
          className="p-2 bg-blue-500 text-white hover:bg-blue-700"
        >
          Add comments
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-2  w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <span>{task}</span>
            <button
              onClick={() => removeTask(index)}
              className="p-1 bg-red-500 rounded-full text-white hover:bg-red-700"> <MdDelete /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
