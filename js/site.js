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
    $('.ui.embed').embed();
    setTimeout(function(){
        $('.ui.embed').children().trigger("click");
    },500)
    jQuery('.activity-cards .card .dimmable.image').dimmer({on: 'hover'});

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            goto(this.hash);
        }
        return false;
    });
});

// Messenger 洽談外掛程式 SDK code
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "628293563853646");
chatbox.setAttribute("attribution", "biz_inbox");
window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v13.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));