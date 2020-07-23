let current = 1;

const colors = {
	white: {
		primary: '#000',
		secondary: '#fff',
		text: '#252525',
		table: '#0a0a0a'
	},
	dark: {
		primary: '#000',
		secondary: '#0a0a0a',
		text: '#dadada',
		table: '#fff'
	}
}

function switchColors() {
	document.documentElement.style.setProperty('--secondary-color', current ? colors.white.secondary : colors.dark.secondary);
	document.documentElement.style.setProperty('--text-color', current ? colors.white.text : colors.dark.text);
	document.documentElement.style.setProperty('--table-color', current ? colors.white.table : colors.dark.table);
	if (current) {
		document.getElementById('theme_changer').innerHTML = 'Switch to Dark Theme';
		current = 0;
	} else {
		current = 1;
		document.getElementById('theme_changer').innerHTML = 'Switch to Light Theme';
	}
}