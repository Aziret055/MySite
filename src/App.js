import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import './App.css'
import About from './components/About'
import Blocks from './components/Blocks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Reviews from './components/Reviews'
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
			<Reviews />
			<Resume />
			<Footer />
		</div>
	)
}

export default App
