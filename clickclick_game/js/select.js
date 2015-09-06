jQuery(function() {
	var select = 1;
	/*var cor_sel_loop = 0;
	var colors = [
		'red',
		'blue',
		'green',
		'yellow',
		'gray'];*/
	var arrow = jQuery('<img src="img/up_arrow.png">');
	// init arrow
	arrow.appendTo('#cat-' + select);
	var i =0;
	setInterval(function() {
		var txt = 'img/cat-' + select + '-' + i++ + '.png';
		jQuery('#cat-' + select + '>img').first().attr('src', txt);
		if (i>3) i=0;
	}, 250)
	//<= 37,=> 39
	$('body').keydown(function(event) 
	{
		switch (event.keyCode) {
			case 37: // <-
				if (select > 1)
					arrow.appendTo('#cat-' + --select);
				break;
			case 39: // >
				if (select < 4)
					arrow.appendTo('#cat-' + ++select);
				break;
			case 38: // ^
				//cor_sel_loop = (++cor_sel_loop)%colors.length();

				break;
			case 40: // v
				//cor_sel_loop = (--cor_sel_loop)%colors.length();
				break;
			default:
				console.log(event);
				break;
		}
		console.log(select);
	});
});
