import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '@/utils/firebase'

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    return { user: userCredential.user }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log('Sign Up user error - ', errorCode + ' ' + errorMessage)
  }
}

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    return { user: userCredential.user }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log('Sign Up user error - ', errorCode + ' ' + errorMessage)
  }
}
