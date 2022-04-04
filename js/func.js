const general = document.getElementById('general');
const main = document.getElementById('main');

const sections = document.querySelectorAll('section');
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