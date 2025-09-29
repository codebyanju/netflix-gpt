import { LOGIN_BG_IMG } from '@/utils/constants'
import Header from './Header'
import { useEffect, useRef, useState } from 'react'
import { validateFormFields } from '@/utils/validate'

const Login = () => {
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        email.current.focus()
        // email.current.style.display = 'none'
    }, [isSignInForm])

    const toggleSignInForm = () => {
        setIsSignInForm((prev) => !prev)
    }

    const validateForm = () => {
        const msg = validateFormFields(
            name?.current.value,
            email?.current.value,
            password?.current.value
        )
        setErrorMsg(msg)
        console.log(msg)
    }

    return (
        <div className="relative h-screen w-screen">
            {/* Bg Image */}
            <img
                className="absolute top-0 left-0 w-full h-full "
                src={LOGIN_BG_IMG}
                alt="netflix-bg-img"
            ></img>

            <div className="absolute top-0 left-0 w-full h-full bg-black/50">
                {/* Header */}
                <Header />

                {/* Form */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 p-8 w-100 flex flex-col"
                >
                    <h2 className="text-white text-3xl font-bold text-center mb-6">
                        {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </h2>

                    {/* Name  */}
                    {!isSignInForm && (
                        <input
                            ref={name}
                            type="text"
                            placeholder="Full Name"
                            className="p-4 my-3 text-white rounded border border-s-white "
                        />
                    )}

                    {/* Email */}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email or Mobile Number"
                        className="p-4 my-3 text-white rounded border border-s-white "
                    />

                    {/* Password */}
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="p-4 my-3 rounded border text-white border-s-white"
                    />

                    {/* Error Message */}
                    <p className="text-red-600 font-semibold text-lg">
                        {errorMsg}
                    </p>

                    {/* Login, SignUp */}
                    <button
                        onClick={validateForm}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded my-3 cursor-pointer"
                    >
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
