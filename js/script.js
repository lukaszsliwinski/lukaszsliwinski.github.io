const general = document.getElementById('general');
const main = document.getElementById('main');
const project = document.getElementsByClassName('project')[0];
const firstProject = document.getElementById('changeable-margin');

const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.nav-btn');
const projNames = document.querySelectorAll('.project-name')

// Change everytime when project is added/removed
// The variable is used in moveProject funcion
const projectQuantity = 7;

// Reload the page every time when resize the browser
window.onresize = function(){ location.reload(); }

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
    if (general_btn.innerHTML == '<i class="fa-solid fa-angles-left"></i>') {
        general_btn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
        general.classList.remove('visible');
        general.classList.add('invisible');
        main.classList.remove('narrower');
        main.classList.add('wider');
    } else {
        general_btn.innerHTML = '<i class="fa-solid fa-angles-left"></i>';
        general.classList.remove('invisible');
        general.classList.add('visible');
        main.classList.remove('wider');
        main.classList.add('narrower');
    };
};


// function for moving cards with projects
function moveProject(btn) {
    let actualMargin = firstProject.style.marginLeft;
    let projectWidth = project.getBoundingClientRect().width;
    if (btn == 'next') {
        if (actualMargin == '') {
            firstProject.style.marginLeft = `${-projectWidth - 54}px`;
        } else if (actualMargin == `${(-projectWidth - 54) * (projectQuantity - 1)}px`) {
            firstProject.style.marginLeft = '0px';
        } else {
            firstProject.style.marginLeft = String(parseInt(actualMargin.slice(0, -2)) - projectWidth - 54) + 'px';
        };
    } else {
        if (actualMargin == '' || actualMargin == '0px') {
            firstProject.style.marginLeft = `${(-projectWidth - 54) * (projectQuantity - 1)}px`
        } else {
            firstProject.style.marginLeft = String(parseInt(actualMargin.slice(0, -2)) + projectWidth + 54) + 'px';
        };
    };
};