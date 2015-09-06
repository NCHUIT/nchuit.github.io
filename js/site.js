var debug;

function goto(hash){ // hash need to be begun with '#'
    var target = hash.split('/')[0]
    var duration = Math.floor(Math.abs(jQuery(document).scrollTop() - jQuery(target).position().top)) + 10; // use how much pixels to move as the duration
    jQuery('body').scrollTo(jQuery(target),duration);
    setTimeout(function(){
        window.location.hash = hash;
    },duration);
}

jQuery(document).ready(function($) {
    jQuery('.ui.accordion').accordion();
    jQuery('.activity-cards .card .dimmable.image').dimmer({on: 'hover'});

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
