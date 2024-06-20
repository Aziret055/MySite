import { Box, Modal } from '@mui/material'
import React from 'react'
import sittigPhoto2 from '../../img/greenPhoto.jpg'
import sittigPhoto from '../../img/motorBike.jpg'
import blackJacet from '../../img/photoooo1.jpg'
import './style.css'
const About = () => {
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
		<div id='about'>
			<div className='container'>
				<h1 className='text-4xl text-center my-[1	00px] font-black'>
					<div class='loader'>
						<p class='text'>About Me</p>
					</div>
				</h1>

				<div className='about flex justify-center my-32'>
					<div className='relative about-text bg-zinc-800 rounded-xl   p-6 text-center text-zinc-200 font-semibold flex items-center justify-center mx-auto'>
						<div className='dis'>
							<img
								data-aos='zoom-out-up'
								onClick={handleOpen}
								className='aboutImgSmall andBottom w-[230px] absolute top-[-60px] left-[-225px]  bg-zinc-800 p-7 rounded-xl object-cover'
								src={blackJacet}
								alt='img'
							/>
							<img
								data-aos='zoom-out-left'
								onClick={handleOpen}
								className='aboutImgSmall w-[230px] object-contain h-[300px] absolute bottom-[-60px] p-4 left-[-225px]  bg-zinc-800 rounded-xl '
								src={sittigPhoto}
								alt='img'
							/>
							<img
								className='aboutBig w-82 absolute bottom-[130px] right-[-300px]  bg-zinc-800 p-7 rounded-xl object-cover'
								src={sittigPhoto2}
								alt='img'
							/>
						</div>

						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby='modal-modal-title'
							aria-describedby='modal-modal-description'
						>
							<Box sx={style}>
								<img src={sittigPhoto} alt='img' />
							</Box>
						</Modal>
						<p className='aboutPara'>
							Всем еще раз привет! Так что вы уже знаете, что меня зовут Азирет.
							Немного о себе: студент, 18 лет, спортсмен-футболист, я люблю
							творчество с детства, живу в Биш кек. Почему программирование? Всё
							элементарно - мне нравится, профессия будущего, благодаря которые
							я могу обеспечить сам и выполнить моя мечта - путешествие, на
							данный момент я специализируюсь на веб-дизайне, фронтенде
							разработка сайтов под ключ. Почему вам следует выбрать меня? К
							каждому заказу отношусь с большим вниманием ответственность и
							любовь, как я хочу сделать себе имя, исключить плагиат и
							халатность, полностью изучить проект, клиент и его цель аудитории,
							работаем на качество, стараемся сделать заказ максимально быстро и
							максимально однозначно, принимая во внимание учитывать все правки
							и пожелания. Доверившись мне, вы получите максимальную отдачу от
							вашего проекта, сэкономите свои нервы и время. Если вы
							заинтересованы во мне, вы хотите чтобы узнать что-то больше или
							использовать мой услуги, то я предоставлю все свои контакты ниже.
						</p>

						<div className='circle'></div>
						<div className='circle1'></div>
						<div className='circle2'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
