import { AccountCircle } from '@mui/icons-material'
import { Divider } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import gsap from 'gsap'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import image from '../../img/Снимок экрана от 2024-01-11 14-51-37.png'
import './header.css'
const Header = () => {
	const nav = useNavigate()
	const [menu, setMenu] = useState(false)
	const [anchorEl, setAnchorEl] = React.useState(null)

	const { pathname } = useLocation()
	const open = Boolean(anchorEl)
	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	function toContact() {
		gsap.to(window, {
			scrollTo: { y: '#footer' },
			ease: 'expo',
			duration: 2
		})
	}
	function aboutMy() {
		gsap.to(window, {
			scrollTo: { y: '#about' },
			ease: 'expo',
			duration: 2
		})
	}
	function toReview() {
		gsap.to(window, {
			scrollTo: { y: '#review' },
			ease: 'expo',
			duration: 2
		})
	}

	function toHome() {
		gsap.to(window, {
			scrollTo: { y: '#hero' },
			ease: 'expo',
			duration: 2
		})
	}

	function toResume() {
		gsap.to(window, {
			scrollTo: { y: '#resume' },
			ease: 'expo',
			duration: 2
		})
	}
	//! sign in and sign up here
	const [authAvatar, setAuthAvatar] = React.useState(true)
	const [anchorElAvatar, setAnchorElAvatar] = React.useState(null)

	const handleChangeAvatar = event => {
		setAuthAvatar(event.target.checked)
	}

	const handleMenuAvatar = event => {
		setAnchorElAvatar(event.currentTarget)
	}

	const handleCloseAvatar = () => {
		setAnchorElAvatar(null)
	}
	//! sign in and sign up here

	return (
		<div id='header'>
			<div className='container'>
				<nav className='back bg-none dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
					<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
						<Link
							to={'/'}
							onClick={toHome}
							className='flex items-center space-x-3 rtl:space-x-reverse'
						>
							<img src={image} className='h-8 rounded-full' alt='img' />
							<span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
								MotionWeb
							</span>
						</Link>
						<div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
							<React.Fragment>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										textAlign: 'center'
									}}
								>
									<Tooltip title='Account settings'>
										<IconButton
											onClick={handleClick}
											size='small'
											sx={{ ml: 2 }}
											aria-controls={open ? 'account-menu' : undefined}
											aria-haspopup='true'
											aria-expanded={open ? 'true' : undefined}
										>
											<button
												onClick={() => setMenu(!menu)}
												// data-collapse-toggle='navbar-sticky'
												type='button'
												className='md:hidden'
												aria-controls='navbar-sticky'
												aria-expanded='false'
											>
												<svg
													className='w-5 h-5'
													aria-hidden='true'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 17 14'
												>
													<path
														stroke='currentColor'
														stroke-linecap='round'
														stroke-linejoin='round'
														stroke-width='2'
														d='M1 1h15M1 7h15M1 13h15'
													/>
												</svg>
											</button>
										</IconButton>
									</Tooltip>
								</Box>
								{/* sign in and sing up here  */}
								<div>
									<IconButton
										size='large'
										aria-label='account of current user'
										aria-controls='menu-appbar'
										aria-haspopup='true'
										onClick={handleMenuAvatar}
										color='inherit'
									>
										<AccountCircle />
									</IconButton>
									<Menu
										id='menu-appbar'
										anchorEl={anchorElAvatar}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'right'
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right'
										}}
										open={Boolean(anchorElAvatar)}
										onClose={handleCloseAvatar}
									>
										<MenuItem onClick={handleCloseAvatar}>Sign in</MenuItem>
										<MenuItem
											onClick={() => {
												handleCloseAvatar()
												nav('/signUp')
											}}
										>
											Sigin up
										</MenuItem>
									</Menu>
								</div>
								{/* sign in and sing up here  */}
								<Menu
									className=''
									anchorEl={anchorEl}
									id='account-menu'
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: 'visible',
											filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
											mt: 1.5,
											'& .MuiAvatar-root': {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1
											},
											'&::before': {
												content: '""',
												display: 'block',
												position: 'absolute',
												top: 0,
												right: 14,
												width: 10,
												height: 10,
												bgcolor: 'background.paper',
												transform: 'translateY(-50%) rotate(45deg)',
												zIndex: 0
											}
										}
									}}
									transformOrigin={{ horizontal: 'right', vertical: 'top' }}
									anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
								>
									<MenuItem
										className='w-[600px] h-[150px]'
										onClick={() => {
											handleClose()
											toHome()
										}}
									>
										Home
									</MenuItem>
									<MenuItem
										className='h-[100px]'
										onClick={() => {
											handleClose()
											aboutMy()
										}}
									>
										About me
									</MenuItem>
									<Divider />
									<MenuItem
										className='h-[100px]'
										onClick={() => {
											handleClose()
											toReview()
										}}
									>
										Reviews
									</MenuItem>
									<MenuItem
										className='h-[100px]'
										onClick={() => {
											handleClose()
											toContact()
										}}
									>
										Contact
									</MenuItem>
									<MenuItem
										className='h-[100px]'
										onClick={() => {
											handleClose()
											toResume()
										}}
									>
										Resume
									</MenuItem>
								</Menu>
							</React.Fragment>
						</div>
						{/* drop down here  */}
						{pathname === '/' && (
							<div
								className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
								id='navbar-sticky'
							>
								<ul className='flex flex-col p-4 md:p-0 mt-4 font-bold border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 '>
									<a
										onClick={toHome}
										className='block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white md:dark:hover:bg-transparen'
										aria-current='page'
									>
										Home
									</a>
									<a
										onClick={aboutMy}
										className='block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white md:dark:hover:bg-transparent'
									>
										About me
									</a>
									<a
										onClick={toReview}
										className='block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white md:dark:hover:bg-transparen'
									>
										Reviews
									</a>
									<a
										onClick={toContact}
										className='block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white md:dark:hover:bg-transparen'
									>
										Contact
									</a>
								</ul>
							</div>
						)}

						{/* drop down here  */}
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Header
