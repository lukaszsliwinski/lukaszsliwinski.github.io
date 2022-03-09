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
    dotychczasowej nauki. Poszukuję nowych wyzwań, które umożliwią mi dalszy rozwój i&nbsp;poszerzenie praktycznej 
    wiedzy.`,

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
    danie jest dietetyczne (oznaczone ikoną jabłka), opis przygotowania, lista składników, lista przypraw. 
    Przepisy wyświetlane są na stronie głównej w&nbsp;formie kart. Po kliknięciu w&nbsp;kartę wyświetlane 
    są szczegóły. Dania można filtrować po krajach, kategoriach oraz dietetycznych poprzez menu z&nbsp;lewej 
    strony. W&nbsp;nagłówku strony znajduje się wyszukiwarka po nazwie dania.`,

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
    
    projectAboutContent5: `&emsp;Aplikacja internetowa pozwalająca na przesyłanie utworów do bazy danych 
    i&nbsp;odtwarzania w&nbsp;przeglądarce. Po utworzeniu konta i&nbsp;zalogowaniu do panelu administratorskiego, 
    użytkownik może dodawać utwory. W&nbsp;ramach utworu dodawany jest tytuł, wykonawca, okładka oraz plik 
    dźwiękowy. Na stronie głównej wyświetlony jest odtwarzać wraz z&nbsp;playlistą wszystkich dodanych utworów. 
    Odtwarzacz pozwala na odtworzenie utworu, przejście do następnęgo/poprzedniego, wybranie dowolnego utworu 
    z&nbsp;playlisty oraz przewijanie przy pomocy suwaka. W&nbsp;trakcie odtwarzania wyświetlany jest tytuł 
    utworu, wykonawca oraz okładka. Po zakończeniu odtwarzania utworu, automatycznie odtwarzany jest następny 
    z&nbsp;playlisty. Po zakończeniu ostatniego utworu odtwarzacz jest zatrzymywany.`,

    projectPurposeContent5: `&emsp;Celem było wykorzystanie dotychczas zdobytej wiedzy z&nbsp;zakresu programowania 
    w&nbsp;Django oraz JavaScript i&nbsp;połączenie obu technologii. Backend aplikacji wykorzystuje Django do 
    przechowywania utworów w&nbsp;bazie danych. Baza utworów jest przekazywana do szablonu i przypisywana
    do zmiennej w JavaScript jako lista obiektów przechowujących dane o&nbsp;utworach. Z&nbsp;przygotowanej 
    listy korzysta odtwarzacz na stronie głównej napisany przy użyciu JavaScript.`,

    projectAboutContent6: `&emsp;Aplikacja internetowa pozwalająca na wysłanie maila na dowolny adres. Po uruchomieniu
    na lokalnym serwerze, w przeglądarce wyświetlany jest formularz zawierający miejsce na tytuł maila, jego treść, oraz
    adres odbiorcy. Do wysłania wiadomości aplikacja używa uprzednio zdefiniowanego adresu i hasła nadawcy w domenie
    gmail.com. `,

    projectPurposeContent6: `&emsp;Program został napisany w&nbsp;celu opanowania podstaw Node.js oraz React.`,

    projectAboutContent7: `&emsp;Aplikacja internetowa do sprawdzania aktualnej pogody w danym mieście. Po wpisaniu
    nazwy miasta pojawiają się informacje pogodowe, takie jak temperatura, godzina wschodu i&nbsp;zachodu słońca,
    prędkość wiatru, zachmurzenie, ciśnienie i&nbsp;wilgotność powietrza. Aplikacja korzysta z&nbsp;zewnętrznego
    API dostępnego na https://openweathermap.org/`,

    projectPurposeContent7: `&emsp;Program został napisany w&nbsp;celu utrwalenia podstaw Node.js oraz w&nbsp;celu
    nauki programowania z&nbsp;wykorzystaniem zewnętrznego API.`,
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
    aboutContent: `&emsp;&emsp;&emsp;I&nbsp;am a&nbsp;beginner programmer taking the first steps in 
    creating web applications. During selfstudy, I&nbsp;learned the basic syntax of such languages ​​as 
    Python and JavaScript. As part of the practical exercises, I&nbsp;created several applications, 
    learning the basics of creating an application’s backend and frontend, methods of communication 
    between them, databases, creating responsive templates and version control system. Below 
    I&nbsp;present some effects of my learning process. I&nbsp;am looking for new challenges 
    which will enable me to further develop and expand my practical knowledge.`,

    projectAboutContent1: `&emsp;An application helping in the process of learning English vocabulary. 
    The user chooses how many words to translate. The program chooses random words from the database 
    and displays them in a&nbsp;sequence to be translated. For every correct translation the user scores 
    one point. The program displays the final result at the end. The database of words is located in 
    a&nbsp;csv file and can be modified by the user.`,

    projectPurposeContent1: `&emsp;The program was written to gain practical skills in Python programming, 
    using the Kivy framework. The first version of the program could be run only in console, then the GUI 
    interface was added. The final version was rebuilt to consolidate my knowledge about programming with 
    Kivy.`,

    projectAboutContent2: `&emsp;A&nbsp;web application for storing recipes in the form of a&nbsp;blog. 
    After creating an account and logging into the administration panel, the user can add recipes. In 
    the recipe they can add the name, country, category of the meal, photo, information whether the dish 
    is low-calorie (apple icon), description of the preparation, list of ingredients and list of spices 
    needed. The recipes are displayed on the home page as cards. Dishes can be filtered by countries, 
    categories and low-calorie details using the menu on the left. In the header of the page there is 
    a&nbsp;search engine which allows to look for recipes by the name of the dish.`,

    projectPurposeContent2: `&emsp;The purpose was to start learning programming web applications using 
    Python language. The application is based on a&nbsp;tutorial from Django documentation. In the process 
    of creating the application, I&nbsp;learned basics of HTML5 and CSS3, basics of databases on the example 
    of SQLite3 and the construction of a&nbsp;complete web application in Django. In the process of learning, 
    the layout was changed several times. The accordion menu using JavaScript was added after learning the 
    basics of JS. The website was fitted to different display dimensions using Responsive Web Design 
    technology.`,

    projectAboutContent3: `&emsp;A&nbsp;web application for task management. After creating an account and 
    logging in, the user can add tasks indicating a&nbsp;deadline. It is possible to create more than one 
    account, every user has access only to their own tasks. The application has a&nbsp;custom task creator, 
    there is no need to log into the Django administration panel. All tasks can be created in the application. 
    The main page is divided into 4&nbsp;columns. The first 3&nbsp;columns filter tasks by deadlines (overdue, 
    due today and due later). The last column displays completed tasks. In the left top corner there is 
    a&nbsp;search engine allowing to look for tasks by the name.`,

    projectPurposeContent3: `&emsp;The purpose was to consolidate and expand knowledge of programming in 
    Django framework. The base application from the <a href="https://www.youtube.com/watch?v=llbtoQTt4qw" 
    class="yt-link" target="_blank" rel="noopener noreferrer">tutorial</a> was modified and expanded 
    -&nbsp;columns for sorting by deadline were added. The views were created using Class Based Views 
    technology.`,

    projectAboutContent4: `&emsp;A&nbsp;web application that simulates a&nbsp;simple music metronome. 
    You can set the tempo and the meter in the program. Depending on the value of beats per minute (bmp), 
    the program displays the Italian tempo name. A&nbsp;timer from a&nbsp;<a 
    href="https://www.youtube.com/watch?v=x8PBWobv6NY" class="yt-link" target="_blank" rel="noopener 
    noreferrer">tutorial</a> is used in the application.`,
    
    projectPurposeContent4: `&emsp;The purpose was to learn basics of JavaScript language.`,

    projectAboutContent5: `&emsp;A&nbsp;web application allowing to send songs to a&nbsp;database and play 
    them in a&nbsp;browser. After creating an account and logging into the administration panel, the user 
    can add songs. For each song they can add the title, artist, cover image and music file. On the main 
    page there is a&nbsp;player with playlist containing all added songs. The player allows for playing songs, 
    go to the previous or the next one, choose any song from the playlist and scroll using a&nbsp;slider. While 
    the music is playing, the application displays current songs&nbsp;title, artist and cover. After the end of 
    the song, the next song from the playlist starts automatically. After the end of the last song, the player 
    stops.`,

    projectPurposeContent5: `&emsp;The purpose was to combine the knowledge of Django and JavaScript programming, 
    and mix both technologies. Backend of the application uses Django to store database of songs. The database is
    passed to the template and assigned to variable in JavaScipt as a&nbsp;list of objects including information
    about songs. Written in JavaScript, the player uses a&nbsp;prepared list to play songs on main page.`,

    projectAboutContent6: `&emsp;A&nbsp;web application allowing to send an e-mail to any address. After run
    on local host, the browser displays contact form for title, message and recipient's address. The app uses
    previously set gmail account and password to send a message.`,

    projectPurposeContent6: `&emsp;The purpose was to learn basics of Node.js and React.`,

    projectAboutContent7: `&emsp;A&nbsp;web application for checking actual weather in choosen city. After writing
    city name, there are shown weather conditions, like temperature, sunset and sunrise time, wind speed, cloudiness,
    pressure and humidity. An app uses external API from https://openweathermap.org/`,

    projectPurposeContent7: `&emsp;The purpose was to consolidate basics of Node.js and learn programming with the
    use of an external API.`,
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
            for (i=1; i<8; i++) {
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
            for (i=1; i<8; i++) {
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