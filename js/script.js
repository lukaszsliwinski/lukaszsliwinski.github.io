const general = document.getElementById('general');
const main = document.getElementById('main');

const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.nav-btn');
const projNames = document.querySelectorAll('.project-name')


// highlight navigation menu
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        };
    });
    navBtns.forEach( btn => {
        btn.classList.remove('active');
        if (btn.classList.contains(currentSection)) {
            btn.classList.add('active');
        };
    });
});


// function for showing and hiding general information area
function showHideGeneral() {
    console.log('działa?');
    if (general_btn.innerHTML == '&lt;&lt;') {
        general_btn.innerHTML = '&gt;&gt;';
        general.classList.remove('visible');
        general.classList.add('invisible');
        main.classList.remove('narrower');
        main.classList.add('wider');
    } else {
        general_btn.innerHTML = '&lt;&lt;';
        general.classList.remove('invisible');
        general.classList.add('visible');
        main.classList.remove('wider');
        main.classList.add('narrower');
    };
};


// function for showing and hiding project details
function showHideProject(id) {
    let project = document.getElementById(id);
    if (project.parentElement.classList.contains('extended')) {
        Array.from(document.getElementsByClassName('project')).forEach( proj => {
            proj.classList.remove('extended');
        });
        project.firstElementChild.innerHTML = '&#129095;';
    } else {
        Array.from(document.getElementsByClassName('project')).forEach( proj => {
            proj.classList.remove('extended');
        });
        Array.from(document.getElementsByClassName('extend-btn')).forEach( btn => {
            btn.innerHTML = '&#129095;';
        });
        project.parentElement.classList.add('extended');
        project.firstElementChild.innerHTML = '&#129093;';
    };
};