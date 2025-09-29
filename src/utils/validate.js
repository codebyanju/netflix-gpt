export const validateFormFields = (name, email, password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(password)
    const isNameValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(name)

    if (!isEmailValid) return 'Email Id is not valid'
    if (!isPasswordValid) return 'Password is not valid'
    if (!isNameValid) return 'Name is not valid'

    return null
}
