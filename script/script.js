const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});
$(document).ready(function() {
    $(window).scroll(function() {
        $(".animated").each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scrollPosition > position - windowHeight + 200) { 
                $(this).addClass("active");
            }
        });
    });
});