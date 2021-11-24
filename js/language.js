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

    projectAboutContent1: `&emsp;Aplikacja wspomagająca naukę słówek angielskiego. Użytkownik wybiera ile 
    słówek chce przetłumaczyć. Program losuje z&nbsp;bazy danych słówka i&nbsp;podaje pokolei użytkownikowi 
    do przetłumaczenia. Za każde poprawne tłumaczenie użytkownik uzyskuje jeden punkt. Na końcu program podaje 
    sumę punktów. Baza słówek znajduje się w&nbsp;pliku csv i&nbsp;może być dowolnie modyfikowana.`,

    projectPurposeContent1: `&emsp;Program napisany w&nbsp;celu nabycia praktycznych umiejętności programowania 
    w&nbsp;języku Python, z&nbsp;wykorzystaniem frameworka Kivy. W&nbsp;pierwszej wersji program mógł być 
    uruchamiany jedynie w&nbsp;konsoli, następnie w&nbsp;ramach dalszej nauki został dopisany interface GUI. 
    Finalna wersja została przeprojektowania aby utrwalić wiedzę z&nbsp;zakresu programowania 
    z&nbsp;wykorzystaniem Kivy.`,

    projectAboutContent2: `&emsp;Aplikacja internetowa do przechowywania przepisów kulinarnych w&nbsp;formie 
    bloga. Po utworzeniu konta i&nbsp;zalogowaniu do panelu administratorskiego, użytkownik może dodawać 
    przepisy. W&nbsp;ramach przepisu dodawana jest nazwa, kraj, kategoria posiłku, zdjęcie, informacja czy 
    danie jest dietetyczne, opis przygotowania, lista składników, lista przypraw. Przepisy wyświetlane są na 
    stronie głównej w&nbsp;formie kart. Po kliknięciu w&nbsp;kartę wyświetlane są szczegóły. Dania można 
    filtrować po krajach, kategoriach oraz dietetycznych poprzez menu z&nbsp;lewej strony. W&nbsp;nagłówku 
    strony znajduje się wyszukiwarka po nazwie dania.`,

    projectPurposeContent2: `&emsp;Celem było rozpoczęcie nauki w&nbsp;obszarze aplikacji internetowych 
    z&nbsp;wykorzystaniem języka Python. Aplikacja napisana w&nbsp;oparciu o&nbsp;tutorial zamieszczony 
    w&nbsp;dokumentacji Django. W&nbsp;czasie pisania aplikacji poznałem podstawy HTML5 i&nbsp;CSS3, podstawy 
    baz danych na przykładzie bazy SQLite oraz budowę kompletnej aplikacji internetowej w&nbsp;oparciu 
    o&nbsp;Django. Layout aplikacji był kilkukrotnie modyfikowany, równolegle z&nbsp;nabywaniem nowej wiedzy. 
    Po poznaniu podstaw języka JavaScript, zostało dodane nemu harmonijkowe z&nbsp;jego wykorzystaniem. 
    Strona została dopasowana do różnych rozdzielczośći monitorów z&nbsp;zastosowaniem technologii Responsive 
    Web Design.`,

    projectAboutContent3: `&emsp;Aplikacja internetowa do zarządzania zadaniami do wykonania. Po utworzeniu 
    konta i&nbsp;zalogowaniu można w&nbsp;aplikacji dodawać zadania wraz z&nbsp;terminem wykonania. Można 
    utworzyć więcej niż jedno konto, każdy użytkownik ma wtedy dostęp tylko do swoich zadań. Aplikacja posiada 
    własny kreator zadań, dzięki czemu nie ma konieczności logowania się do wbudowanego panelu administratorskiego 
    Django - wszystkie zadania można dodać w&nbsp;aplikacji. Strona główna podzielona jest na 4&nbsp;kolumny. 
    3&nbsp;pierwsze filtrują zadania po datach (opóźnione, dzisiejsze, przyszłe). Ostatnia kolumna zawiera 
    zadania oznaczone jako zakończone. W&nbsp;lewym górnym rogu znajduje się wyszukiwarka po tytule zadania.`,

    projectPurposeContent3: `&emsp;Celem było utrwalenie oraz poszerzenie wiedzy z&nbsp;zakresu programowania 
    z&nbsp;wykorzystaniem frameworka Django. Wykorzystano aplikację 
    z&nbsp;<a href="https://www.youtube.com/watch?v=llbtoQTt4qw" class="yt-link" target="_blank" rel="noopener 
    noreferrer">tutorialu</a>, która została zmodyfikowana i&nbsp;rozszerzona o&nbsp;kolumny do sortowania 
    zadań po dacie. W&nbsp;przeciwieństwie do poprzedniej aplikacji, widoki zostały napisane z&nbsp;wykorzystaniem 
    technologii Class Based Views.`,

    projectAboutContent4: `&emsp;Aplikacja internetowa symulująca działanie prostego metronomu. W&nbsp;programie 
    można ustawić tempo oraz metrum. W&nbsp;zależności od ilości uderzeń na minutę (bpm), program podaje włoską 
    nazwę tempa. W&nbsp;aplikacji wykorzystano gotowy timer z&nbsp;<a href="https://www.youtube.com/watch?v=x8PBWobv6NY" 
    class="yt-link" target="_blank" rel="noopener noreferrer">tutorialu</a>. `,

    projectPurposeContent4: `&emsp;Program został napisany w&nbsp;celu opanowania podstaw języka JavaScript.`,
    
    projectAboutContent5: `&emsp;Aplikacja internetowa pozwalająca na przesyłanie utworów do bazy danych i&nbsp;odtwarzania w&nbsp;przeglądarce. 
    Po utworzeniu konta i&nbsp;zalogowaniu do panelu administratorskiego, użytkownik może dodawać utwory. 
    W&nbsp;ramach utworu dodawany jest tytuł, wykonawca, okładka oraz plik dźwiękowy. Na stronie głównej 
    wyświetlony jest odtwarzać wraz z&nbsp;playlistą wszystkich dodanych utworów. Odtwarzacz pozwala na 
    odtworzenie utworu, przejście do następnęgo/poprzedniego, wybranie dowolnego utworu z&nbsp;playlisty 
    oraz przewijanie przy pomocy suwaka. W&nbsp;trakcie odtwarzania wyświetlany jest tytuł utworu, wykonawca 
    oraz okładka. Po zakończeniu odtwarzania utworu, automatycznie odtwarzany jest następny z&nbsp;playlisty. 
    Po zakończeniu ostatniego utworu odtwarzacz jest zatrzymywany.`,

    projectPurposeContent5: `&emsp;Celem było wykorzystanie dotychczas zdobytej wiedzy z&nbsp;zakresu programowania w&nbsp;Django 
    oraz JavaScript i&nbsp;połączenie obu technologii. Backend aplikacji wykorzystuje Django do 
    przechowywania utworów w&nbsp;bazie danych. Baza danych jest przekazywana w&nbsp;postaci ciągu znaków 
    do szablonu. Funkcja napisana w&nbsp;JavaScript konwertuje przesłany ciąg znaków na listę obiektów 
    przechowujących dane o&nbsp;utworach. Z&nbsp;przygotowanej listy korzysta odtwarzacz na stronie głównej 
    napisany przy użyciu JavaScript.`,
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
    aboutContent: `&emsp;&emsp;&emsp;I&nbsp;am a&nbsp;beginner programmer taking the first steps in creating 
    web applications. During self&#8209;study, I&nbsp;learned the basic syntax of such languages ​​as Python 
    and JavaScript. As part of the practical exercises, I&nbsp;created several applications, learning the 
    basics of creating an application backend and frontend, methods of communication between them, 
    databases, creating responsive templates and the version control system. Below I&nbsp;present 
    some effects of my previous learning. I&nbsp;am looking for new professional and hobby challenges 
    which will enable me to further develop and expand my practical knowledge.`,

    projectAboutContent1: `&emsp;Application helping the learning of English vocabulary. User chooses how many 
    words to translate. Program chooses random words from database and displays in sequence to translate. For 
    every correct translation user scores one point. Program displays final result in the end. Database of words 
    is located in csv file and can be modified by user.`,

    projectPurposeContent1: `&emsp;Program was written to get practical skills in Python programming, using 
    the Kivy framework. The first version of program could be run only in console, then the GUI interface 
    was added. Final version was rebuilt to consolidate knowledge about programming with Kivy.`,

    projectAboutContent2: `&emsp;A&nbsp;web application for storing recipes in the form of a&nbsp;blog. 
    After creating an account and logging into the administration panel, the user can add recipes. In the 
    recipe can add the name, country, category of the meal, photo, information whether the dish is diet, 
    description of the preparation, list of ingredients and list of spices. The recipes are displayed on 
    the home page as cards. Dishes can be filtered by countries, categories and dietary through the menu 
    on the left. In the header of the page is search engine by the name of the dish.`,

    projectPurposeContent2: `&emsp;The purpose was to start learning programming web applications using 
    Python language. The application is based on tutorial from Django documentation. In the process of 
    creating the application, I&nbsp;learned basics of HTML5 and CSS3, basics of databases on the example 
    of SQLite3 and construction of complete web application in Django. In the process of learning, the 
    layout was changed several times. The accordion menu using JavaScript was added after learning 
    the basics of JS. Website was fit to different display dimensions using Resmonsive Web Design technology.`,

    projectAboutContent3: `&emsp;A&nbsp;web application for task management. After creating an account and 
    logging in, the user can add tasks with deadline. It is able to create more than one account, every user
    has access only to own tasks. Application has custom task creator, there is no need to logging into the 
    Django administration panel. All tasks can be creating in the application. The main page is divided by
    4&nbsp;columns. The first 3&nbsp;columns filter tasks by deadlines (delayed, today's and comming soon). 
    The last column contains completed tasks. In the left top corner is search engine by the name of the task.`,

    projectPurposeContent3: `&emsp;The purpose was to consolidate and expand knowledge of programming in Django 
    framework. The base application from <a href="https://www.youtube.com/watch?v=llbtoQTt4qw" class="yt-link" 
    target="_blank" rel="noopener noreferrer">tutorial</a> was modified and expanded - columns for sorting by 
    deadline were added. The views was created using Class Based Views technology.`,

    projectAboutContent4: `&emsp;A&nbsp;web application that simulates simply music metronome. You can set the 
    tempo and meter in the program. Depending on the value of beats per minute (bmp), program displays italian 
    tempo name. In the application is used timer from <a href="https://www.youtube.com/watch?v=x8PBWobv6NY" 
    class="yt-link" target="_blank" rel="noopener noreferrer">tutorial</a>.`,
    
    projectPurposeContent4: `&emsp;The purpose was to learn basics of JavaScript language.`,

    projectAboutContent5: `&emsp;A&nbsp;web application allowing to send songs to database and play in browser. 
    After creating an account and logging into the administration panel, the user can add songs. In the 
    song can add the title, artist, cover image and music file. On the main page is player with playlist containing 
    all added songs. Player allows for play song, go to previous or next song, choose any song from playlist and 
    rewind by slider. While the music is playing, the application displays current song's title, artist and 
    cover. After the end of the song, the next song from the playlist starts automatically. After the end of the 
    last song, player stops.`,

    projectPurposeContent5: `&emsp;The purpose was to connect learned knowledge of Django and JavaScript programming, 
    and mix both technologies. Backend of the application uses Django to store database of songs. The database is 
    passed as a string to the template. JavaScipt function converts passed string to list of objects including 
    informations about songs. Written in JavaScript player uses prepared list to play songs on main page.`,
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