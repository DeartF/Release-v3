/*
------------------------------------------
			1)Введеие. Синтаксис
------------------------------------------
*/



/*Изменение css*/
$(function() {
	$('h1').css('color', '#0009bc',);
/*	$('h1').css( 'text-align', 'center');*/
})

/*Изменение html*/
$(function() {
	$('p.second').html("New text");
})

/*При нажатии на кнопку*/
$('#btn_start').click(function() {
	$('#message')
		.html('Message')
		.css('background-color', 'green')
		.parent()/*Ссылка на родительский элемент*/
		.css('background-color', 'fff4dd')
		.width(150)
		.height(80)
});

$('#btn_reset').click(function() {
	location.reload(); /*По сути перезагрузка страницы*/
});
/*
----------------------------------------------------------------
			2)Выбор селекторов.Оптимизация выборки
----------------------------------------------------------------
*/

/*$('#content').css('color' , 'red');
$('.wrapper-box').css('color' , 'green');
$('h1, h2').css('color' , 'blue');
$('article h2').css('color' ,'yellow');
$('article').find('h2').css('color' , 'red')
prev() - предыдущий
next() - следующий
* - выбор всех тегов
$('h3 + p').css('color' , 'red');
*/

/*$('.content a.button');
$('a.button' , 'content');  - лучше
$('.content').find('a.button');  - самое лучшие, чтобы проще разбираться в коде

$('.content a.button');
$('.content h3.title');

var $content = $(.'content');
$content.find('a.button');
$content.find('a.title');

$('.content div input:disabled');

$('.content div').find('input:disabled');*/
/*
-----------------------------------------------------------------
			3) Работа с CSS и изменение атрибутов элемента
-----------------------------------------------------------------
*/ 

/*$('article').find('p').css({'color': 'green',
							'font-size': '18px', //fontSize : '18px'
							'margin-left': '10px' )}//marginLeft : '10px'	----------- Изменение параметров CSS

$('#content').css('height', function(i, value) {
	return parseFloat(value)*1.2;
})*/
//$('#content').addClass('name');
//$('#content').removeClass('box'); // -------------------- Изминение классов
/*
$('#content').addClass(index, function(i, value) {
	return className;
})
*/

//$('#content').toggle(); // скрытие элемента

/*attr(attrName)
attr(attrName, attr Value)
removeattr(attrName) // -------------------- Изминение атрибутов

var altText = $('img').attr('alt')
$('img').attr('src' , 'img/default.jpg')

$('a#my').attr({
	'href' : 'google.com'
	'title' : 'Hello'
})*/
/*
-----------------------------------------------------------------
					4) Сoбытия в jQuery
-----------------------------------------------------------------
*/ 

/*$('a').click(function(event) {
	alert('Hello world!!!')
	event.preventDefault();
	event.stopPropagation();
	return false;
});
$('header').click(function(event) {
	alert('Hello 2!!!');
});
*/

$('#quantity').keyup(function() {
	var value = $(this).val(); // нахождение элемента и получение его значения
	$('#msg').text(value);
})
/*
-----------------------------------------------------------------
					5) Анимации Hide,Show,SlideUp,SlideDown
-----------------------------------------------------------------
*/ 

/*$('.anim').click(function() {
	$(this).hide(800);

});*/


/*$('.anim').hide('slow' , function() {
	alert('Hello');
})*/

/*$('#stick').click(function() {
	$('#hide').slideDown('slow');
})*/

function changeClass() {
	$(this).prev().toggleClass('active')
	}
	$(function() {
		$('article h2').click(function() {
			$(this).next().slideToggle();
			$(this).toggleClass('active');
		});
	});

	/*
-----------------------------------------------------------------
				6) Анимации Fade & Animate
-----------------------------------------------------------------
*/ 

/*$('.anim').click(function() {
	$(this).fadeOut(3000);
	$(this).fadeIn(3000);
	$(this).fadeTo('slow' , 0.4); // до определенного opacity
})*/

/*$('.anim').animate({ 
	'height' : '+=50px' 
})
		.animate({'width' : '-=25px'} , {quae : false}).stop();
	jQuery.fx.off = true;
*/
/*
-----------------------------------------------------------------------------
					7) Манипуляции с DOM After , Before , Append
-----------------------------------------------------------------------------
*/ 

//var $myDiv = $('<div id="my" class="page"> Hello </div>').appendTo("header").css('color' , 'red');
//var $myDiv = $('<div>Hello</div>',{'id' : 'my' , 'class' : 'page'}).appendTo('header').css('color' , 'green');
//var $myDiv = $('<div>Hello</div>').attr({'id' : 'my' , 'class' : 'page'}).appendTo('header').css('color' , 'blue');
//var myDiv = document.createElement('div');
//	myDiv.id = 'my';
//	myDiv.className = 'page';
//-------------------------------------
//$('p').after('<hr/>');
//$('<hr/>').insertAfter('p');
//$('<hr/>').insertBefore('p');
//$('p').append('<hr/>');
//prepend
//prependTo
/*
------------------------------------------------------------------------------------
					8) Манипуляции с DOM Replace , Wrap , Clone , Detach
------------------------------------------------------------------------------------
*/ 
//$('.second').replaceWith('<h2> New text </h2>');
//$('<h2> New text </h2>').replaceAll('.inner');
//$('.inner').wrap("<div class='new'> Text </div>")	//wrapAll wrapInner wrap 
//$('.first').clone().appendTo('.third');

//Detach - если надо удалить элемент а потом вернуть его обратно

/*var p;
$('button').click(function() {
	if(p) {
		p.appendTo('header');
		p = null;
	} else {
		p = $('.hello').detach();
	}
})*/

//$('.third').empty(); & remove
/*
------------------------------------------------------------------------------------
					9) Манипуляции с DOM Offset , Position , Height , innerHeight
------------------------------------------------------------------------------------
*/ 

// var p = $('.first');
// var offset = p.offset();
// p.html('left:' + offset.left + ',top:' + offset.top);
// $('.third').offset({left:10});

// var p = $('.first');
// var position = p.position();
// p.html('left:' + position.left + ',top:' + position.top);

/*function showHeight(element , height) {
	$('.2').text('Height of the ' + element + ' is' + height);	
}
$('#getp').click(function() {
	showHeight('paragraph' , $('p').height());
});
$('#getd').click(function() {
	showHeight('document' , $(document).height());
});
$('#getw').click(function() {
	showHeight('window' , $(window).height());
});*/

var p = $('.get');
$('.dom').text('innerHeight: ' + p.innerHeight());

