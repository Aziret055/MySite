import React from 'react'
import Slider from 'react-slick'
import './slider.css'
function Portfolio() {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		centerPadding: '190px',
		slidesToShow: 1,
		speed: 500
	}
	return (
		<div id='portfolio'>
			<div className='container'>
				<h1 className='text-4xl text-center my-11 font-black '>My Portfolio</h1>
				<div className='px-[280px]'>
					<div className='slider-container'>
						<Slider {...settings}>
							<div className='bor' >
								<a
									target='_blank'
									href='https://movie-kk8n-git-master-aziret055s-projects.vercel.app/'
								>
									<img
										src='https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg'
										alt='img'
									/>
								</a>
								<h1 className='flex items-center justify-center text-xl text-blue-600'>
									TMDB Movie
								</h1>
							</div>
							<div className='bor'>
								<a
									target='_blank'
									href='https://rad-kataifi-5b9398.netlify.app/'
								>
									<img
										src='https://www.health.com/thmb/2VrgRdGpx-CwytNS1LxotOv6bhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hlt-led-teeth-whitening-kits-test-crest-emulsion-light-tstaples-1398-9441e08241c441379207f8251d38ccb7.jpeg'
										alt='img'
									/>
								</a>
								<h1 className='flex items-center justify-center text-xl text-blue-600'>
									Teeth Product
								</h1>
							</div>
							<div className='bor'>
								<a
									target='_blank'
									href='https://book-shop-brown-three.vercel.app/'
								>
									<img
										src='https://img.freepik.com/premium-vector/bookstore-shop-exterior-woman_169241-6676.jpg'
										alt='img'
									/>
								</a>
								<h1 className='flex items-center justify-center text-xl text-blue-600'>
									Book Shop
								</h1>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
