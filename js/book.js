var enablePrevious = 0;


function nextPage() {
	var countPages = document.getElementById('pages');
	var countPagesN = countPages.childElementCount;
	var countTurned = document.querySelectorAll('.turnedOdd').length;
	var countOdd = document.querySelectorAll('.odd').length;
	if (countTurned < countOdd) {
		countPages.children[2 * countTurned - 1].classList.add("turnedEven");
		countPages.children[2 * countTurned].classList.add("turnedOdd");
	}
}

function previousPage() {
	var countPages = document.getElementById('pages');
	var countPagesN = countPages.childElementCount;
	var countTurned = document.querySelectorAll('.turnedOdd').length;
	var countTurnedEven = document.querySelectorAll('.turnedEven').length;
	if (countTurned != 1) {
		countPages.children[((countTurned-1)*2) - 1].classList.remove("turnedEven");
		countPages.children[(countTurned-1)*2].classList.remove("turnedOdd");
	}
}

function reorder() {
	var countPages = document.getElementById('pages');
	var countPagesN = countPages.childElementCount;
	var countTurned = document.querySelectorAll('.odd').length;
	for (var i = 1; i < countTurned; i++) {
		countPages.children[2 * i].style.zIndex = countPagesN + i;
	}
}
reorder();