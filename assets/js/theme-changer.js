let current = 1;

const colors = {
	white: {
		primary: '#000',
		secondary: '#fff',
		text: '#373737'
	},
	dark: {
		primary: '#000',
		secondary: '#0a0a0a',
		text: '#bbb0b0'
	}
}

function switchColors() {
	document.documentElement.style.setProperty('--secondary-color', current ? colors.white.secondary : colors.dark.secondary);
	document.documentElement.style.setProperty('--text-color', current ? colors.white.text : colors.dark.text);
	if (current) {
		document.getElementById('theme_changer').innerHTML = 'Switch to Dark Theme';
		current = 0;
	} else {
		current = 1;
		document.getElementById('theme_changer').innerHTML = 'Switch to Light Theme';
	}
}