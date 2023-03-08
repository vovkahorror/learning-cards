export const validateEmail = (value: string): any => {
  if (!value) {
    return 'Required'
  }

  const validMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  if (!validMail.test(value)) {
    return 'Invalid email address'
  }
}
