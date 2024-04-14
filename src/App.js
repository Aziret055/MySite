import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Blocks from './components/Blocks'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin)


function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Blocks />
			<About />
			<Reviews />
			<Footer />
		</div>
	)
}

export default App
