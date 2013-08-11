window.onload = setup;

var keyboard;

function setup() {
	createKeys();
	document.onkeydown = handleKeyboardClick;
}

function createKeys() {
	keyboard = new KeyBoard();
	keyboard.load();
}

function handleKeyboardClick(e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	var keyCode = new KeyCode();
	var keyHit = keyCode.getCharacter(code);
		
	var musicKey = keyboard.getKey(currentNote);
	musicKey.clickNote();	
}
