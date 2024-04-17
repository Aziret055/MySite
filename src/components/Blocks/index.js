import React from 'react'
import img1 from '../../img/1.png'
import img3 from '../../img/3.png'
import img4 from '../../img/4.png'
import img5 from '../../img/5.png'
import img6 from '../../img/6.png'
import img7 from '../../img/7.png'
import img8 from '../../img/8.png'
import img2 from '../../img/UI.png'
import './blocks.css'
const Blocks = () => {
	return (
		<div id='block'>
			<div className='container'>
				<div className='bb flex flex-wrap gap-4 ml-11 mt-11'>
					<div className='blocksBock flex items-center justify-center bg-zinc-700 h-[240px] w-[300px] mx-auto rounded-xl	 flex-col '>
						<img
							className='h-auto max-w-[270px] rounded-lg'
							src={img1}
							alt='img'
						/>
						<h1 className='text-white font-bold '>Product Design</h1>
					</div>
					<div className='blocksBock flex items-center justify-center bg-zinc-700 h-[240px] w-[300px] rounded-xl mx-auto	 flex-col gap-8'>
						<img
							className='h-auto max-w-[270px] rounded-lg'
							src={img2}
							alt='img'
						/>
						<h1 className='text-white font-bold'>UX/UI Design</h1>
					</div>
					<div className='blocksBock flex items-center justify-center bg-zinc-700  h-[240px] w-[300px] rounded-xl	mx-auto flex-col gap-8'>
						<img
							className='h-auto max-w-[270px] rounded-lg'
							src={img3}
							alt='img'
						/>
						<h1 className='text-white font-bold'>Icon Design</h1>
					</div>
					<div className='blocksBock flex items-center justify-center bg-zinc-700 h-[240px] w-[300px] rounded-xl	mx-auto flex-col gap-8'>
						<img
							className='h-auto max-w-[270px] rounded-lg'
							src={img4}
							alt='img'
						/>
						<h1 className='text-white font-bold'>Logo Design</h1>
					</div>
					<div className='blocksBock flex items-center justify-center bg-zinc-700 h-[240px] w-[300px] rounded-xl	mx-auto flex-col gap-8'>
						<img
							className='h-auto max-w-[270px] rounded-lg'
							src={img5}
							alt='img'
						/>
						<h1 className='text-white font-bold'>Backend</h1>
					</div>
					<div className='blocksBock flex items-center justify-center bg-zinc-700 h-[240px] w-[300px] rounded-xl	mx-auto flex-col gap-8'>
						<img
							className='h-auto max-w-[270px] rounded-lg'
							src={img6}
							alt='img'
						/>
						<h1 className='text-white font-bold'>Frontend</h1>
					</div>
					<div className='blocksBock flex items-center justify-center bg-zinc-700 h-[240px] w-[300px] rounded-xl	mx-auto flex-col gap-8'>
						<img
							className='h-auto max-w-[270px] rounded-lg'
							src={img7}
							alt='img'
						/>
						<h1 className='text-white font-bold'>Motion</h1>
					</div>
					<div className='blocksBock flex items-center justify-center bg-zinc-700 h-[240px] w-[300px] rounded-xl	mx-auto flex-col gap-8'>
						<img
							className='h-auto max-w-[270px] rounded-lg'
							src={img8}
							alt='img'
						/>
						<h1 className='text-white font-bold'>App Design</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blocks
