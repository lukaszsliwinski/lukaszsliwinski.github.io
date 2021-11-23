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
    aboutContent: `&emsp;&emsp;&emsp;Jestem początkującym programistą stawiającym pierwsze kroki w&nbsp;tworzeniu 
    aplikacji internetowych. W&nbsp;trakcie samodzielnej nauki poznałem podstawową składnię takich języków jak 
    Python oraz JavaScript. W&nbsp;ramach ćwiczeń praktycznych utworzyłem kilka aplikacji poznając podstawy 
    tworzenia backend&#8209;u i&nbsp;frontend&#8209;u aplikacji, sposoby komunikacji między nimi, bazy danych, 
    tworzenie szablonów responsywnych i&nbsp;system kontroli wersji. Poniżej przedstawiam kilka efektów mojej 
    dotychczasowej nauki. Poszukuję nowych wyzwań, zawodowych i&nbsp;hobbystycznych, które umożliwią mi dalszy 
    rozwój i&nbsp;poszerzenie praktycznej wiedzy.`,

    projectAboutContent1: `&emsp;Aplikacja wspomagająca naukę słówek angielskiego. 
    Użytkownik wybiera ile słówek chce przetłumaczyć. 
    Program losuje z&nbsp;bazy danych słówka i&nbsp;podaje pokolei użytkownikowi do przetłumaczenia. 
    Za każde poprawne tłumaczenie użytkownik uzyskuje jeden punkt. 
    Na końcu program podaje sumę punktów. 
    Baza słówek znajduje się w&nbsp;pliku csv i&nbsp;może być dowolnie modyfikowana.`,

    projectPurposeContent1: `&emsp;Program napisany w&nbsp;celu nabycia praktycznych umiejętności programowania 
    w&nbsp;języku Python, z&nbsp;wykorzystaniem frameworka Kivy. W&nbsp;pierwszej wersji program mógł być 
    uruchamiany jedynie w&nbsp;konsoli, następnie w&nbsp;ramach dalszej nauki został dopisany interface GUI. 
    Finalna wersja została przeprojektowania aby utrwalić wiedzę z&nbsp;zakresu programowania z&nbsp;wykorzystaniem Kivy.`,
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
    which will enable me to further develop and expand my practical knowledge.`,

    projectAboutContent1: `&emsp;Application helping the learning of English vocabulary. User chooses how many 
    words to translate. Program chooses random words from database and displays in sequence to translate. For every 
    correct translation user scores one point. Program displays final result in the end. Database of words is located 
    in csv file and can be modified by user.`,

    projectPurposeContent1: `&emsp;Program was written to get practical skills in Python programming, using the Kivy 
    framework. The first version of program could be run only in console, then the GUI interface was added. Final version 
    was rebuilt to consolidate knowledge about programming with Kivy`,
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