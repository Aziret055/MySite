import React, { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const Exsample = () => {
	const [open, setOpen] = useState(false)
	return (
		<div>
			<div className='box mt-40 ml-40'>
				<div className={`dropdown ${open ? '' : 'active'} `}>
					<button
						onClick={() => setOpen(!open)}
						type='button'
						class={`${
							open ? '' : 'active'
						} focus:outline-none flex items-center justify-between text-white bg-[#7f0099] font-medium rounded-lg gap-5 px-7 w-full text-xl mb-2`}
					>
						Open
						{open ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
					</button>
					<div className='items'>
						<a href='#'>
							HELLO
							<span></span>
						</a>
						<a href='#'>
							AZIRET
							<span></span>
						</a>
						<a href='#'>
							ABDIMALIKOV
							<span></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Exsample
