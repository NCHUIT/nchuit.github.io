var debug;

function goto(hash){ // hash need to be begun with '#'
    // var target = hash.split('/')[0]
    // var duration = Math.floor(Math.abs(jQuery(document).scrollTop() - jQuery(target).position().top)) + 10; // use how much pixels to move as the duration
    // jQuery('body').scrollTo(jQuery(target),duration);
    // setTimeout(function(){
    //     window.location.hash = hash;
    // },duration);
    var target = jQuery(hash);
    var duration = Math.floor(Math.abs(jQuery(document).scrollTop() - jQuery(target).position().top)) + 10; // use how much pixels to move as the duration
    target = target.length ? target : jQuery('[name=' + hash.slice(1) + ']');
    if (target.length) {
        jQuery('html,body').animate({
            scrollTop: target.offset().top
        }, duration, 'swing', function(){
            window.location.hash = hash;
        });
    }
}

jQuery(document).ready(function($) {
    jQuery('.ui.accordion').accordion();
    jQuery('.activity-cards .card .dimmable.image').dimmer({on: 'hover'});

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            goto(this.hash);
        }
        return false;
    });
});
