let about = document.getElementById('about');
let main = document.getElementById('main');

function showHide() {
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