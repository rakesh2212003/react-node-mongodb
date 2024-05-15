export const errorUtils = (type, value, name) => {
    if (type === 'text') {
        if (value.length === 0) {
            return `Invalid ${name}`
        } else {
            return ''
        }
    }
    else if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return `Invalid ${name}`
        } else {
            return ''
        }
    }
    else if (type === 'password') {
        const minLength = 6;
        const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        const hasUpperCase = /[A-Z]/;
        const hasLowerCase = /[a-z]/;
        const hasNumber = /[0-9]/;

        if (
            value.length < minLength ||
            !hasSpecialChars.test(value) ||
            !hasUpperCase.test(value) ||
            !hasLowerCase.test(value) ||
            !hasNumber.test(value)
        ) {
            return `Invalid ${name}`
        } else {
            return ''
        }
    }
}