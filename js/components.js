//////////////////   React components   //////////////////


// General wrapper components
function GeneralWrapper(props) {
    return (
    <div className="general-wrapper">
        <h1 className="general-header">{props.header}</h1>
        <ul className="general-list">{props.children}</ul>
    </div>
)};


function GeneralTechnologyFA(props) {
    return (
        <li className="general-technology">
            <i className={props.fa}></i><p className="general-technology-name">{props.technology}</p>
        </li>
)};

function GeneralTechnologyImg(props) {
    return (
        <li className="general-technology">
            <img className="general-icon-img" src={props.src} alt="icon" />
            <p className="general-technology-name">{props.technology}</p>
        </li>
)};

function GeneralLink(props) {
    return (
        <li>
            <a href={props.link} className="general-link" target="_blank" rel="noopener noreferrer">
                <i className={props.fa}></i><p className="general-link-name">{props.name}</p>
            </a>
        </li>
)};


// Section header component

function SectionHeader(props) {
    return (
        <div className="section-header">
            <div className="section-header-icon"><i className={props.fa}></i></div><span id={props.id}></span>
        </div>
)};



// Project components
function Project(props) { return <div>{props.children}</div> };

function ProjectHeader(props) {
    return (
        <div className="project-header">
            <div className="project-name" id="name_test">{props.name}</div>
            <div className="project-links-wrapper">
                <div className="project-link-container">
                    <a href={props.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-globe"></i><p className="project-link-name">&nbsp;DEMO</p>
                    </a>
                </div>
                <div className="project-link-container">
                    <a href={props.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-square"></i><p className="project-link-name">&nbsp;GITHUB</p>
                    </a>
                </div>
            </div>
        </div>
)};

function ProjectTechnologiesList(props) { return <ul className="project-technologies-list">{props.children}</ul> }

function ProjectTechnologyFA(props) {
    return (
        <li className="project-technology">
            <i className={props.fa}></i><p className="project-technology-name">{props.technology}</p>
        </li>
)};

function ProjectTechnologyImg(props) {
    return (
        <li className="project-technology">
            <img className="project-icon-img" src={props.src} alt="icon" />
            <p className="project-technology-name">{props.technology}</p>
        </li>
)};

function ProjectDetails(props) { return <article className="project-details" id={props.id}></article> };

function ProjectScreen(props) {
    return ( <div className="project-screen">
                <img src={props.src} alt="project screen" height="150" />
            </div>
)};


// Contact components
function Contacts(props) { return <ul>{props.children}</ul> };

function ContactItem(props) { return <li className="contact-item"><i className={props.fa}></i><p className="contact-data">{props.data}</p></li> };

function ContactLink(props) {
    return (
        <li>
            <a href={props.link} className="contact-item contact-link" target="_blank" rel="noopener noreferrer">
                <i className={props.fa}></i><p className="contact-data">{props.name}</p>
            </a>
        </li>
)};


//////////////////   Render components   //////////////////


// Render general info 
ReactDOM.render(
    <GeneralWrapper header="Languages">
        <GeneralTechnologyFA fa="fab fa-python" technology="PYTHON" />
        <GeneralTechnologyFA fa="fab fa-js-square" technology="JAVASCRIPT" />
    </GeneralWrapper>,
    document.getElementById('general1')
)

ReactDOM.render(
    <GeneralWrapper header="Frameworks">
        <GeneralTechnologyImg src="images/django.png" technology="DJANGO" />
        <GeneralTechnologyImg src="images/express.png" technology="EXPRESS" />
        <GeneralTechnologyFA fa="fab fa-react" technology="REACT" />
        <GeneralTechnologyFA fa="fab fa-bootstrap" technology="BOOTSTRAP" />
        <GeneralTechnologyImg src="images/kivy.png" technology="KIVY" />
    </GeneralWrapper>,
    document.getElementById('general2')
)

ReactDOM.render(
    <GeneralWrapper header="Other">
        <GeneralTechnologyFA fa="fab fa-node-js" technology="NODE.JS" />
        <GeneralTechnologyFA fa="fab fa-html5" technology="HTML5" />
        <GeneralTechnologyFA fa="fab fa-css3-alt" technology="CSS3" />
        <GeneralTechnologyFA fa="fas fa-mobile-alt" technology="RWD" />
        <GeneralTechnologyFA fa="fab fa-git-alt" technology="GIT" />
        <GeneralTechnologyImg src="images/vscode.png" technology="VS CODE" />
        <GeneralTechnologyImg src="images/postman.png" technology="POSTMAN API" />
    </GeneralWrapper>,
    document.getElementById('general3')
)

ReactDOM.render(
    <GeneralWrapper header="Links">
        <GeneralLink link="https://github.com/lukaszsliwinski/" fa="fab fa-github-square" name="github" />
        <GeneralLink link="https://www.linkedin.com/in/lsliwinski/" fa="fab fa-linkedin" name="linkedin" />
    </GeneralWrapper>,
    document.getElementById('general4')
)


//Render section headers
ReactDOM.render(
    <SectionHeader fa="fas fa-user-alt" id="aboutHeader"/>,
    document.getElementById('header1')
)

ReactDOM.render(
    <SectionHeader fa="fas fa-laptop-code" id="projectsHeader"/>,
    document.getElementById('header2')
)

ReactDOM.render(
    <SectionHeader fa="fas fa-address-card" id="contactHeader"/>,
    document.getElementById('header3')
)


// Render projects
ReactDOM.render(
    <Project>
            <ProjectHeader 
                name="Music Player"
                demoLink="https://musicplayerportfolio.pythonanywhere.com/"
                githubLink="https://github.com/lukaszsliwinski/music_player/"            
            />
            <ProjectTechnologiesList>
                <ProjectTechnologyFA fa="fab fa-python" technology="PYTHON" />
                <ProjectTechnologyImg src="images/django.png" technology="DJANGO" />
                <ProjectTechnologyImg src="images/sqlite.png" technology="SQLITE" />
                <ProjectTechnologyFA fa="fab fa-html5" technology="HTML5" />
                <ProjectTechnologyFA fa="fab fa-css3" technology="CSS3" />
                <ProjectTechnologyFA fa="fab fa-js-square" technology="JAVASCRIPT" />
            </ProjectTechnologiesList>
            <ProjectDetails id="projectDetails1" />
            <ProjectScreen src="screens/player.png" />
    </Project>,
    document.getElementById('project1')
)

ReactDOM.render(
    <Project>
            <ProjectHeader 
                name="Task Planner"
                demoLink="https://taskplanner.pythonanywhere.com/"
                githubLink="https://github.com/lukaszsliwinski/task_planner/"            
            />
            <ProjectTechnologiesList>
                <ProjectTechnologyFA fa="fab fa-python" technology="PYTHON" />
                <ProjectTechnologyImg src="images/django.png" technology="DJANGO" />
                <ProjectTechnologyImg src="images/sqlite.png" technology="SQLITE" />
                <ProjectTechnologyFA fa="fab fa-html5" technology="HTML5" />
                <ProjectTechnologyFA fa="fab fa-css3" technology="CSS3" />
            </ProjectTechnologiesList>
            <ProjectDetails id="projectDetails2" />
            <ProjectScreen src="screens/task.png" />
    </Project>,
    document.getElementById('project2')
)

ReactDOM.render(
    <Project>
            <ProjectHeader 
                name="Weather App"
                demoLink="https://weatherappportfolio.herokuapp.com/"
                githubLink="https://github.com/lukaszsliwinski/weather_app/"            
            />
            <ProjectTechnologiesList>
                <ProjectTechnologyFA fa="fab fa-js-square" technology="JAVASCRIPT" />
                <ProjectTechnologyFA fa="fab fa-node-js" technology="NODE.JS" />
                <ProjectTechnologyImg src="images/express.png" technology="EXPRESS" />
                <ProjectTechnologyFA fa="fab fa-html5" technology="HTML5" />
                <ProjectTechnologyFA fa="fab fa-css3" technology="CSS3" />
                <ProjectTechnologyFA fa="fab fa-bootstrap" technology="BOOTSTRAP" />
                <ProjectTechnologyFA fa="fas fa-mobile-alt" technology="RWD" />
            </ProjectTechnologiesList>
            <ProjectDetails id="projectDetails3" />
            <ProjectScreen src="screens/weather.png" />
    </Project>,
    document.getElementById('project3')
)

ReactDOM.render(
    <Project>
            <ProjectHeader 
                name="E-mail Sender"
                demoLink="https://emailsenderportfolio.herokuapp.com/"
                githubLink="https://github.com/lukaszsliwinski/email_sender/"            
            />
            <ProjectTechnologiesList>
                <ProjectTechnologyFA fa="fab fa-js-square" technology="JAVASCRIPT" />
                <ProjectTechnologyFA fa="fab fa-node-js" technology="NODE.JS" />
                <ProjectTechnologyImg src="images/express.png" technology="EXPRESS" />
                <ProjectTechnologyFA fa="fab fa-react" technology="REACT" />
                <ProjectTechnologyFA fa="fab fa-html5" technology="HTML5" />
                <ProjectTechnologyFA fa="fab fa-css3" technology="CSS3" />
                <ProjectTechnologyFA fa="fab fa-bootstrap" technology="BOOTSTRAP" />
                <ProjectTechnologyFA fa="fas fa-mobile-alt" technology="RWD" />
            </ProjectTechnologiesList>
            <ProjectDetails id="projectDetails4" />
            <ProjectScreen src="screens/email.png" />
    </Project>,
    document.getElementById('project4')
)

ReactDOM.render(
    <Project>
            <ProjectHeader 
                name="Simply Metronome"
                demoLink="https://simplymetronome.herokuapp.com/"
                githubLink="https://github.com/lukaszsliwinski/simply_metronome/"            
            />
            <ProjectTechnologiesList>
                <ProjectTechnologyFA fa="fab fa-js-square" technology="JAVASCRIPT" />
                <ProjectTechnologyFA fa="fab fa-node-js" technology="NODE.JS" />
                <ProjectTechnologyImg src="images/express.png" technology="EXPRESS" />
                <ProjectTechnologyFA fa="fab fa-html5" technology="HTML5" />
                <ProjectTechnologyFA fa="fab fa-css3" technology="CSS3" />
            </ProjectTechnologiesList>
            <ProjectDetails id="projectDetails5" />
            <ProjectScreen src="screens/metronome.png" />
    </Project>,
    document.getElementById('project5')
)

ReactDOM.render(
    <Project>
            <ProjectHeader 
                name="Book Store"
                demoLink="https://bookstoreportfolio.herokuapp.com/"
                githubLink="https://github.com/lukaszsliwinski/book_store/"            
            />
            <ProjectTechnologiesList>
                <ProjectTechnologyFA fa="fab fa-js-square" technology="JAVASCRIPT" />
                <ProjectTechnologyFA fa="fab fa-react" technology="REACT" />
                <ProjectTechnologyFA fa="fab fa-html5" technology="HTML5" />
                <ProjectTechnologyFA fa="fab fa-css3" technology="CSS3" />
                <ProjectTechnologyFA fa="fab fa-bootstrap" technology="BOOTSTRAP" />
                <ProjectTechnologyFA fa="fas fa-mobile-alt" technology="RWD" />
            </ProjectTechnologiesList>
            <ProjectDetails id="projectDetails6" />
            <ProjectScreen src="screens/book.png" />
    </Project>,
    document.getElementById('project6')
)



// Render contact section
ReactDOM.render(
    <Contacts>
        <ContactItem fa="fas fa-envelope" data="lukaszsliwinski0@gmail.com" />
        <ContactItem fa="fas fa-phone-square-alt" data="+48 660 861 768" />
        <ContactLink link="https://www.linkedin.com/in/lsliwinski/" fa="fab fa-linkedin" name="linkedin" />
        <ContactLink link="https://github.com/lukaszsliwinski/" fa="fab fa-github-square" name="github" />
    </Contacts>,
    document.getElementById('contacts')
)


// Initial language statement after redner all components
setLanguage('eng');