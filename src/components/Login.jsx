import { NETFLIX_LOGO, LOGIN_BG_IMG } from '@/utils/constants'
import Header from './Header'
import { useEffect, useRef, useState } from 'react'

const Login = () => {
    const email = useRef()
    const [isSignInForm, setIsSignInForm] = useState(true)

    useEffect(() => {
        email.current.focus()
        // email.current.style.display = 'none'
    }, [isSignInForm])

    const toggleSignInForm = () => {
        setIsSignInForm((prev) => !prev)
    }

    return (
        <div className="relative h-screen w-screen">
            <img
                className="absolute top-0 left-0 w-full h-full "
                src={LOGIN_BG_IMG}
                alt="netflix-bg-img"
            ></img>

            <div className="absolute top-0 left-0 w-full h-full bg-black/50">
                <Header />

                <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 p-8 w-100 flex flex-col">
                    <h2 className="text-white text-3xl font-bold text-center mb-6">
                        {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </h2>

                    {!isSignInForm && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-4 my-3 text-white rounded border border-s-white "
                        />
                    )}

                    <input
                        ref={email}
                        type="text"
                        placeholder="Email or Mobile Number"
                        className="p-4 my-3 text-white rounded border border-s-white "
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="p-4 my-3 rounded border text-white border-s-white"
                    />

                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded my-3 cursor-pointer">
                        {isSignInForm ? 'Login' : 'Sign Up'}
                    </button>

                    <p className="text-white py-2">
                        {isSignInForm
                            ? 'New to Netflix? '
                            : 'Already a member? '}
                        <span
                            onClick={toggleSignInForm}
                            className="hover:underline cursor-pointer"
                        >
                            {isSignInForm ? 'Sign up now.' : 'Login.'}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Login
