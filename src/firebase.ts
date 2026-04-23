import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyAqP0YDQcwSo83LE9XENCvVo4gms7d2-O0',
  authDomain: 'jimmo-cleaning.firebaseapp.com',
  projectId: 'jimmo-cleaning',
  storageBucket: 'jimmo-cleaning.firebasestorage.app',
  messagingSenderId: '173309931599',
  appId: '1:173309931599:web:54214731b97f0ab31e7a3a',
  measurementId: 'G-X8K7DX1FD1',
}

export const app = initializeApp(firebaseConfig)

// Analytics is only available in browser environments with cookies enabled
export const analyticsPromise = isSupported().then((supported) =>
  supported ? getAnalytics(app) : null
)
