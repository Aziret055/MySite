import gsap from 'gsap'
import React from 'react'
import whiteJacet from '../../img/SeeLeptop-removebg-preview.png'
import four from '../../img/four.png'
import greenJacket from '../../img/greenPhoto.jpg'
import one from '../../img/one.png'
import there from '../../img/there.png'
import two from '../../img/two.png'

const Hero = () => {
	function contactMe() {
		gsap.to(window, {
			scrollTo: { y: 'footer' },
			ease: 'expo',
			duration: 1.3
		})
	}
	return (
		<div
			id='hero'
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundImage: ` linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 1000px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%), url(${greenJacket})`
			}}
		>
			<div className='container'>
				<div className='heroMT hero pt-[100px]'>
					<section className=''>
						<div class='heroAdap flex mt-[100px] px-11'>
							<div class='heroTwo mr-auto place-self-center'>
								<h1 class='max-w-2xl  text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-white'>
									Hello
								</h1>
								<h1 class='max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-white'>
									I'm Aziret
								</h1>
								<p class='heroP max-w-2xl  my-5 text-white'>
									I've been doing web design, front-end and back-end development{' '}
									<br />
									for a year now. Do you need a website design, site layout, or{' '}
									<br />
									maybe a turnkey website? Then contact me
								</p>
								<a
									onClick={contactMe}
									href='#'
									class='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
								>
									Contact me
								</a>
							</div>
							<div class='dott flex relative'>
								<img
									className='heroImg object-cover h-[460px] w-[459px] rounded-[100%] mt-[0px]'
									src={whiteJacet}
									alt='img'
								/>
								<img
									className='heroTOP heroTop2  absolute top-0 left-[-30px] w-[80px]'
									src={one}
									alt='img'
								/>
								<img
									className='heroUX absolute top-[200px] left-[-100px] w-[80px]'
									src={two}
									alt='img'
								/>
								<img
									className='heroPs absolute top-[400px] left-[-10px] w-[80px]'
									src={there}
									alt='img'
								/>
								<img
									className='heroTOP heroTop3 absolute top-0 right-[-30px] w-20'
									src={four}
									alt='img'
								/>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Hero
