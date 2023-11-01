export const BASE_URL = "https://api-cookenu.onrender.com"

export const validateEmail = email => /[a-zA-Z0-9]+@[a-zA-Z0-9][.a-zA-Z]?/.test(email)

export const validatePassword = password => /.{6,}/.test(password)

export const validateName = name => /.{2,}/.test(name)