$(document).ready(function(){
    
    $(document).mousemove(function(event) {
        $('.custom-cursor').css({
            'left': event.pageX,
            'top': event.pageY
        });
    });

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        
        let winScroll = $(document).scrollTop();
        let height = $(document).height() - $(window).height();
        let scrolled = (winScroll / height) * 100;
        $("#myBar").width(scrolled + "%");
        
        $(".section").each(function(){
            if ($(this).offset().top - $(window).scrollTop() < 600) {
                $(this).addClass("show");
            }
        });
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
        $('.navbar .menu').removeClass("active"); 
        $('.menu-btn i').removeClass("active"); 
    });

    var typed = new Typed(".typing, .typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $('#contact-form').submit(function(e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('#message').val();

        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Your message has been sent!');
            $('#name').val('');
            $('#email').val('');
            $('#subject').val('');
            $('#message').val('');
        }
    });

    $('.cta-btn').hover(function() {
        $(this).toggleClass('cta-btn-hover');
    });

    $('.portfolio-item').hover(function() {
        $(this).toggleClass('portfolio-item-hover');
    });
});
