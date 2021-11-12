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


jQuery('.project .project-name').click(function(){ 
	if ( jQuery(this).parent().hasClass('extended') ) 
	{
		jQuery('.project').removeClass('extended');
        jQuery(this).children().html('&#129095;');
	} else {
        jQuery('.project').removeClass('extended');
        jQuery('.extend-btn').html('&#129095;');
        jQuery(this).parent().addClass('extended');
        jQuery(this).children().html('&#129093;');
	}
});

// highlight navigation menu
const sections = document.querySelectorAll('.section-header');
const navLi = document.querySelectorAll('.header a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        };
    });
    navLi.forEach( a => {
        a.classList.remove('active');
        if (a.classList.contains(current)) {
            a.classList.add('active');
        };
    });
});