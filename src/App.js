import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
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
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
AOS.init()
gsap.registerPlugin(ScrollToPlugin)

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signUp' element={<SignUp />} />
				<Route path='/signIn' element={<SignIn />} />
			</Routes>
			<ToastContainer />
		</div>
	)
}

export default App
