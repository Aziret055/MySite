import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './App.css'
import About from './components/About'
import Blocks from './components/Blocks'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio/Portfolio'
gsap.registerPlugin(ScrollToPlugin)

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Blocks />
			<Portfolio />
			<About />
			{/* <Reviews />
			<Resume />
			<Footer /> */}
		</div>
	)
}

export default App
