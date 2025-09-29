export const validateFormFields = ({ name, email, password, isSignInForm }) => {
    const errors = {}

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)
    const isNameValid = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ' -]{1,49}$/.test(name)

    if (!email) errors.email = 'Email is required'
    else if (!isEmailValid) errors.email = 'Email is invalid'

    if (!password) errors.password = 'Password is required'
    else if (!isPasswordValid) errors.password = 'Password is not valid'

    if (!isSignInForm) {
        if (!name) errors.name = 'Name is required'
        else if (!isNameValid) errors.name = 'Name is not valid'
    }

    return errors
}
