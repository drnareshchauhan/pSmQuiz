const categories = {
    software: 'Epidemiology',
    hardware: 'Statistics',
    frameworks: 'Environment',
    it: 'National Health Programme',
    OH: 'Occupational Health',
    InfDz: 'Infectious Disease',
};

function getUserData() {
    const auth = sessionStorage.getItem('auth');
    return auth ? JSON.parse(auth) : undefined;
}

function setUserData(auth) {
    sessionStorage.setItem('auth', JSON.stringify(auth));
}

function clearUserData() {
    sessionStorage.removeItem('auth');
}

export { categories, getUserData, setUserData, clearUserData };
