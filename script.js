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


jQuery('.nav-btn').click(function(){
    if ( jQuery(this).hasClass('active') )
    {
        jQuery('.header').removeClass('active')
    }
    else 
    {
        jQuery('.header .nav-btn').removeClass('active');
        jQuery(this).addClass('active');
    }
});


jQuery('.project .project-name').click(function(){ 
	if ( jQuery(this).parent().hasClass('extended') ) 
	{
		jQuery('.project').removeClass('extended');
	}
	else 
	{
        jQuery('.project').removeClass('extended');
        jQuery(this).parent().addClass('extended');
	}
});