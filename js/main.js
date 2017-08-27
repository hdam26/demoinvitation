var scrolled = document.documentElement.scrollTop;
var screenHeight = screen.height + 20;
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
};

var navbarBackground = function(scroll_start = 0) {
	var startPosition = $('.homeSlide');
	var _offset = startPosition.offset();
	if (startPosition.length) {
		$(document).scroll(function() {
			scroll_start = $(this).scrollTop();
			if (scroll_start > _offset.top) {
				$('.navbar.fixed-top').css('background-color', '#fff');
				$('.navbar.fixed-top').css('max-height', '60px');
				$('.navbar .navbar-brand').css('color', '#DAAEA1');
				$('.navbar .navbar-brand').css('font-size', '30px');
				$('.navbar .nav-link').css('color', '#DAAEA1');
			} else {
				$('.navbar.fixed-top').css('background-color', 'transparent');
				$('.navbar.fixed-top').css('max-height', '70px');
				$('.navbar .navbar-brand').css('color', 'rgba(0,0,0,.5)');
				$('.navbar .navbar-brand').css('font-size', '35px');
				$('.navbar .nav-link').css('color', 'rgba(0,0,0,.5)');
			}
		});
	}
};

var createCountdown = function(thedate) {
	var dateNow = new Date().getTime()/1000;
	var theDay = new Date(thedate).getTime()/1000;
	var toCount = theDay - dateNow;
	var counter = $('#counterToDay').FlipClock(toCount, {
		clockFace: 'DailyCounter',
		countdown: true	
	});
};

function initMap() {
	var place = {
			lat: -6.893686,
			lng: 107.6090294
		};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: place
	});
	var marker = new google.maps.Marker({
		position: place,
		map: map
	});
	
	var detailLocation = '<div><p style="color: black; font-weight: bold;">Masjid Salman ITB</p>' + 
						 '<p style="color: black;">Place we will get married</p></div>';
	
	var infoWindow = new google.maps.InfoWindow({content: detailLocation});
	infoWindow.open(map, marker);
}

$(document).ready(function() {
	/* window.onscroll = function () {
		showElement(scrolled, document.getElementById('titleIntroduction'), screenHeight);
	} */
	var scrollStart = 0;
	navbarBackground(scrollStart);
	createCountdown("November 10, 2017");
	initMap();
});