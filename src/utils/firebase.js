// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAdqiBWFaV8GQW_JpZTdCCExDSiNT8uUwE',
    authDomain: 'netflixgpt-8b8ba.firebaseapp.com',
    projectId: 'netflixgpt-8b8ba',
    storageBucket: 'netflixgpt-8b8ba.firebasestorage.app',
    messagingSenderId: '321576414697',
    appId: '1:321576414697:web:9521d019ad280d31eaaf78',
    measurementId: 'G-KFB8ZFKZTY'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const auth = getAuth()
