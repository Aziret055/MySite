import React from 'react'
import About from '../About'
import Blocks from '../Blocks'
import Footer from '../Footer'
import Hero from '../Hero'
import Portfolio from '../Portfolio/Portfolio'
import Resume from '../Resume'
import Reviews from '../Reviews'

const Home = () => {
	return (
		<div>
			<Hero />
			<Blocks />
			<Portfolio />
			<About />
			<Reviews />
			<Resume />
			<Footer />
		</div>
	)
}

export default Home
