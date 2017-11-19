var scrolled = document.documentElement.scrollTop;
var screenHeight = screen.height + 20;

/* Function */
var showElement = function(scrolled, elementId, screenHeight) {
	console.log(screenHeight);
	console.log(scrolled);
	if (scrolled > screenHeight) {
		elementId.classList.add('fadeIn');
		if (elementId.classList.contains('fadeOut')) {
			elementId.classList.remove('fadeOut');
		}
	} else if (scrolled < screenHeight) {
		elementId.classList.add('fadeOut');
		if (elementId.classList.contains('fadeIn')) {
			elementId.classList.remove('fadeIn');
		}
	}
},
	navbarBackground = function(scroll_start = 0) {
	var startPosition = $('.homeSlide');
	var _offset = startPosition.offset();
	if (startPosition.length) {
		$(document).scroll(function() {
			scroll_start = $(this).scrollTop();
			if (scroll_start > _offset.top) {
				$('.navbar.fixed-top').css('background-color', '#fff');
				$('.navbar.fixed-top').css('box-shadow', '2px 2px 5px #888888');
				$('.navbar.fixed-top').css('max-height', '60px');
				$('.navbar .navbar-brand').css('color', '#DAAEA1');
				$('.navbar .navbar-brand').css('font-size', '30px');
				$('.navbar .nav-link').css('color', '#DAAEA1');
			} else {
				$('.navbar.fixed-top').css('background-color', 'transparent');
				$('.navbar.fixed-top').css('box-shadow', 'none');
				$('.navbar.fixed-top').css('max-height', '70px');
				$('.navbar .navbar-brand').css('color', 'rgba(0,0,0,.5)');
				$('.navbar .navbar-brand').css('font-size', '35px');
				$('.navbar .nav-link').css('color', 'rgba(0,0,0,.5)');
			}
		});
	}
},
	createCountdown = function(thedate, container) {
	/* var dateNow = new Date().getTime()/1000;
	var theDay = new Date(thedate).getTime()/1000;
	var toCount = theDay - dateNow;
	var counter = $('#counterToDay').FlipClock(toCount, {
		clockFace: 'DailyCounter',
		countdown: true	
	}); */
	var targetDate = new Date(thedate).getTime();
	console.log(targetDate);
	var _container = document.getElementById(container);
	var days, hours, minutes, seconds;
	setInterval(function() {
		var now = new Date().getTime(),
			secondsLeft = (targetDate - now) / 1000;
		days = parseInt(secondsLeft / 86400);
		secondsLeft = (secondsLeft % 86400);
		
		hours = parseInt(secondsLeft / 3600);
		secondsLeft = (secondsLeft % 3600);
		
		minutes = parseInt(secondsLeft / 60);
		seconds = parseInt(secondsLeft % 60);
	_container.innerHTML =  '<span class="days timer"> <b>' + days + ' :&nbsp;</b> </span>' +
							'<span class="hours timer"> <b> ' + hours + ' :&nbsp;</b> </span>' +
							'<span class="minutes timer"> <b> ' + minutes + ' :&nbsp;</b> </span>' +
							'<span class="seconds timer"> <b> ' + seconds + '</b> </span>';
	}, 1000);
};

function changeStoryView() {
	console.log('change View');
	if (screen.width <= 575) {
		var elem = document.getElementsByClassName('storyTextRight');
		console.log(elem[0]);
		var storyText = document.getElementsByClassName('storyText');
		var addText = document.getElementsByClassName('additionalText');
		for(var i = 0; i < elem.length; i++) {
			elem[i].style.display = 'none';
		}
		for(var i = 0; i < addText.length; i++) {
			addText[i].style.display = 'block';
		}
		for(var i = 0; i < storyText.length; i++) {
			storyText[i].style.textAlign = 'center';
		}
	}
}

$(document).ready(function() {
	/* window.onscroll = function () {
		showElement(scrolled, document.getElementById('titleIntroduction'), screenHeight);
	} */
	var mapFrame = document.getElementById('weddingLocation');
	
	var scrollStart = 0;
	navbarBackground(scrollStart);
	createCountdown("Dec, 17, 2017", 'counterToDay');
	changeStoryView();
});