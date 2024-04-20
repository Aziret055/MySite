import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './App.css'
import Header from './components/Header'
import Home from './components/Home/Home'
import SignUp from './components/auth/SignUp'
gsap.registerPlugin(ScrollToPlugin)

function App() {
	console.log('hello world')
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signUp' element={<SignUp />} />
			</Routes>
			<ToastContainer />
		</div>
	)
}

export default App
