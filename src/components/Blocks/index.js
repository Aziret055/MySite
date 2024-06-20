import React from 'react'
import img3 from '../../img/bootstrap-stack.png'
import img1 from '../../img/htmlAndCss.jpg'
import img9 from '../../img/pnpm.png'
import img2 from '../../img/reactImg.svg'
import img5 from '../../img/redux-toolkit.webp'
import img4 from '../../img/sass.jpg'
import img8 from '../../img/styled.webp'
import img7 from '../../img/tailwindAndMuiTwo.png'
import img6 from '../../img/typescript.jpg'
import img10 from '../../img/vite.png'
import './blocks.css'
const Blocks = () => {
	return (
		<div id='block'>
			<div className='container'>
				<h1 className='text-white text-3xl text-center my-5'>
					<button class='button'>
						<span class='button__span'>Технологи Разработки</span>
					</button>
				</h1>
				<div className='bb flex flex-wrap gap-4 ml-11 mt-11'>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1500'
						className='blocksBock flex items-center justify-center bg-zinc-700 h-[200px] w-[250px] mx-auto rounded-xl	 flex-col '
					>
						<img
							className='h-[140px] w-[270px] rounded-lg'
							src={img1}
							alt='img'
						/>
						<h1 className='text-white font-bold py-5'>HTML CSS</h1>
					</div>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1200'
						className='blocksBock flex items-center justify-center bg-zinc-700 h-[200px] w-[250px] rounded-xl mx-auto	 flex-col'
					>
						<img
							className='h-[200px] mt-[-3px] rounded-xl w-[260px]'
							src={img2}
							alt='img'
						/>
						<h1 className='text-white font-bold py-4'>React</h1>
					</div>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='2300'
						className='blocksBock flex items-center justify-center bg-zinc-700  h-[200px] w-[250px] rounded-xl	mx-auto flex-col gap-8'
					>
						<img
							className='h-[130px] w-[270px] rounded-lg'
							src={img3}
							alt='img'
						/>
						<h1 className='text-white font-bold mb-4 mt-[-10px]'>Bootstrap</h1>
					</div>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='2200'
						className='blocksBock flex items-center justify-between bg-zinc-700 h-[200px] w-[250px] rounded-xl	mx-auto flex-col'
					>
						<img
							className='h-auto w-[250px] rounded-lg'
							src={img4}
							alt='img'
						/>
						<h1 className='text-white font-bold mb-4'>Sass and Module</h1>
					</div>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1100'
						className='blocksBock flex items-center justify-between bg-zinc-700 h-[200px] w-[250px] rounded-xl pb-[16px]	mx-auto flex-col'
					>
						<img
							className='h-[140px] w-[273px] rounded-lg object-cover'
							src={img5}
							alt='img'
						/>
						<h1 className='text-white font-bold'>Redux and Toolkit</h1>
					</div>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='2600'
						className='blocksBock flex items-center justify-between pb-4 bg-zinc-700 h-[200px] w-[250px] rounded-xl	mx-auto flex-col'
					>
						<img
							className='h-auto w-[250px] rounded-lg'
							src={img6}
							alt='img'
						/>
						<h1 className='text-white font-bold'>Typescript</h1>
					</div>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1900'
						className='blocksBock flex items-center justify-between pb-[15px] bg-zinc-700  h-[200px] w-[250px] rounded-xl	mx-auto flex-col'
					>
						<img
							className='h-[140px] w-full rounded-lg object-cover'
							src={img7}
							alt='img'
						/>
						<h1 className='text-white font-bold'>Tailwind And Mui</h1>
					</div>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1800'
						className='blocksBock flex items-center justify-between pb-4 bg-zinc-700 h-[200px] w-[250px] rounded-xl	mx-auto flex-col'
					>
						<img
							className='h-auto w-[250px] rounded-lg'
							src={img8}
							alt='img'
						/>
						<h1 className='text-white font-bold'>Styled Components</h1>
					</div>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1800'
						className='blocksBock flex items-center justify-between pb-4 bg-zinc-700 h-[200px] w-[250px] rounded-xl	mx-auto flex-col'
					>
						<img
							className='h-auto w-[250px] rounded-lg'
							src={img9}
							alt='img'
						/>
						<h1 className='text-white font-bold'>npm yarn pnpm</h1>
					</div>
					<div
						data-aos='flip-left'
						data-aos-easing='ease-out-cubic'
						data-aos-duration='1800'
						className='blocksBock flex items-center justify-between pb-4 bg-zinc-700 h-[200px] w-[250px] rounded-xl	mx-auto flex-col'
					>
						<img
							className='h-[140px] w-[275px] rounded-lg'
							src={img10}
							alt='img'
						/>
						<h1 className='text-white font-bold'>React-Vite</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blocks
