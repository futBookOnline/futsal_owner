const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
const numberRegex = /^(9[0-8])[0-9]{8}$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/

export { emailRegex, numberRegex,passwordRegex }