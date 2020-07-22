let current = 0;

function switchColors() {
	document.documentElement.style.setProperty('--secondary-color', current ? '#fff' : '#0e0d0d');
	if (current) {
		document.getElementById('theme-changer').innerHTML = 'Switch to Dark Theme';
		current = 0;
	} else {
		current = 1;
		document.getElementById('theme-changer').innerHTML = 'Switch to Light Theme';
	}
}