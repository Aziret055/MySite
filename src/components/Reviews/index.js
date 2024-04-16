// src/App.js

import React, { useState } from 'react'
import ReviewBlock from '../ReviewBlock/ReviewBlock'
import './review.css'

function Reviews() {
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState('')
	const [auth, setAuth] = React.useState(true)

	const addTask = () => {
		if (newTask.trim() !== '') {
			setTasks([...tasks, { id: Date.now(), title: newTask }])

			setNewTask('')
		} else {
			alert('Error')
		}
	}

	const handleChange = event => {
		setAuth(event.target.checked)
	}
	const removeTask = index => {
		const updatedTasks = [...tasks]
		updatedTasks.splice(index, 1)
		setTasks(updatedTasks)
	}
	function keydown(e) {
		if (e.key === 'Enter') {
			addTask()
		}
	}
	console.log(tasks)

	return (
		<div className='container mx-auto '>
			<h1 className='text-3xl font-bold flex justify-center items-center my-11'>
				Reviews
			</h1>
			<div className='flex space-x-2 mb-4 my-24'>
				<input
					onKeyDown={keydown}
					type='text'
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
					className='inp p-2 border w-full'
					placeholder='Введите комментарий'
				/>
				<button
					onClick={addTask}
					className='butt p-2 bg-blue-500 text-white hover:bg-blue-700'
				>
					Add comments
				</button>
			</div>
			<ul className='list'>
				{tasks?.map((el, index) => (
					<ReviewBlock el={el} index={index} />
				))}
			</ul>
		</div>
	)
}

export default Reviews
