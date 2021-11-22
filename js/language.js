let lang = 'pl'

const text1Pl = 'Ten fragment jest po polsku'
const text1Eng = 'This part is in English'


// Set initial statement
setLanguage();


// Function to set language
function setLanguage() {
    if (lang == 'pl') {
        text1.innerHTML = text1Pl;
    } else {
        text1.innerHTML = text1Eng;
    };
};


// Function to change lang value
changeLanguage = (language) => {
    lang = language;
    setLanguage();
};