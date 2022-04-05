// Define objects with html ids as keys and text contents as values

// Define polish content
const plContent = {
    menuAboutBtn: 'O mnie',
    menuProjectsBtn: 'Projekty',
    menuContactBtn: 'Kontakt',
    
    aboutHeader: 'O mnie',
    projectsHeader: 'Projekty',
    contactHeader: 'Kontakt',

    aboutContent: `&emsp;&emsp;&emsp;Jestem początkującym programistą stawiającym pierwsze kroki w&nbsp;tworzeniu 
    aplikacji internetowych. W&nbsp;trakcie samodzielnej nauki poznałem podstawową składnię takich języków jak 
    Python oraz JavaScript. W&nbsp;ramach ćwiczeń praktycznych utworzyłem kilka aplikacji poznając podstawy 
    tworzenia backend&#8209;u i&nbsp;frontend&#8209;u aplikacji, sposoby komunikacji między nimi, 
    tworzenie szablonów responsywnych i&nbsp;system kontroli wersji. Poniżej przedstawiam kilka efektów mojej 
    dotychczasowej nauki. Poszukuję nowych wyzwań, które umożliwią mi dalszy rozwój i&nbsp;poszerzenie praktycznej 
    wiedzy.`,

    projectDetails1: `&emsp;Aplikacja internetowa pozwalająca na przesyłanie utworów do bazy danych 
    i&nbsp;odtwarzania w&nbsp;przeglądarce. Po utworzeniu konta i&nbsp;zalogowaniu do panelu administratorskiego, 
    użytkownik może dodawać utwory. W&nbsp;ramach utworu dodawany jest tytuł, wykonawca, okładka oraz plik 
    dźwiękowy. Na stronie głównej wyświetlony jest odtwarzacz wraz z&nbsp;playlistą wszystkich dodanych utworów. 
    Odtwarzacz pozwala na odtworzenie utworu, przejście do następnęgo/poprzedniego, wybranie dowolnego utworu 
    z&nbsp;playlisty oraz przewijanie przy pomocy suwaka. W&nbsp;trakcie odtwarzania wyświetlany jest tytuł 
    utworu, wykonawca oraz okładka. Po zakończeniu odtwarzania utworu, automatycznie odtwarzany jest następny 
    z&nbsp;playlisty. Po zakończeniu ostatniego utworu odtwarzacz jest zatrzymywany.`,

    projectDetails2: `&emsp;Aplikacja internetowa do zarządzania zadaniami do wykonania. Po utworzeniu 
    konta i&nbsp;zalogowaniu można w&nbsp;aplikacji dodawać zadania wraz z&nbsp;terminem wykonania. Można 
    utworzyć więcej niż jedno konto, każdy użytkownik ma wtedy dostęp tylko do swoich zadań. Strona główna 
    podzielona jest na 4&nbsp;kolumny. 
    3&nbsp;pierwsze filtrują zadania po datach (opóźnione, dzisiejsze, przyszłe). Ostatnia kolumna zawiera 
    zadania oznaczone jako zakończone. W&nbsp;lewym górnym rogu znajduje się wyszukiwarka po tytule zadania.
    Wykorzystano aplikację 
    z&nbsp;<a href="https://www.youtube.com/watch?v=llbtoQTt4qw" class="yt-link" target="_blank" rel="noopener 
    noreferrer">tutorialu</a>, która została zmodyfikowana i&nbsp;rozszerzona o&nbsp;kolumny do sortowania 
    zadań po dacie. `,

    projectDetails3: `&emsp;Aplikacja internetowa do sprawdzania aktualnej pogody w danym mieście. Po wpisaniu
    nazwy miasta pojawiają się informacje pogodowe, takie jak temperatura, godzina wschodu i&nbsp;zachodu słońca,
    prędkość wiatru, zachmurzenie, ciśnienie i&nbsp;wilgotność powietrza. Aplikacja korzysta z&nbsp;zewnętrznego
    API dostępnego na <a href="https://openweathermap.org/" class="yt-link" target="_blank" rel="noopener 
    noreferrer">https://openweathermap.org/</a>`,

    projectDetails4: `&emsp;Aplikacja internetowa pozwalająca na wysłanie maila na dowolny adres. Po uruchomieniu
    na lokalnym serwerze, w przeglądarce wyświetlany jest formularz zawierający miejsce na tytuł maila, jego treść, oraz
    adres odbiorcy. Do wysłania wiadomości aplikacja używa uprzednio zdefiniowanego adresu i hasła nadawcy w domenie
    outlook.com. `,

    projectDetails5: `&emsp;Aplikacja internetowa symulująca działanie prostego metronomu. W&nbsp;programie 
    można ustawić tempo oraz metrum. W&nbsp;zależności od ilości uderzeń na minutę (bpm), program podaje włoską 
    nazwę tempa. W&nbsp;aplikacji wykorzystano gotowy timer z&nbsp;<a href="https://www.youtube.com/watch?v=x8PBWobv6NY" 
    class="yt-link" target="_blank" rel="noopener noreferrer">tutorialu</a>. `,
};

