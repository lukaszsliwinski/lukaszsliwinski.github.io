// Define polish text content
const pl = {
    text1: 'Ten fragment jest po polsku',
    text2: 'Ten też',
};


// Define english text content
const eng = {
    text1: 'This part is in English',
    text2: 'This also',
};


// Set initial statement
let lang = 'pl'
setLanguage();


// Function to set language
function setLanguage() {
    if (lang == 'pl') {
        for (const [key, value] of Object.entries(pl)) {
            document.getElementById(key).innerHTML = value;
        };
    } else {
        for (const [key, value] of Object.entries(eng)) {
            document.getElementById(key).innerHTML = value;
        };
    };
};


// Function to change lang value
changeLanguage = (language) => {
    lang = language;
    setLanguage();
};