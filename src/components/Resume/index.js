import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import axios from 'axios'
import React, { useState } from 'react'
import resume from '../../img/Снимок экрана 2024-04-15 180139.png'
import './resume.css'
const Resume = () => {
	const TOKEN = '6765800478:AAHLZX0lTnDw9BZ195dhjWvynf6-DqcnorQ'
	const CHAT_ID = '-1001993221994'
	const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [messages, setMessages] = useState('')
	function addProduct(e) {
		e.preventDefault()
		let message = `<b> Заявка моего сайта Азирет!</b>\n`
		message += ` <b> Name: </b> ${name}\n`
		message += ` <b> Email: </b> ${email}\n`
		message += ` <b> Phone: </b> ${phone}\n`
		message += ` <b> Message: </b> ${messages}\n`
		axios.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: message
		})
	}

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 700,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4
	}
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div id='resume'>
			<div className='container'>
				<h1 className='resumeText text-3xl text-center my-11 font-black'>
					Resume And Contact Me
				</h1>
				<div className='resumeRod flex items-center justify-between px-[100px] relative mb-[100px]'>
					<div className=' mt-11'>
						<div class='resumeForm card'>
							<span class='title'>Contact me</span>
							<form onSubmit={addProduct} class='form'>
								<div className='flex items-center justify-center gap-7'>
									<div class='group www'>
										<input
											onChange={e => setName(e.target.value)}
											placeholder='‎'
											type='text'
											required=''
										/>
										<label for='name'>Name</label>
									</div>
									<div class='group www'>
										<input
											onChange={e => setEmail(e.target.value)}
											placeholder='‎'
											type='email'
											id='email'
											name='email'
											required=''
										/>
										<label for='email'>Email</label>
									</div>
								</div>
								<div class='group'>
									<input
										onChange={e => setPhone(e.target.value)}
										placeholder='‎'
										type='text'
										required=''
									/>
									<label>Phone</label>
								</div>
								<div class='group'>
									<input
										className='h-[100px]'
										onChange={e => setMessages(e.target.value)}
										placeholder='‎'
										id='comment'
										name='comment'
										rows='5'
										required=''
									></input>
									<label for='comment'>Message</label>
								</div>
								<button type='submit'>Submit</button>
							</form>
						</div>
					</div>
					{/* ///////////////////////////////////////////////////// */}
					<div class='aboutGroup group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800'>
						<div
							alt='image here'
							class='absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800'
						>
							<img
								className='img1'
								onClick={handleOpen}
								src={resume}
								alt='img'
							/>
						</div>

						<div class=''>
							<h2 class='text-2xl font-bold mb-2 text-gray-100'> MY RESUME </h2>
							<p class='text-gray-200 line-clamp-3'>
								hello again, it’s me and my resume, here it’s written about me
								and my skills where I taught, look at my resume and appreciate
							</p>
						</div>
						<button
							onClick={handleOpen}
							class='hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6'
						>
							Look
						</button>
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby='modal-modal-title'
							aria-describedby='modal-modal-description'
						>
							<Box sx={style}>
								<img src={resume} alt='img' />
							</Box>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume
