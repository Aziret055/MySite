// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAx5J9Q2Z72-pWMzxxMB1WU55AdC7qBcHQ',
	authDomain: 'mywebsite-a2839.firebaseapp.com',
	projectId: 'mywebsite-a2839',
	storageBucket: 'mywebsite-a2839.appspot.com',
	messagingSenderId: '484786662277',
	appId: '1:484786662277:web:3d14e7706d76d2499172ec',
	measurementId: 'G-YPLRL5KHYN'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
