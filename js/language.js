// Define objects with html ids as keys and text contents as values

// Define polish document headers
const plHeaders = {
    menuAboutBtn: 'O mnie',
    menuProjectsBtn: 'Projekty',
    menuContactBtn: 'Kontakt',
    
    aboutHeader: 'O mnie',
    projectsHeader: 'Projekty',
    contactHeader: 'Kontakt',
};

// Define polish project details headers
const plProjHeaders = {
    projectAboutHeader: 'OPIS PROGRAMU',
    projectPurposeHeader: 'CEL DYDAKTYCZNY',
    projectTechnologiesHeader: 'UŻYTE TECHNOLOGIE',
    projectSourceHeader: 'KOD ŹRÓDŁOWY',
};

// Define polish text content




// Define english document headers
const engHeaders = {
    menuAboutBtn: 'About',
    menuProjectsBtn: 'Projects',
    menuContactBtn: 'Contact',

    aboutHeader: 'About',
    projectsHeader: 'Projects',
    contactHeader: 'Contact',
};

// Define english project details headers
const engProjHeaders = {
    projectAboutHeader: 'ABOUT PROGRAM',
    projectPurposeHeader: 'DIDACTIC PURPOSE',
    projectTechnologiesHeader: 'TECHNOLOGIES USED',
    projectSourceHeader: 'SOURCE CODE',
};

// Define english text content









// Define function to set language
function setLanguage() {
    if (lang == 'pl') {
        for (const [key, value] of Object.entries(plHeaders)) {
            document.getElementById(key).innerHTML = value;
        };

        for (const [key, value] of Object.entries(plProjHeaders)) {
            for (i=1; i<6; i++) {
                document.getElementById(key + String(i)).innerHTML = value
            };
        };
    } else {
        for (const [key, value] of Object.entries(engHeaders)) {
            document.getElementById(key).innerHTML = value;
        };

        for (const [key, value] of Object.entries(engProjHeaders)) {
            for (i=1; i<6; i++) {
                document.getElementById(key + String(i)).innerHTML = value
            };
        };
    };
};


// Set initial statement
let lang = 'pl'
setLanguage();


// Function to change lang value
changeLanguage = (language) => {
    lang = language;
    setLanguage();
};