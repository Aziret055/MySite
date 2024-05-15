import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const ReviewBlock = ({ el, index }) => {
	const [auth, setAuth] = React.useState(true)
	const [countDislike, setCountDislike] = useState(1)
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [tasks, setTasks] = useState([])
	const [count, setCount] = useState(12)
	const [like, setLike] = useState(false)
	const handleChange = event => {
		setAuth(event.target.checked)
	}
	const handleMenu = event => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const removeTask = index => {
		const updatedTasks = [...tasks]
		updatedTasks.splice(index, 1)
		setTasks(updatedTasks)
	}

	return (
		<div id=''>
			<div className=''>
				<div className='cc flex items-start justify-start gap-8'>
					<Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
					<div className='cl w-[600px]'>
						<h1 className=''>kojomberdiev</h1>
						<li
							key={index}
							className='listReview flex justify-between items-center p-2  w-full px-4  border-b'
						>
							<span>{el.title}</span>

							<div>
								<IconButton
									size='large'
									aria-label='account of current user'
									aria-controls='menu-appbar'
									aria-haspopup='true'
									onClick={handleMenu}
									color='inherit'
								>
									<HiOutlineDotsVertical />
								</IconButton>
								<Menu
									id='menu-appbar'
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right'
									}}
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									<MenuItem
										onClick={() => {
											removeTask(index)
											handleClose()
										}}
									>
										Delete
									</MenuItem>
									<MenuItem onClick={handleClose}>Edit</MenuItem>
								</Menu>
							</div>
						</li>
						<span className='flex gap-6'>
							<div class='like-dislike-container'>
								<div class='icons-box'>
									<IconButton class='icons'>
										<AiFillLike />
									</IconButton>
									<IconButton class='icons'>
										<AiFillDislike />
									</IconButton>
								</div>
							</div>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewBlock
