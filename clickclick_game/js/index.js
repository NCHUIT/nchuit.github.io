// jQuery(function() {
// 	var clicked = {};
// 	var target = 100;
// 	var main = jQuery("#main");
// 	$('body').keyup(function(event) {
// 		if (event.keyCode <= 32)
// 			return;
// 		if (clicked[event.keyCode]){
// 			if (clicked[event.keyCode][0] < target) {
// 				clicked[event.keyCode][1].text(event.key + ' : ' + (++clicked[event.keyCode][0]));
// 				clicked[event.keyCode][1].addClass('animated wiggle');
// 			} else {
// 				clicked[event.keyCode][1].css({
// 					'font-size' : '100px'
// 				});
				
// 				$('body').unbind('keyup');
// 			}
// 		} else {
// 			var p = jQuery('<p>'+event.key+' : 0</p>');
// 			p.addClass('animated bounceInRight');
// 			clicked[event.keyCode] = [0, p];
// 			main.append(p);
// 		}
// 	});
// 	$('body').keydown(function(event) {
// 		if (clicked[event.keyCode]) {
// 			if (clicked[event.keyCode][1].removeClass('animated wiggle'));
// 		}
// 	});
// });

jQuery(function() {
	var select = 1;
	var cats = [
		'', // this is to let cats start by 1
		{
			'obj' : jQuery('<img src="img/cat-1-0.png" class="img-circle"/>'),
			'key' : 0,
			'numclick' : 0,
			'imgloop' : 0,
		},
		{
			'obj' : jQuery('<img src="img/cat-2-0.png" class="img-circle"/>'),
			'key' : 0,
			'numclick' : 0,
			'imgloop' : 0,
		},
		{
			'obj' : jQuery('<img src="img/cat-3-0.png" class="img-circle"/>'),
			'key' : 0,
			'numclick' : 0,
			'imgloop' : 0,
		},
		{
			'obj': jQuery('<img src="img/cat-4-0.png" class="img-circle"/>'),
			'key' : 0,
			'numclick' : 0,
			'imgloop' : 0,
		}
		
		
		
	];
	var arrow = jQuery('<img src="img/up_arrow.png">');
	var msg =  {
		'press_again' : jQuery('<div>Press this selection and the key again to use this cat to play game</div>'),
		'selected' : function(ary){
				return jQuery('<div>cat-' + ary[1] + 'is selected by Key:'+ String.fromCharCode(ary[0]) +'</div>');
		},
		'keyused' : jQuery('<div>This key is already in used</div>'),
	};
	scope = '#select_cat';
	function $sel_catid(select) {
		return jQuery(scope + ' #cat-' + select);
	};
	function $sel_cat_col(select) {
		return jQuery(scope + ' #cat-col-' + select);
	};
	function $sel_cat_mask(select) {
		return jQuery(scope + ' #cat-mask-' + select);
	}
	// init func
	(function(){
		for (var i = 1; i< cats.length; i++) {
			cats[i].obj.appendTo($sel_catid(i));
		};
		arrow.appendTo($sel_cat_col(select));
	})();
	
	var num_img_cycle =0;
	setInterval(function() {
		if ( scope == '#select_cat' ) {
			var imgsrc = 'img/cat-' + select + '-' + (num_img_cycle) + '.png';
			cats[select].obj.attr('src', imgsrc);
			for (var i=1; i<cats.length; i++) {
				if(cats[i].key != 0) {
					var imgsrc = 'img/cat-' + i + '-' + (num_img_cycle) + '.png';
					cats[i].obj.attr('src', imgsrc);
				}
			}
			if (++num_img_cycle>3) num_img_cycle=0;
		}
	}, 150);
	jQuery('#select_cat').focus().keydown(function(event)  {
/*<-*/	if( 37 == event.keyCode) { 
			if (select > 1)
				arrow.appendTo($sel_cat_col(--select));
		} else
/*->*/	if( 39 == event.keyCode) {
			if (select < 4)
				arrow.appendTo($sel_cat_col(++select));	
		} else
/*^*/	if( 38 == event.keyCode) {
			//
		} else
/*v*/	if ( 40 == event.keyCode) {
			cats[select].obj.animate().appendTo('#moveto');
		} else
/*Esc*/	if ( 27 == event.keyCode) {
		} else
/*CR*/	if ( 13 == event.keyCode) {
			jQuery('#register').modal('show');
		} else 
		if ( event.keyCode > 32 ) {
			for (var i = 1; i < cats.length; i++) {
				if (cats[i].key == event.keyCode)
					return;
			};
			cats[select].key = event.keyCode;
			$sel_cat_mask(select).css({
				'backgroundColor': 'rgba(0, 0, 0, 0.35)',
			}).children('p').text(String.fromCharCode(cats[select].key));
		}
		else {
			console.log(event);
		}
	});

	function $sel_cat_background(select) {
		return jQuery(scope + ' #cat-background-' + select);
	};
	function $cat_num_click(select) {
		return jQuery(scope + ' #cat-num-' + select);
	};
	jQuery('#start_btn').on('click',function(event) {
		jQuery('#register').modal('hide').on('hidden.bs.modal',function(event) {
			jQuery('#select_cat').remove();
			scope = '#game_start';
			//init
			for (var i = 1; i< cats.length; i++) {
				if( cats[i].key != 0) {
					cats[i].obj.prependTo($sel_catid(i));
					$sel_cat_background(i).children('p').text(String.fromCharCode(cats[i].key));
					$cat_num_click(i).text(cats[i].numclick);
				}
			};
			jQuery('#game_start').focus();
		});
	});
	function imgsrc(select, loop) {
		return 'img/cat-' + select + '-' + loop + '.png'
	}
	jQuery('#game_start').keyup(function(event) {
		for (var i = 1; i < cats.length; i++) {
		 	if (event.keyCode == cats[i].key) {
		 		cats[i].numclick++;
				cats[i].imgloop++;
				if(cats[i].imgloop >3) cats[i].imgloop=0;
				cats[i].obj.attr('src', imgsrc(i,cats[i].imgloop));
				$cat_num_click(i).text(cats[i].numclick);
				if ( cats[i].numclick == 100) {
					cats[i].obj.css({
						'width': '600px',
					});
					$cat_num_click(i).remove();
					jQuery('#game_start').unbind('keyup');
				}
		 	}
		 };
	});
});	