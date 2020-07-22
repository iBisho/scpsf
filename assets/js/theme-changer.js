const current = 0;

function switchColors() {
	document.head.style.setProperty('--primary-color', current ? '#fff' : '#000');
	if (current) {
		document.getElementById('theme-changer').innerHTML = 'Switch to Light Theme';
		current = 0;
	} else {
		current = 1;
		document.getElementById('theme-changer').innerHTML = 'Switch to Dark Theme';
	}
}