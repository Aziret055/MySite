import axios from 'axios'
import React, { useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
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
		if (phone === '' || email === '' || messages === '' || name === '') {
			alert('Заполните пустое поле')
		} else {
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
			setPhone('')
			setEmail('')
			setName('')
			setMessages('')
		}
	}

	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div id='resume'>
			<div className='container'>
				<h1
					data-aos='fade-up'
					data-aos-duration='2000'
					className='resumeText text-3xl text-center my-[100px] font-black'
				>
					<a href='#' className='btn-shine text-3xl'>
						Возобновите работу и свяжитесь со мной
					</a>
				</h1>
				<div className='resumeRod flex items-center justify-between px-[100px] relative pt-11 mb-[100px]'>
					<div className=' mt-11'>
						<div class='resumeForm card'>
							<span class='title'>Свяжитесь со мной</span>
							<form onSubmit={addProduct} class='form'>
								<div className='flex items-center justify-center gap-7'>
									<div
										data-aos='fade-up'
										data-aos-anchor-placement='top-bottom'
										class='group www'
									>
										<input
											value={name}
											onChange={e => setName(e.target.value)}
											placeholder='‎'
											type='text'
											required=''
										/>
										<label for='name'>Имя</label>
									</div>
									<div
										data-aos='fade-up'
										data-aos-anchor-placement='top-bottom'
										class='group www'
									>
										<input
											value={email}
											onChange={e => setEmail(e.target.value)}
											placeholder='‎'
											type='email'
											id='email'
											name='email'
											required=''
										/>
										<label for='email'>Eмайл</label>
									</div>
								</div>
								<div
									data-aos='fade-up'
									data-aos-anchor-placement='top-bottom'
									class='group'
								>
									<input
										value={phone}
										onChange={e => setPhone(e.target.value)}
										placeholder='‎'
										type='text'
										required=''
									/>
									<label>Номер</label>
								</div>
								<div
									data-aos='fade-up'
									data-aos-anchor-placement='top-bottom'
									class='group'
								>
									<input
										value={messages}
										className='h-[100px]'
										onChange={e => setMessages(e.target.value)}
										placeholder='‎'
										id='comment'
										name='comment'
										rows='5'
										required=''
									></input>
									<label for='comment'>Сообщение</label>
								</div>
								<button
									data-aos='fade-up'
									data-aos-anchor-placement='top-bottom'
									type='submit'
								>
									Submit
								</button>
							</form>
						</div>
					</div>
					{/* ///////////////////////////////////////////////////// */}
					<div
						data-aos='fade-up'
						data-aos-duration='2000'
						class='aboutGroup group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800'
					>
						<div
							data-aos='flip-left'
							data-aos-easing='ease-out-cubic'
							data-aos-duration='2000'
							alt='image here'
							class='absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800'
						>
							<Zoom>
								<img
									className='img1'
									// onClick={handleOpen}
									src={resume}
									alt='img'
								/>
							</Zoom>
						</div>

						<div class=''>
							<h2 class='text-2xl font-bold mb-2 text-gray-100'>
								{' '}
								Мой резюме{' '}
							</h2>
							<p class='text-gray-200 line-clamp-3'>
								еще раз здравствуйте, это я и мое резюме, здесь написано обо мне
								и мои навыки там, где я преподавал, посмотрите мое резюме и
								оцените
							</p>
						</div>
						<button
							onClick={handleOpen}
							class='hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6'
						>
							Чекай
						</button>
						{/* <Modal
							open={open}
							onClose={handleClose}
							aria-labelledby='modal-modal-title'
							aria-describedby='modal-modal-description'
						>
							<Box className='resumePhotos'>
								<img onClick={handleClose} src={resume} alt='img' />
							</Box>
						</Modal> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume
