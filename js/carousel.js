/*
	CUSTOM CAROUSEL JS
	Editor:Nefos
	Free to use
	Year:2022
	Project:Lavdas Food Service
*/


/*
	SETTINGS FOR YOUR CAROUSEL
*/
/* 1 = Enable, 0 =  Disable (Setting for enable or disable the auto play */
	auto_play = 1;
/* 1000 = 1s, Set the delay seconds */
	interval_seconds = 7000;
	
/*
	Here we start
*/

const all_btn = document.querySelectorAll(".carouselButton");

for (i = 0; i < all_btn; i++) {
	console_log("test1");
	all_btn[i].addEventListener("click", function() {
		all_btn[i].classList.add("activeCarouselItem");
		console.log("test");
	});
}


all_btn.forEach(function(btn,index) {
    btn.addEventListener("click", function() {
		btn.classList.add("activeCarouselItem");
		const all_carousel_items = document.querySelectorAll(".carouselItem");
		all_carousel_items[index].classList.add("activateItem");
		for (i=0; i < all_btn.length; i++) {
			if (i != index) {
				all_btn[i].classList.remove("activeCarouselItem");
				all_carousel_items[i].classList.remove("activateItem");
			}
		}
	});
});

function changeItem() {
	const all_items = document.querySelectorAll(".carouselItem");
	for (i=0; i < all_items.length; i++) {
		if (all_items[i].classList.contains("activateItem")) {
			index = i;
		}
	}
	console.log(findNext(index,all_items.length));
	all_items[index].classList.remove("activateItem");
	all_items[findNext(index,all_items.length)].classList.add("activateItem");
	const all_btn = document.querySelectorAll(".carouselButton");
	all_btn[index].classList.remove("activeCarouselItem");
	all_btn[findNext(index,all_items.length)].classList.add("activeCarouselItem");
}

function findNext(x,max) {
	if (x<max-1) {
		next = x+1;
	}
	else {
		next=0;
	}
	return next;
}

if (auto_play == 1) {
	setInterval(changeItem, interval_seconds);
}

const nav_toggle_btn = document.getElementsByClassName('navbar-toggler-icon');

nav_toggle_btn[0].addEventListener("click", function() {
	if (document.querySelector("body").style.overflow == "hidden") {
		document.querySelector("body").style.overflow = "visible";
	}
	else if (document.querySelector("body").style.overflow == "visible") {
		document.querySelector("body").style.overflow = "hidden";
	}
});

window.addEventListener('resize', function(event) {
	const element = document.querySelector('.navbar-collapse')
	const cssObj = window.getComputedStyle(element, null);

	let displayItem = cssObj.getPropertyValue("display");
    if (window.innerWidth > 991) {
		document.querySelector("body").style.overflowY = "visible";
	}
	if (window.innerWidth <= 991 && displayItem == "block") {
		document.querySelector("body").style.overflowY = "hidden";
	}
}, true);