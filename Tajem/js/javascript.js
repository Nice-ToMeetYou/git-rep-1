$(document).ready(function(){
	var touch = $('#touch-menu');
	var menu = $('.header__ul-main');

$(touch).on('click', function(e) {
	e.preventDefault();
	menu.slideToggle();	
});
$(window).resize(function(){
	var wid = $(window).width();
	if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});		
});

/*Обработка формы и проверка*/

function valid(form){
	var fail = false;
	var name = form.name.value;
	var email = form.email.value;
	var subject = form.subject.value;
	var massege = form.massege.value;
	var adr_pattern = /[0-9a-zA-Z_-]+@[0-9a-zA-Z_]+\.[a-z]{2,5}/i;

	if (name == "" || name == " "){ 
		fail = "Введите имя";
	} else if (email == "" || email == " ") {
		fail = "Введите почту";
	} else if (adr_pattern.test(email) == false) {
		fail = "Вы ввели не коректный почтовый адрес!";
	} else if (subject == "" || subject == " ") {
		fail = "Введите тему сообщения";
	} else if (massege == "" || massege == " ") {
		fail = "Введите сообщение";
	} if (fail) {
		alert(fail);
	} else {
		window.location = "index.html";
	}
}


/*стрелка вверх*/
/*window.onload = function() { // после загрузки страницы

	var scrollUp = document.getElementById('scrollup'); // найти элемент

	scrollUp.onmouseover = function() { // добавить прозрачность
		scrollUp.style.opacity=0.5;
		scrollUp.style.filter  = 'alpha(opacity=30)';
	};

	scrollUp.onmouseout = function() { //убрать прозрачность
		scrollUp.style.opacity = 0.8;
		scrollUp.style.filter  = 'alpha(opacity=50)';
	};

	scrollUp.onclick = function() { //обработка клика
		window.scrollTo(0,0);
	};

// show button

	window.onscroll = function () { // при скролле показывать и прятать блок
		if ( window.pageYOffset > 500 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
};*/

$(document).ready(function(){
	// появление/затухание кнопки #back-top
	$(function (){
		// прячем кнопку #back-top
		$("#scrollup").hide();
	
		$(window).scroll(function (){
			if ($(this).scrollTop() > 200){
				$("#scrollup").fadeIn();
			} else{
				$("#scrollup").fadeOut();
			}
		});

		// при клике на ссылку плавно поднимаемся вверх
		$("#scrollup img").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 1000);
			return false;
		});
	});
});

