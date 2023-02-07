export const validateEmail = (email) => {
    // RFC2822
    const re =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return (re.test(email.trim()) && _validateDomain(email.trim()));
}

const _validateDomain = (email) => {
    return email.indexOf("@uwindsor.ca", email.length - "@uwindsor.ca".length) !== -1; 
}