const backgrounds = new Array(
	'url(\'assets/images/Background.jpg\')',
	'url(\'assets/images/Banner.png\')'
);

let current = 0;

function nextBackground() {
	document.body.style.backgroundImage = backgrounds[current = +current % backgrounds.length];
	setTimeout(nextBackground, 10000);
}

setTimeout(nextBackground, 10000);