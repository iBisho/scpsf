let current = 1;

const colors = {
	white: {
		primary: '#000',
		secondary: '#fff',
		text: '#252525',
		table: '#0e0e0e'
	},
	dark: {
		primary: '#000',
		secondary: '#0e0e0e',
		text: '#dadada',
		table: '#fff'
	}
}

function switchColors() {
	document.documentElement.style.setProperty('--secondary-color', current ? colors.white.secondary : colors.dark.secondary);
	document.documentElement.style.setProperty('--text-color', current ? colors.white.text : colors.dark.text);
	document.documentElement.style.setProperty('--table-color', current ? colors.white.table : colors.dark.table);
	if (current) {
		document.getElementById('theme_changer').innerHTML = '<u>Switch to Dark Theme</u>';
		current = 0;
	} else {
		current = 1;
		document.getElementById('theme_changer').innerHTML = '<u>Switch to Light Theme</u>';
	}
}