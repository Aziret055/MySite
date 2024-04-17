import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './App.css'
import About from './components/About'
import Blocks from './components/Blocks'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume'
import Reviews from './components/Reviews'
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
			{/* <Footer /> */}
			<ToastContainer />
		</div>
	)
}

export default App
