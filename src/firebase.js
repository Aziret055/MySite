import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
	apiKey: 'AIzaSyAx5J9Q2Z72-pWMzxxMB1WU55AdC7qBcHQ',
	authDomain: 'mywebsite-a2839.firebaseapp.com',
	projectId: 'mywebsite-a2839',
	storageBucket: 'mywebsite-a2839.appspot.com',
	messagingSenderId: '484786662277',
	appId: '1:484786662277:web:3d14e7706d76d2499172ec',
	measurementId: 'G-YPLRL5KHYN'
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage()
export default app
