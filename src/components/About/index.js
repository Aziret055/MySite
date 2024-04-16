import { Box, Modal } from '@mui/material'
import React from 'react'
import sittigPhoto2 from '../../img/greenPhoto.jpg'
import sittigPhoto from '../../img/motorBike.jpg'
import blackJacet from '../../img/photoooo1.jpg'
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
				<h1 className='text-4xl text-center my-14 font-black'>About me</h1>
				<div className='about flex justify-center my-32'>
					<div className='relative about-text bg-zinc-800 rounded-xl  w-96 p-6 text-center text-zinc-200 font-semibold flex items-center justify-center mx-auto'>
						<img
							onClick={handleOpen}
							className='w-[230px] absolute top-[-60px] left-[-225px]  bg-zinc-800 p-7 rounded-xl object-cover'
							src={blackJacet}
							alt='img'
						/>
						<img
							onClick={handleOpen}
							className='w-[230px] object-contain h-[300px] absolute bottom-[-60px] p-4 left-[-225px]  bg-zinc-800 rounded-xl '
							src={sittigPhoto}
							alt='img'
						/>
						<img
							className='w-82 absolute bottom-[130px] right-[-300px]  bg-zinc-800 p-7 rounded-xl object-cover'
							src={sittigPhoto2}
							alt='img'
						/>
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
						<p>
							Hello again everyone! So, you <br /> already know that my name is
							Aziret. A little <br /> about myself: student, 18 y.o., <br />{' '}
							athlete-football player, I love <br /> creativity since childhood,
							I live in <br />
							Bishkek. Why programming? <br /> Everything is elementary - I like
							it, <br /> the profession of the future, thanks to <br /> which I
							can provide myself and fulfill <br /> my dream - travel, at the
							moment I <br /> specialize in web design, front-end <br />{' '}
							development, turnkeywebsites. <br /> Why should you choose me?{' '}
							<br /> I approach each order with great <br /> responsibility and
							love, as I want to <br /> make a name for myself, exclude <br />{' '}
							plagiarism and negligence, fully study <br /> the project, the
							client and its target <br /> audience, work for quality, trying to{' '}
							<br /> make an order as quickly and <br /> uniquely as possible,
							taking into <br /> account all the edits and wishes. <br />
							By trusting me, you will get the <br /> maximum return for your
							project, <br /> save your nerves and time. <br />
							If you are interested in me , you want <br /> to know something
							more or use my <br /> services, then I will provide all my <br />{' '}
							contacts below.
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
