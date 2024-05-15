import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithPopup,
	updateProfile
} from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import './signUp.css'
const SignUp = () => {
	const nav = useNavigate()
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const signInWithEmailAndPass = () => {
		try {
			createUserWithEmailAndPassword(auth, email, password).then(res => {
				let person = res.user
				updateProfile(person, { displayName: `${name} ${lastName}` })
			})
			nav('/')
		} catch (error) {
			alert(error.message)
		}
	}
	const registerWithGoogle = async () => {
		try {
			const googleProvider = new GoogleAuthProvider()
			await signInWithPopup(auth, googleProvider)
			nav('/')
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<div>
			<div class='flex flex-col items-center justify-center h-screen dark'>
				<div class='w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6'>
					<h2 class='text-2xl font-bold text-gray-200 mb-4'>Login</h2>
					<div className='flex flex-col'>
						<div className='flex gap-[15px]'>
							<input
								onChange={e => setName(e.target.value)}
								placeholder='name'
								class='bg-gray-700 w-[190px] text-gray-200 border-0 rounded-md px-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
							/>{' '}
							<input
								onChange={e => setLastName(e.target.value)}
								placeholder='LastName '
								class='bg-gray-700 w-[190px] text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
							/>
						</div>
						<input
							onChange={e => setEmail(e.target.value)}
							placeholder='Email address'
							class='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
							type='email'
						/>
						<input
							onChange={e => setPassword(e.target.value)}
							placeholder='Password'
							class='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
							type='password'
						/>
						<div class='flex items-center justify-between flex-wrap'>
							<p class='text-white mt-4'>
								Don't have an account?
								<Link
									to={'/signIn'}
									class='text-sm text-blue-500 -200 hover:underline mt-4'
								>
									SignIn
								</Link>
							</p>
						</div>
						<button
							onClick={() => signInWithEmailAndPass()}
							class='bg-gradient-to-r from-indigo-900 to-black text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-black hover:to-black transition ease-in-out duration-150'
							type='submit'
						>
							SignUp
						</button>
						<button
							onClick={() => registerWithGoogle()}
							class='bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150'
							type='submit'
						>
							Sign In With Google
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
