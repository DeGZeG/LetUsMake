$(function(){
    $('.hero__button').on('click', function(){
        let h = $('.header').height() + $('.hero').height();
        $('html, body').animate({'scrollTop': h}, 500);
    });
});