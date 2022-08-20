var debug;

function goto(hash) { // hash need to be begun with '#'
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
    }, duration, 'swing', function () {
      window.location.hash = hash;
    });
  }
}

jQuery(document).ready(function ($) {
  jQuery('.ui.accordion').accordion();
  $('.ui.embed').embed();
  setTimeout(function () {
    $('.ui.embed').children().trigger("click");
  }, 500)
  jQuery('.activity-cards .card .dimmable.image').dimmer({ on: 'hover' });

  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      goto(this.hash);
    }
    return false;
  });
});

// initialize PayPal Button
paypal.Buttons({
  style: {
    shape: 'pill',
    color: 'gold',
    layout: 'vertical',
    label: 'paypal',

  },

  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{ "description": "社費", "amount": { "currency_code": "TWD", "value": 300 } }]
    });
  },

  onApprove: function (data, actions) {
    return actions.order.capture().then(function (orderData) {
      // Full available details
      console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

      // Show a success message within this page, e.g.
      const element = document.getElementById('paypal-button-container');
      element.innerHTML = '';
      element.innerHTML = '<h3>謝謝支持!</h3>';

      // Or go to another URL:  actions.redirect('thank_you.html');
    });
  },

  onError: function (err) {
    console.log(err);
  }
}).render('#paypal-button-container');

// Messenger chat plugin SDK code
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "628293563853646");
chatbox.setAttribute("attribution", "biz_inbox");
window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v14.0'
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Google Analytics
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o), m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-67273442-1', 'auto');
ga('send', 'pageview');