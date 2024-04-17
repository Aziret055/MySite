import gsap from 'gsap'
import React from 'react'
import { CiFaceSmile } from 'react-icons/ci'
import './footer.css'
const Footer = () => {
	function func() {
		gsap.to(window, {
			scrollTo: { y: '#about' },

			ease: 'expo',
			duration: 1.5
		})
	}
	function portfolio() {
		gsap.to(window, {
			scrollTo: { y: '#portfolio' },

			ease: 'expo',
			duration: 1
		})
	}
	function heroFunction() {
		gsap.to(window, {
			scrollTo: { y: '#hero' },

			ease: 'expo',
			duration: 2
		})
	}
	function resume() {
		gsap.to(window, {
			scrollTo: { y: '#resume' },

			ease: 'expo',
			duration: 1
		})
	}
	function blockss() {
		gsap.to(window, {
			scrollTo: { y: '#block' },

			ease: 'expo',
			duration: 1.6
		})
	}

	return (
		<div id='footer'>
			<div className='back mb-[-100px]'>
				<div id='contact' className='container'>
					<div className='my-[100px]'>
						<footer className='text-white dark:bg-gray-900'>
							<div className='mx-auto w-full p-4 py-6  pr-12'>
								<div className='flex justify-between gap-[40px] px-[200px]'>
									<div className='mb-11 w-[600px]'>
										<div className='flex justify-center flex-col'>
											<h1 className='ml-11 text-3xl mb-11'>Contact</h1>
											<div className=''>
												<span className='flex gap-4 '>
													<h3>phone : </h3>
													<a>+996 703601008</a>
												</span>
												<span className='flex gap-4 my-2'>
													<h3>email : </h3>
													<a
														target='_blank'
														href='https://mail.google.com/mail/u/0/#inbox'
													>
														kojom5erd1ev1@gmail.com
													</a>
												</span>
												<span className='flex gap-4'>
													<h3>address : </h3>
													<a
														target='_blank'
														href='https://www.google.com/maps/place/138+%D1%83%D0%BB.+%D0%9A%D1%83%D1%80%D0%B5%D0%BD%D0%BA%D0%B5%D0%B5%D0%B2%D0%B0,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8899468,74.6108692,17z/data=!3m1!4b1!4m5!3m4!1s0x389eb7ed7cb24803:0xe1c77d12212757b7!8m2!3d42.8899429!4d74.6134495?entry=ttu'
													>
														138 ул. Куренкеева
													</a>
												</span>
											</div>
										</div>

										<div className='flex items-center gap-16 mt-[80px]'>
											<div>
												<ul className='text-white dark:text-gray-400 flex flex-col font-medium'>
													<li onClick={heroFunction} className='mb-4 '>
														Home
													</li>
													<li onClick={func} className='mb-4'>
														About me
													</li>
													<li onClick={portfolio} className=''>
														Portfolio
													</li>
												</ul>
											</div>
											<ul className='text-white dark:text-gray-400 font-medium mt-[-16px]'>
												<li onClick={resume} className='my-4'>
													Resume
												</li>
												<li onClick={resume} className='mb-4'>
													ContactMe
												</li>
												<li onClick={blockss}>Blocks</li>
											</ul>
										</div>
									</div>

									<iframe
										style={{
											width: '550px',
											height: '400px',
											style: 'border:0;',
											allowfullscreen: '',
											loading: 'lazy',
											referrerpolicy: 'no-referrer-when-downgrade'
										}}
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.1895779169395!2d74.61086921189307!3d42.88994680133996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7ed7cb24803%3A0xe1c77d12212757b7!2zMTM4INGD0LsuINCa0YPRgNC10L3QutC10LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1713268545663!5m2!1sru!2skg'
									></iframe>
								</div>

								<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
								<div className='sm:flex sm:items-center sm:justify-between'>
									<span className='text-sm text-white sm:text-center dark:text-gray-400 flex items-center justify-center gap-3'>
										<span>Thank you for visiting my site</span> <CiFaceSmile />
									</span>
									<div className='flex items-center justify-center gap-6'>
										<a href='https://www.instagram.com/_kojom5erd1ev_1/'>
											<section class='flex justify-center items-center'>
												<button
													href='/'
													class='group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='1em'
														height='1.2em'
														viewBox='0 0 24 24'
														stroke-width='1'
														fill='currentColor'
														stroke='currentColor'
														class='w-5'
													>
														<path d='M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z'></path>
													</svg>
													<span class='absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700'>
														Instagram
													</span>
												</button>
											</section>
										</a>
										<a href='https://www.facebook.com/profile.php?id=61558685993711'>
											<section class='flex justify-center items-center'>
												<button
													href='/'
													class='group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='1em'
														height='1.1em'
														viewBox='0 0 448 512'
														stroke-width='0'
														fill='currentColor'
														stroke='currentColor'
														class='w-5'
													>
														<path d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'></path>
													</svg>
													<span class='absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700'>
														Facebook
													</span>
												</button>
											</section>
										</a>
										<a href='https://www.youtube.com/@Abdimalikov_'>
											<section class='flex justify-center items-center'>
												<button
													href='/'
													class='group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#CD201F] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='1em'
														height='1em'
														viewBox='0 0 576 512'
														stroke-width='0'
														fill='currentColor'
														stroke='currentColor'
													>
														<path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'></path>
													</svg>
													<span class='absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700'>
														Youtube
													</span>
												</button>
											</section>
										</a>
										<a href='https://www.linkedin.com/jobs/'>
											<section class='flex justify-center items-center'>
												<button
													href='/'
													class='group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]'
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='1em'
														height='1.1em'
														viewBox='0 0 512 512'
														stroke-width='0'
														fill='currentColor'
														stroke='currentColor'
														class='w-5 h-5'
													>
														<path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z'></path>
													</svg>
													<span class='absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700'>
														Linkedin
													</span>
												</button>
											</section>
										</a>
									</div>
								</div>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
