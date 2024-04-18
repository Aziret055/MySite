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
import './slider.css'
export default function Portfolio() {
	return (
		<>
			<div className='bodyBody'>
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
						<img src='https://swiperjs.com/demos/images/nature-1.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src={teeth} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={moviewPhoto} />
					</SwiperSlide>
					<Zoom>
						<SwiperSlide>
							<img src={bookShop} />
						</SwiperSlide>
					</Zoom>
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
							<div
								aria-label='That Wanaka Tree, New Zealand by Laura Smetsers'
								role='img'
								style={{
									backgroundColor: '#fff',
									backgroundImage: `url("/path/to/thatwanakatree.jpg")`,
									backgroundPosition: '50%',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									height: '0',
									paddingBottom: '56%',
									width: '100%'
								}}
							/>
						</Zoom>
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-7.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-8.jpg' />
					</SwiperSlide>
					<SwiperSlide>
						<img src='https://swiperjs.com/demos/images/nature-9.jpg' />
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}
