window.onload = setup;

function setup() {
	var piano = new Piano();
	piano.setup();
	document.onkeydown = piano.handleKeyboardClick; //handles the keyboard click
}
