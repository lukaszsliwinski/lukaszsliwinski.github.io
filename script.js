const about = document.getElementById('about');
const main = document.getElementById('main');

const sections = document.querySelectorAll('.section-header');
const navBtns = document.querySelectorAll('.nav-btn');


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


// function for showing and hiding main information area
function showHideAbout() {
    if (about_btn.innerHTML == '&lt;&lt;') {
        about_btn.innerHTML = '&gt;&gt;';
        about.classList.remove('visible');
        about.classList.add('invisible');
        main.classList.remove('narrower');
        main.classList.add('wider');
    } else {
        about_btn.innerHTML = '&lt;&lt;';
        about.classList.remove('invisible');
        about.classList.add('visible');
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
