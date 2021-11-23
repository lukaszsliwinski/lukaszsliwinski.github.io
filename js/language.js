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
const plContent = {
    aboutContent: `&emsp;&emsp;&emsp;Jestem początkującym programistą stawiającym pierwsze kroki w&nbsp;tworzeniu aplikacji 
    internetowych. W&nbsp;trakcie samodzielnej nauki poznałem podstawową składnię takich języków jak Python 
    oraz JavaScript. W&nbsp;ramach ćwiczeń praktycznych utworzyłem kilka aplikacji poznając podstawy tworzenia 
    backend&#8209;u i&nbsp;frontend&#8209;u aplikacji, sposoby komunikacji między nimi, bazy danych, 
    tworzenie szablonów responsywnych i&nbsp;system kontroli wersji. Poniżej przedstawiam kilka efektów mojej 
    dotychczasowej nauki. Poszukuję nowych wyzwań, zawodowych i&nbsp;hobbystycznych, które umożliwią mi dalszy 
    rozwój i&nbsp;poszerzenie praktycznej wiedzy.`
};

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
const engContent = {
    aboutContent: `&emsp;&emsp;&emsp;I&nbsp;am a&nbsp;beginner programmer taking the first steps in creating web applications. 
    During self&#8209;study, I&nbsp;learned the basic syntax of such languages ​​as Python and JavaScript. 
    As part of the practical exercises, I&nbsp;created several applications, learning the basics of 
    creating an application backend and frontend, methods of communication between them, 
    databases, creating responsive templates and the version control system. Below I&nbsp;present 
    some effects of my previous learning. I&nbsp;am looking for new professional and hobby challenges 
    which will enable me to further develop and expand my practical knowledge.`
};








// Define function to set language
function setLanguage() {
    if (lang == 'pl') {
        // Set polish document headers and text content
        for (const object of [plHeaders, plContent]) {
            for (const [key, value] of Object.entries(object)) {
                document.getElementById(key).innerHTML = value;
            };
        };

        // Set polish project details headers (the same value for different ids)
        for (const [key, value] of Object.entries(plProjHeaders)) {
            for (i=1; i<6; i++) {
                document.getElementById(key + String(i)).innerHTML = value
            };
        };
    } else {
        // Set english document headers and text content
        for (const object of [engHeaders, engContent]) {
            for (const [key, value] of Object.entries(object)) {
                document.getElementById(key).innerHTML = value;
            };
        };
        // Set english project details headers (the same value for different ids)
        for (const [key, value] of Object.entries(engProjHeaders)) {
            for (i=1; i<6; i++) {
                document.getElementById(key + String(i)).innerHTML = value
            };
        };
    };
};


// Initial statement
let lang = 'pl'
setLanguage();


// Function to change lang value - assign to flag btns
changeLanguage = (language) => {
    lang = language;
    setLanguage();
};