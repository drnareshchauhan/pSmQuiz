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
    rch: 'RCH NRHM',
    history: 'History',
    health: 'Health and Diseases',
    screening: 'Screening',
    obstetrics: 'Obstetrics Paediatrics and Geriatrics',
    bmw: 'BMW Health Education International Health',
    other: 'Miscellaneous',
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
