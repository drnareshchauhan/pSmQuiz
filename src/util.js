const categories = {
    software: 'Epidemiology',
    hardware: 'Statistics',
    frameworks: 'Environment',
    national: 'National Health Programme',
    occupational: 'Occupational Health',
    infectious: 'Infectious Disease',
    research: 'Research',
    demography: 'Demography Family Planning',
    ncd: 'NCD',
    nutrition: 'Nutrition',
    sociology: 'Sociology',
    vaccine: 'Vaccine',
    other: 'Others',
    rch: 'RCH NRHM',
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