// Define english content
const engContent = {
    menuAboutBtn: 'About',
    menuProjectsBtn: 'Projects',
    menuContactBtn: 'Contact',

    aboutHeader: 'About',
    projectsHeader: 'Projects',
    contactHeader: 'Contact',

    aboutContent: `&emsp;&emsp;&emsp;I&nbsp;am a&nbsp;beginner programmer taking the first steps in 
    creating web applications. During selfstudy, I&nbsp;learned the basic syntax of such languages ​​as 
    Python and JavaScript. As part of the practical exercises, I&nbsp;created several applications, 
    learning the basics of creating an application’s backend and frontend, methods of communication 
    between them, creating responsive templates and version control system. Below 
    I&nbsp;present some effects of my learning process. I&nbsp;am looking for new challenges 
    which will enable me to further develop and expand my practical knowledge.`,

    projectDetails1: `&emsp;A&nbsp;web application allowing to send songs to a&nbsp;database and play 
    them in a&nbsp;browser. After creating an account and logging into the administration panel, the user 
    can add songs. For each song they can add the title, artist, cover image and music file. On the main 
    page there is a&nbsp;player with playlist containing all added songs. The player allows for playing songs, 
    go to the previous or the next one, choose any song from the playlist and scroll using a&nbsp;slider. While 
    the music is playing, the application displays current songs&nbsp;title, artist and cover. After the end of 
    the song, the next song from the playlist starts automatically. After the end of the last song, the player 
    stops.`,

    projectDetails2: `&emsp;A&nbsp;web application for task management. After creating an account and 
    logging in, the user can add tasks indicating a&nbsp;deadline. It is possible to create more than one 
    account, every user has access only to their own tasks. 
    The main page is divided into 4&nbsp;columns. The first 3&nbsp;columns filter tasks by deadlines (overdue, 
    due today and due later). The last column displays completed tasks. In the left top corner there is 
    a&nbsp;search engine allowing to look for tasks by the name.
    The base application from the <a href="https://www.youtube.com/watch?v=llbtoQTt4qw" 
    class="yt-link" target="_blank" rel="noopener noreferrer">tutorial</a> was modified and expanded 
    -&nbsp;columns for sorting by deadline were added.`,

    projectDetails3: `&emsp;A&nbsp;web application for checking actual weather in choosen city. After writing
    city name, there are shown weather conditions like temperature, sunset and sunrise time, wind speed, cloudiness,
    pressure and humidity. The app uses external API from <a href="https://openweathermap.org/" class="yt-link" target="_blank" rel="noopener 
    noreferrer">https://openweathermap.org/</a>`,

    projectDetails4: `&emsp;A&nbsp;web application allowing to send an e-mail to any address. After run
    on local host, the browser displays contact form for title, message and recipient's address. The app uses
    previously set outlook account and password to send a message.`,

    projectDetails5: `&emsp;A&nbsp;web application that simulates a&nbsp;simple music metronome. 
    You can set the tempo and the meter in the program. Depending on the value of beats per minute (bmp), 
    the program displays the Italian tempo name. A&nbsp;timer from a&nbsp;<a 
    href="https://www.youtube.com/watch?v=x8PBWobv6NY" class="yt-link" target="_blank" rel="noopener 
    noreferrer">tutorial</a> is used in the application.`,
};


// Define function to set language
function setLanguage(lang) {
    if (lang == 'pl') {
        // Set polish document headers and about content
        for (const el in plContent) {
            document.getElementById(el).innerHTML = plContent[el];
        };
    } else {
        // Set english document headers and about content
        for (const el in engContent) {
            document.getElementById(el).innerHTML = engContent[el];
        };
    };
};