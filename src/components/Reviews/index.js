// src/App.js

import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify'

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
			noti()
		}
	}
	function noti() {
		toast.error('Заполните пустое поле!', {
			position: 'top-right',
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
			transition: Bounce
		})
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
		<div id='review'>
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

					<button onClick={addTask} className='butt '>
						Add
					</button>
				</div>
				<ul className='list'>
					{tasks?.map((el, index) => (
						<ReviewBlock el={el} index={index} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default Reviews
