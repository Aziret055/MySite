import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import bookShop from '../../img/bookshop.jpg'
import moviewPhoto from '../../img/moviePhoto.jpg'
import teeth from '../../img/teethPhoto.png'
import water from '../../img/water.jpeg'
import weather from '../../img/weather.jpeg'
import './slider.css'
export default function Portfolio() {
	return (
		<>
			<div id='portfolio' className='py-[90px]'>
				<div className='bodyBody'>
					<h1 className='text-center w-[350px] mx-auto text-4xl font-bold py-11 '>
						<div class='wrapper'>
							<span class='letter letter1'>П</span>
							<span class='letter letter2'>O</span>
							<span class='letter letter3'>Р</span>
							<span class='letter letter4'>T</span>
							<span class='letter letter5'>Ф</span>
							<span class='letter letter6'>O</span>
							<span class='letter letter7'>Л</span>
							<span class='letter letter8'>И</span>
							<span class='letter letter9'>O</span>
						</div>
					</h1>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: 10,
							stretch: 0,
							depth: 100,
							modifier: 3,
							slideShadows: true
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination]}
						className='mySwiper'
					>
						<SwiperSlide>
							<Zoom>
								<img src='https://swiperjs.com/demos/images/nature-1.jpg' />
							</Zoom>
						</SwiperSlide>
						<SwiperSlide>
							<Zoom>
								<img src={teeth} />
							</Zoom>
						</SwiperSlide>
						<SwiperSlide>
							<Zoom>
								<img src={moviewPhoto} />
							</Zoom>
						</SwiperSlide>
						<SwiperSlide>
							<Zoom>
								<img src={bookShop} />
							</Zoom>
						</SwiperSlide>
						<SwiperSlide>
							<Zoom>
								<img
									alt='That Wanaka Tree, New Zealand by Laura Smetsers'
									src='https://swiperjs.com/demos/images/nature-6.jpg'
									width='500'
								/>
							</Zoom>
						</SwiperSlide>
						<SwiperSlide>
							<Zoom>
								<img src='https://swiperjs.com/demos/images/nature-7.jpg' />
							</Zoom>
						</SwiperSlide>
						<SwiperSlide>
							<Zoom>
								<img src={water} />
							</Zoom>
						</SwiperSlide>
						<SwiperSlide>
							<Zoom>
								<img src='https://swiperjs.com/demos/images/nature-8.jpg' />
							</Zoom>
						</SwiperSlide>
						<SwiperSlide>
							<Zoom>
								<img src={weather} />
							</Zoom>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	)
}
